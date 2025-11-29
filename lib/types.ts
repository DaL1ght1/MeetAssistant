export type ReactionType = "speed_up" | "slow_down" | "show_code" | "lost"

export interface Reaction {
  id: string
  session_id: string
  type: ReactionType
  timestamp: string
  user_id?: string
}

export interface Question {
  id: string
  session_id: string
  text: string
  created_at: string
  user_id?: string
  sentiment?: "positive" | "neutral" | "negative"
  theme?: string
  is_answered?: boolean
}

export interface Session {
  id: string
  title: string
  presenter_id: string
  created_at: string
  is_active: boolean
  participant_count: number
}

export interface ReactionStats {
  speed_up: number
  slow_down: number
  show_code: number
  lost: number
  total: number
  window_seconds: number
}

export interface ReactionTimePoint {
  timestamp: string
  speed_up: number
  slow_down: number
  show_code: number
  lost: number
}

export interface Alert {
  id: string
  type: "pacing" | "lost_room" | "speed_up" | "slow_down" | "code_demand" | "sentiment"
  message: string
  severity: "warning" | "critical" | "info"
  created_at: string
  is_dismissed: boolean
}

export interface PacingInsight {
  recommendation: string
  confidence: number
  trend: "stable" | "speeding_up" | "slowing_down"
}

export interface QuestionTheme {
  theme: string
  count: number
  examples: string[]
}

export interface SentimentAnalysis {
  overall: "positive" | "neutral" | "negative" | "mixed"
  breakdown: {
    interested: number
    confused: number
    frustrated: number
    excited: number
  }
}

export interface CodeDemand {
  level: "low" | "medium" | "high"
  suggestion: string
}

export interface SessionSummary {
  session_id: string
  duration_minutes: number
  total_participants: number
  total_reactions: number
  total_questions: number
  key_themes: string[]
  pacing_summary: string
  engagement_score: number
  recommendations: string[]
  generated_at: string
}

export interface AIInsights {
  pacing: PacingInsight
  sentiment: SentimentAnalysis
  question_themes: QuestionTheme[]
  code_demand: CodeDemand
  updated_at: string
}

export interface WebSocketMessage {
  type:
    | "reaction"
    | "question"
    | "stats_update"
    | "alert"
    | "insights_update"
    | "participant_count"
    | "connection_ack"
    | "reaction_ack"
    | "error"
  payload: unknown
}

export interface CreateSessionRequest {
  title: string
  presenter_id: string
}

export interface SubmitReactionRequest {
  session_id: string
  type: ReactionType
  user_id?: string
}

export interface SubmitQuestionRequest {
  session_id: string
  text: string
  user_id?: string
}
