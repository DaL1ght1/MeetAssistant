"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import type { AIInsights, QuestionTheme } from "@/lib/types"

interface AIInsightsPanelProps {
  insights: AIInsights | null
  isLoading?: boolean
}

export function AIInsightsPanel({ insights, isLoading }: AIInsightsPanelProps) {
  if (isLoading) {
    return (
      <Card className="border-2">
        <CardContent className="p-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-sm text-muted-foreground">Analyzing audience...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!insights) {
    return (
      <Card className="border-2 border-dashed">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground text-center font-serif italic">
            AI insights will appear as your session progresses
          </p>
        </CardContent>
      </Card>
    )
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "speeding_up":
        return "^"
      case "slowing_down":
        return "v"
      default:
        return "-"
    }
  }

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case "positive":
        return "text-emerald-600"
      case "negative":
        return "text-destructive"
      case "mixed":
        return "text-amber-600"
      default:
        return "text-muted-foreground"
    }
  }

  const getCodeDemandColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-destructive text-destructive-foreground"
      case "medium":
        return "bg-amber-500 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-4">
      <Card className="border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-serif flex items-center gap-2">
            <span className="font-mono text-primary">[AI]</span>
            Pacing Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Confidence</span>
            <div className="flex items-center gap-2">
              <Progress value={insights.pacing.confidence * 100} className="w-24 h-2" />
              <span className="text-sm font-mono font-semibold">{Math.round(insights.pacing.confidence * 100)}%</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg">{getTrendIcon(insights.pacing.trend)}</span>
            <p className="text-sm">{insights.pacing.recommendation}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-serif flex items-center gap-2">
            <span className="font-mono text-primary">[AI]</span>
            Audience Sentiment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className={`text-lg font-semibold capitalize ${getMoodColor(insights.sentiment.overall)}`}>
              {insights.sentiment.overall}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1">
            {Object.entries(insights.sentiment.breakdown).map(([mood, value]) => (
              <div key={mood} className="text-center">
                <div className="h-12 bg-muted rounded-sm relative overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-primary/60 transition-all"
                    style={{ height: `${value}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground capitalize mt-1 block">{mood.slice(0, 3)}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-serif flex items-center gap-2">
              <span className="font-mono text-primary">[AI]</span>
              Code Demand
            </CardTitle>
            <Badge className={getCodeDemandColor(insights.code_demand.level)}>{insights.code_demand.level}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">{insights.code_demand.suggestion}</p>
        </CardContent>
      </Card>

      {insights.question_themes.length > 0 && (
        <Card className="border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-serif flex items-center gap-2">
              <span className="font-mono text-primary">[AI]</span>
              Question Themes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {insights.question_themes.map((theme: QuestionTheme, idx: number) => (
              <div key={`${theme.theme}-${theme.count}-${idx}`} className="border-b last:border-0 pb-3 last:pb-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{theme.theme}</span>
                  <Badge variant="outline" className="text-xs">
                    {theme.count} questions
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground italic font-serif">&quot;{theme.examples[0]}&quot;</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
