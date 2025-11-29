"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { CreateSession } from "@/components/presenter/create-session"
import { SessionHeader } from "@/components/presenter/session-header"
import { ReactionChart } from "@/components/presenter/reaction-chart"
import { ReactionHeatmap } from "@/components/presenter/reaction-heatmap"
import { AlertPanel } from "@/components/presenter/alert-panel"
import { QuestionFeed } from "@/components/presenter/question-feed"
import { AIInsightsPanel } from "@/components/presenter/ai-insights"
import { SessionSummaryPanel } from "@/components/presenter/session-summary"
import { useWebSocket } from "@/hooks/use-websocket"
import { sessionAPI } from "@/lib/api"
import type {
  Session,
  ReactionStats,
  ReactionTimePoint,
  Question,
  Alert,
  AIInsights,
  SessionSummary,
  WebSocketMessage,
} from "@/lib/types"

const DEFAULT_STATS: ReactionStats = {
  speed_up: 0,
  slow_down: 0,
  show_code: 0,
  lost: 0,
  total: 0,
  window_seconds: 60,
}

export default function PresenterPage() {
  const searchParams = useSearchParams()
  const initialSessionId = searchParams.get("session")

  const [session, setSession] = useState<Session | null>(null)
  const [createError, setCreateError] = useState<string | null>(null)
  const [stats, setStats] = useState<ReactionStats>(DEFAULT_STATS)
  const [reactionHistory, setReactionHistory] = useState<ReactionTimePoint[]>([])
  const [questions, setQuestions] = useState<Question[]>([])
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [insights, setInsights] = useState<AIInsights | null>(null)
  const [summary, setSummary] = useState<SessionSummary | null>(null)
  const [isLoadingInsights, setIsLoadingInsights] = useState(false)
  const [isLoadingSummary, setIsLoadingSummary] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const insightsIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const fetchStats = useCallback(async () => {
    if (!session) return
    try {
      const data = await sessionAPI.getStats(session.id)
      setStats(data)
    } catch { }
  }, [session])

  const fetchReactionHistory = useCallback(async () => {
    if (!session) return
    try {
      const data = await sessionAPI.getReactionHistory(session.id, 60)
      setReactionHistory(data)
    } catch { }
  }, [session])

  const fetchQuestions = useCallback(async () => {
    if (!session) return
    try {
      const data = await sessionAPI.getQuestions(session.id)
      setQuestions(data)
    } catch { }
  }, [session])

  const fetchAlerts = useCallback(async () => {
    if (!session) return
    try {
      const data = await sessionAPI.getAlerts(session.id)
      setAlerts(data)
    } catch { }
  }, [session])

  const fetchInsights = useCallback(async () => {
    if (!session) return
    setIsLoadingInsights(true)
    try {
      const data = await sessionAPI.getInsights(session.id)
      setInsights(data)
    } catch {
    } finally {
      setIsLoadingInsights(false)
    }
  }, [session])

  const handleMessage = useCallback((message: WebSocketMessage) => {
    switch (message.type) {
      case "stats_update":
        setStats(message.payload as ReactionStats)
        break
      case "alert":
        const alert = message.payload as Alert
        // Prevent duplicates by checking if alert already exists
        setAlerts((prev) => {
          const exists = prev.some(a => a.id === alert.id)
          return exists ? prev : [alert, ...prev]
        })
        break
      case "insights_update":
        setInsights(message.payload as AIInsights)
        break
      case "participant_count":
        const { count } = message.payload as { count: number }
        setSession((prev) => (prev ? { ...prev, participant_count: count } : null))
        break
      case "reaction":
        // Trigger refresh for reaction data
        fetchReactionHistory()
        fetchStats()
        break
      case "question":
        const question = message.payload as Question
        // Prevent duplicates by checking if question already exists
        setQuestions((prev) => {
          const exists = prev.some(q => q.id === question.id)
          return exists ? prev : [question, ...prev]
        })
        // Fetch insights to update question themes
        fetchInsights()
        break
    }
  }, [fetchReactionHistory, fetchStats, fetchInsights])

  const { connectionState, isConnected } = useWebSocket({
    sessionId: session?.id || "",
    role: "presenter",
    onMessage: handleMessage,
    autoConnect: !!session,
  })

  const handleCreateSession = async (title: string) => {
    setCreateError(null)
    try {
      const presenterId = `presenter_${Date.now()}`
      const newSession = await sessionAPI.create({
        title,
        presenter_id: presenterId,
      })
      setSession(newSession)

      const url = new URL(window.location.href)
      url.searchParams.set("session", newSession.id)
      window.history.replaceState({}, "", url.toString())
    } catch {
      setCreateError("Failed to create session. Please try again.")
    }
  }

  const handleEndSession = async () => {
    if (!session) return
    if (!confirm("Are you sure you want to end this session?")) return

    try {
      await sessionAPI.end(session.id)
      setSession((prev) => (prev ? { ...prev, is_active: false } : null))
      await handleGenerateSummary()
    } catch { }
  }

  const handleGenerateSummary = async () => {
    if (!session) return
    setShowSummary(true)
    setIsLoadingSummary(true)
    try {
      const data = await sessionAPI.getSummary(session.id)
      setSummary(data)
    } catch {
    } finally {
      setIsLoadingSummary(false)
    }
  }

  const handleDismissAlert = async (alertId: string) => {
    if (!session) return
    try {
      await sessionAPI.dismissAlert(session.id, alertId)
      setAlerts((prev) => prev.map((a) => (a.id === alertId ? { ...a, is_dismissed: true } : a)))
    } catch { }
  }

  const handleMarkQuestionAnswered = async (questionId: string) => {
    if (!session) return
    try {
      await sessionAPI.markQuestionAnswered(session.id, questionId)
      setQuestions((prev) => prev.map((q) => (q.id === questionId ? { ...q, is_answered: true } : q)))
    } catch { }
  }

  useEffect(() => {
    if (initialSessionId && !session) {
      sessionAPI
        .get(initialSessionId)
        .then((data) => {
          setSession(data)
        })
        .catch(() => { })
    }
  }, [initialSessionId, session])

  useEffect(() => {
    if (!session) return

    // Initial fetch
    fetchStats()
    fetchReactionHistory()
    fetchQuestions()
    fetchAlerts()
    fetchInsights()

    // Poll for updates less frequently since WebSocket handles most updates
    pollIntervalRef.current = setInterval(() => {
      fetchStats()
      fetchReactionHistory()
      fetchQuestions()
      fetchAlerts()
    }, 5000)

    // Poll for insights periodically
    insightsIntervalRef.current = setInterval(() => {
      fetchInsights()
    }, 15000)

    return () => {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current)
      if (insightsIntervalRef.current) clearInterval(insightsIntervalRef.current)
    }
  }, [session, fetchStats, fetchReactionHistory, fetchQuestions, fetchAlerts, fetchInsights])

  if (!session) {
    return <CreateSession onCreate={handleCreateSession} error={createError} />
  }

  if (showSummary && summary) {
    return (
      <div className="min-h-screen bg-background">
        <SessionHeader
          session={session}
          connectionState={connectionState}
          onEndSession={handleEndSession}
          onGenerateSummary={handleGenerateSummary}
        />
        <main className="max-w-2xl mx-auto p-4">
          <SessionSummaryPanel summary={summary} isLoading={isLoadingSummary} />
          <div className="mt-4 text-center">
            <button onClick={() => setShowSummary(false)} className="text-sm text-primary hover:underline">
              Back to Dashboard
            </button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <SessionHeader
        session={session}
        connectionState={connectionState}
        onEndSession={handleEndSession}
        onGenerateSummary={handleGenerateSummary}
      />

      <main className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ReactionHeatmap stats={stats} />
              <div className="space-y-4">
                <h3 className="text-sm font-semibold font-serif">Active Alerts</h3>
                <AlertPanel alerts={alerts} onDismiss={handleDismissAlert} />
              </div>
            </div>

            <ReactionChart data={reactionHistory} />

            <QuestionFeed questions={questions} onMarkAnswered={handleMarkQuestionAnswered} />
          </div>

          <aside className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold font-serif">AI Insights</h3>
            <AIInsightsPanel insights={insights} isLoading={isLoadingInsights} />
          </aside>
        </div>

        <footer className="mt-8 pt-4 border-t text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Share with audience:{" "}
            <span className="text-primary font-semibold">
              {typeof window !== "undefined" ? `${window.location.origin}/audience?session=${session.id}` : ""}
            </span>
          </p>
        </footer>
      </main>
    </div>
  )
}
