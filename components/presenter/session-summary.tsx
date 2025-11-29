"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import type { SessionSummary } from "@/lib/types"

interface SessionSummaryPanelProps {
  summary: SessionSummary | null
  isLoading?: boolean
}

export function SessionSummaryPanel({ summary, isLoading }: SessionSummaryPanelProps) {
  if (isLoading) {
    return (
      <Card className="border-2">
        <CardContent className="p-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-sm text-muted-foreground">Generating summary...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!summary) {
    return null
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-lg font-serif">Session Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-muted rounded-sm">
            <p className="text-2xl font-mono font-bold">{summary.duration_minutes}</p>
            <p className="text-xs text-muted-foreground">Minutes</p>
          </div>
          <div className="p-3 bg-muted rounded-sm">
            <p className="text-2xl font-mono font-bold">{summary.total_participants}</p>
            <p className="text-xs text-muted-foreground">Participants</p>
          </div>
          <div className="p-3 bg-muted rounded-sm">
            <p className="text-2xl font-mono font-bold">{summary.total_reactions}</p>
            <p className="text-xs text-muted-foreground">Reactions</p>
          </div>
          <div className="p-3 bg-muted rounded-sm">
            <p className="text-2xl font-mono font-bold">{summary.total_questions}</p>
            <p className="text-xs text-muted-foreground">Questions</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold">Engagement Score</h4>
            <span className="text-lg font-mono font-bold text-primary">{summary.engagement_score}%</span>
          </div>
          <Progress value={summary.engagement_score} className="h-2" />
        </div>

        {summary.key_themes.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2">Key Themes</h4>
            <div className="flex flex-wrap gap-1">
              {summary.key_themes.map((theme, idx) => (
                <Badge key={`${theme}-${idx}`} variant="secondary">
                  {theme}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {summary.pacing_summary && (
          <div>
            <h4 className="text-sm font-semibold mb-2">Pacing Summary</h4>
            <p className="text-sm text-muted-foreground bg-muted p-3 rounded-sm font-serif">{summary.pacing_summary}</p>
          </div>
        )}

        {summary.recommendations.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2">Recommendations</h4>
            <ul className="text-sm space-y-1">
              {summary.recommendations.map((rec, idx) => (
                <li key={`rec-${idx}-${rec.substring(0, 20)}`} className="flex items-start gap-2">
                  <span className="text-primary font-mono">{idx + 1}.</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground text-center font-mono">
            Generated at {new Date(summary.generated_at).toLocaleString()}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
