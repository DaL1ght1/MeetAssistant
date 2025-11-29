import type {
  Session,
  CreateSessionRequest,
  SubmitReactionRequest,
  SubmitQuestionRequest,
  ReactionStats,
  Question,
  AIInsights,
  SessionSummary,
  Alert,
  ReactionTimePoint,
} from "./types"
import {
  isTestSession,
  testSession,
  generateTestStats,
  generateTestReactionHistory,
  generateTestQuestions,
  generateTestAlerts,
  generateTestInsights,
  generateTestSummary,
} from "./test-data"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: "Request failed" }))
    throw new Error(error.detail || `HTTP ${response.status}`)
  }

  return response.json()
}

export const sessionAPI = {
  create: (data: CreateSessionRequest): Promise<Session> => {
    if (data.title.toLowerCase() === "test") {
      return Promise.resolve({ ...testSession, created_at: new Date().toISOString() })
    }
    return fetchAPI("/api/session/create", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },

  get: (sessionId: string): Promise<Session> => {
    if (isTestSession(sessionId)) {
      return Promise.resolve({ ...testSession, created_at: new Date().toISOString() })
    }
    return fetchAPI(`/api/session/${sessionId}`)
  },

  end: (sessionId: string): Promise<{ success: boolean }> => {
    if (isTestSession(sessionId)) {
      return Promise.resolve({ success: true })
    }
    return fetchAPI(`/api/session/${sessionId}/end`, { method: "POST" })
  },

  getStats: (sessionId: string): Promise<ReactionStats> => {
    if (isTestSession(sessionId)) {
      return Promise.resolve(generateTestStats())
    }
    return fetchAPI(`/api/session/${sessionId}/stats`)
  },

  getReactionHistory: (sessionId: string, windowSeconds?: number): Promise<ReactionTimePoint[]> => {
    if (isTestSession(sessionId)) {
      return Promise.resolve(generateTestReactionHistory())
    }
    return fetchAPI(`/api/session/${sessionId}/reactions/history${windowSeconds ? `?window=${windowSeconds}` : ""}`)
  },

  getQuestions: (sessionId: string, unansweredOnly?: boolean): Promise<Question[]> => {
    if (isTestSession(sessionId)) {
      return Promise.resolve(generateTestQuestions())
    }
    return fetchAPI(`/api/session/${sessionId}/questions${unansweredOnly ? "?unanswered=true" : ""}`)
  },

  getInsights: (sessionId: string): Promise<AIInsights> => {
    if (isTestSession(sessionId)) {
      return Promise.resolve(generateTestInsights())
    }
    return fetchAPI(`/api/session/${sessionId}/insights`)
  },

  getAlerts: (sessionId: string): Promise<Alert[]> => {
    if (isTestSession(sessionId)) {
      return Promise.resolve(generateTestAlerts())
    }
    return fetchAPI(`/api/session/${sessionId}/alerts`)
  },

  getSummary: (sessionId: string): Promise<SessionSummary> => {
    if (isTestSession(sessionId)) {
      return Promise.resolve(generateTestSummary())
    }
    return fetchAPI(`/api/session/${sessionId}/summary`)
  },

  dismissAlert: (sessionId: string, alertId: string): Promise<{ success: boolean }> => {
    if (isTestSession(sessionId)) {
      return Promise.resolve({ success: true })
    }
    return fetchAPI(`/api/session/${sessionId}/alerts/${alertId}/dismiss`, {
      method: "POST",
    })
  },

  markQuestionAnswered: (sessionId: string, questionId: string): Promise<{ success: boolean }> => {
    if (isTestSession(sessionId)) {
      return Promise.resolve({ success: true })
    }
    return fetchAPI(`/api/session/${sessionId}/questions/${questionId}/answered`, {
      method: "POST",
    })
  },
}

export const reactionAPI = {
  submit: (data: SubmitReactionRequest): Promise<{ success: boolean }> => {
    if (isTestSession(data.session_id)) {
      return Promise.resolve({ success: true })
    }
    return fetchAPI("/api/reactions", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },
}

export const questionAPI = {
  submit: (data: SubmitQuestionRequest): Promise<Question> => {
    if (isTestSession(data.session_id)) {
      return Promise.resolve({
        id: `q_${Date.now()}`,
        session_id: data.session_id,
        text: data.text,
        created_at: new Date().toISOString(),
        is_answered: false,
      })
    }
    return fetchAPI("/api/questions", {
      method: "POST",
      body: JSON.stringify(data),
    })
  },
}
