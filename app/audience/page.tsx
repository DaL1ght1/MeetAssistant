"use client"

import { useState, useCallback, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SessionJoin } from "@/components/audience/session-join"
import { ConnectionStatus } from "@/components/audience/connection-status"
import { ReactionButtons } from "@/components/audience/reaction-buttons"
import { QuestionInput } from "@/components/audience/question-input"
import { ThemeToggle } from "@/components/theme-toggle"
import { useWebSocket } from "@/hooks/use-websocket"
import { reactionAPI, questionAPI, sessionAPI } from "@/lib/api"
import type { ReactionType, Session, WebSocketMessage } from "@/lib/types"

export default function AudiencePage() {
  const searchParams = useSearchParams()
  const initialSessionId = searchParams.get("session")

  const [sessionId, setSessionId] = useState<string | null>(initialSessionId)
  const [session, setSession] = useState<Session | null>(null)
  const [joinError, setJoinError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [reactionFeedback, setReactionFeedback] = useState<string | null>(null)

  const handleMessage = useCallback((message: WebSocketMessage) => {
    if (message.type === "connection_ack") {
      const payload = message.payload as { participant_count?: number }
    }
  }, [])

  const { connectionState, isConnected, send } = useWebSocket({
    sessionId: sessionId || "",
    role: "audience",
    onMessage: handleMessage,
    autoConnect: !!sessionId && !!session,
  })

  const handleJoinSession = async (id: string) => {
    setIsLoading(true)
    setJoinError(null)

    try {
      const sessionData = await sessionAPI.get(id)
      if (!sessionData.is_active) {
        setJoinError("This session has ended")
        return
      }
      setSession(sessionData)
      setSessionId(id)

      const url = new URL(window.location.href)
      url.searchParams.set("session", id)
      window.history.replaceState({}, "", url.toString())
    } catch {
      setJoinError("Session not found. Please check the code and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReaction = async (type: ReactionType) => {
    if (!sessionId) return

    const feedbackMessages: Record<ReactionType, string> = {
      speed_up: "Sent: Speed up request",
      slow_down: "Sent: Slow down request",
      show_code: "Sent: Show code request",
      lost: "Sent: Need clarification",
    }

    try {
      await reactionAPI.submit({
        session_id: sessionId,
        type,
      })

      send({
        type: "reaction",
        payload: { type, session_id: sessionId },
      })

      setReactionFeedback(feedbackMessages[type])
      setTimeout(() => setReactionFeedback(null), 2000)
    } catch {
      setReactionFeedback("Failed to send reaction")
      setTimeout(() => setReactionFeedback(null), 2000)
    }
  }

  const handleQuestion = async (text: string) => {
    if (!sessionId) return

    await questionAPI.submit({
      session_id: sessionId,
      text,
    })

    send({
      type: "question",
      payload: { text, session_id: sessionId },
    })
  }

  useEffect(() => {
    if (initialSessionId && !session) {
      handleJoinSession(initialSessionId)
    }
  }, [initialSessionId])

  if (!sessionId || !session) {
    return <SessionJoin onJoin={handleJoinSession} error={joinError} />
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-lg mx-auto space-y-4">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-serif font-semibold text-foreground">{session.title}</h1>
            <p className="text-xs text-muted-foreground font-mono">Session: {sessionId}</p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ConnectionStatus state={connectionState} />
          </div>
        </header>

        {reactionFeedback && (
          <div className="bg-primary/10 border border-primary/30 rounded-sm px-4 py-2 text-center">
            <span className="text-sm text-primary font-medium">{reactionFeedback}</span>
          </div>
        )}

        <Card className="border-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-serif">How is the pace?</CardTitle>
          </CardHeader>
          <CardContent>
            <ReactionButtons onReaction={handleReaction} disabled={!isConnected} />
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-serif">Have a question?</CardTitle>
          </CardHeader>
          <CardContent>
            <QuestionInput onSubmit={handleQuestion} disabled={!isConnected} />
          </CardContent>
        </Card>

        <footer className="text-center pt-4">
          <p className="text-xs text-muted-foreground">Your feedback helps the presenter adjust in real-time</p>
        </footer>
      </div>
    </div>
  )
}
