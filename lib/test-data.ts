import type {
  Session,
  ReactionStats,
  ReactionTimePoint,
  Question,
  Alert,
  AIInsights,
  SessionSummary,
  QuestionTheme,
} from "./types"

export const TEST_SESSION_ID = "test"

export const testSession: Session = {
  id: TEST_SESSION_ID,
  title: "Demo Presentation: Introduction to AI",
  presenter_id: "test_presenter",
  created_at: new Date().toISOString(),
  is_active: true,
  participant_count: 24,
}

export function generateTestStats(): ReactionStats {
  return {
    speed_up: Math.floor(Math.random() * 8),
    slow_down: Math.floor(Math.random() * 6),
    show_code: Math.floor(Math.random() * 10),
    lost: Math.floor(Math.random() * 5),
    total: Math.floor(Math.random() * 25) + 10,
    window_seconds: 60,
  }
}

export function generateTestReactionHistory(): ReactionTimePoint[] {
  const now = Date.now()
  const points: ReactionTimePoint[] = []

  for (let i = 11; i >= 0; i--) {
    points.push({
      timestamp: new Date(now - i * 5000).toISOString(),
      speed_up: Math.floor(Math.random() * 4),
      slow_down: Math.floor(Math.random() * 3),
      show_code: Math.floor(Math.random() * 5),
      lost: Math.floor(Math.random() * 2),
    })
  }

  return points
}

const sampleQuestions = [
  "Can you explain how the neural network architecture works?",
  "What's the difference between supervised and unsupervised learning?",
  "How do you handle overfitting in your models?",
  "Could you show a practical code example?",
  "What are the computational requirements for training?",
  "How does this compare to traditional machine learning?",
  "What datasets did you use for training?",
  "Can you explain the attention mechanism in more detail?",
]

let questionIdCounter = 1

export function generateTestQuestions(): Question[] {
  return sampleQuestions.slice(0, 5 + Math.floor(Math.random() * 3)).map((text, i) => ({
    id: `q_${questionIdCounter++}`,
    session_id: TEST_SESSION_ID,
    text,
    created_at: new Date(Date.now() - (sampleQuestions.length - i) * 30000).toISOString(),
    is_answered: i < 2,
    sentiment: (["positive", "neutral", "negative"] as const)[Math.floor(Math.random() * 3)],
  }))
}

let alertIdCounter = 1

export function generateTestAlerts(): Alert[] {
  const alertTypes: Array<{ severity: Alert["severity"]; message: string }> = [
    { severity: "critical", message: "Multiple audience members are lost - consider pausing for clarification" },
    { severity: "warning", message: "Audience is requesting more code examples" },
    { severity: "info", message: "Engagement is high - good pace!" },
  ]

  return alertTypes.slice(0, 1 + Math.floor(Math.random() * 2)).map((alert, i) => ({
    id: `alert_${alertIdCounter++}`,
    type: "pacing",
    severity: alert.severity,
    message: alert.message,
    created_at: new Date(Date.now() - i * 60000).toISOString(),
    is_dismissed: false,
  }))
}

export function generateTestInsights(): AIInsights {
  const pacingRecommendations = [
    "Your pace is well-balanced. The audience is following along nicely.",
    "Consider slowing down slightly - some participants are having trouble keeping up.",
    "The audience seems engaged. You might be able to pick up the pace a bit.",
    "Several 'Show me Code' requests detected. Consider adding a live demo.",
  ]

  const questionThemes: QuestionTheme[] = [
    {
      theme: "Technical Implementation",
      count: 3,
      examples: ["How does the neural network work?", "Can you show the code?"],
    },
    {
      theme: "Comparison with Alternatives",
      count: 2,
      examples: ["How does this compare to traditional ML?"],
    },
    {
      theme: "Practical Applications",
      count: 2,
      examples: ["What are real-world use cases?", "How is this used in production?"],
    },
  ]

  return {
    pacing: {
      recommendation: pacingRecommendations[Math.floor(Math.random() * pacingRecommendations.length)],
      confidence: 0.75 + Math.random() * 0.2,
      trend: (["stable", "speeding_up", "slowing_down"] as const)[Math.floor(Math.random() * 3)],
    },
    sentiment: {
      overall: (["positive", "neutral", "mixed"] as const)[Math.floor(Math.random() * 3)],
      breakdown: {
        interested: 45 + Math.floor(Math.random() * 20),
        confused: 10 + Math.floor(Math.random() * 15),
        frustrated: Math.floor(Math.random() * 10),
        excited: 15 + Math.floor(Math.random() * 15),
      },
    },
    question_themes: questionThemes,
    code_demand: {
      level: (["low", "medium", "high"] as const)[Math.floor(Math.random() * 3)],
      suggestion:
        Math.random() > 0.5
          ? "Consider showing a code snippet to address audience requests"
          : "Code demand is manageable - continue as planned",
    },
    updated_at: new Date().toISOString(),
  }
}

export function generateTestSummary(): SessionSummary {
  return {
    session_id: TEST_SESSION_ID,
    duration_minutes: 45,
    total_participants: 24,
    total_reactions: 87,
    total_questions: 12,
    key_themes: [
      "Neural Network Architecture",
      "Training Methodology",
      "Practical Applications",
      "Performance Optimization",
    ],
    pacing_summary:
      "The session maintained a good pace overall. There were two brief periods where the audience needed clarification, which were addressed promptly.",
    engagement_score: 78,
    recommendations: [
      "Include more code examples in future sessions",
      "Consider adding a Q&A section mid-presentation",
      "The technical deep-dive section was well-received",
    ],
    generated_at: new Date().toISOString(),
  }
}

export function isTestSession(sessionId: string | null): boolean {
  return sessionId?.toLowerCase() === TEST_SESSION_ID
}
