"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Question } from "@/lib/types"

interface QuestionFeedProps {
  questions: Question[]
  onMarkAnswered: (questionId: string) => void
}

export function QuestionFeed({ questions, onMarkAnswered }: QuestionFeedProps) {
  const [filter, setFilter] = useState<"all" | "unanswered">("unanswered")

  const filteredQuestions = questions.filter((q) => (filter === "all" ? true : !q.is_answered))

  const getSentimentColor = (sentiment?: Question["sentiment"]): string => {
    switch (sentiment) {
      case "positive":
        return "bg-emerald-500/20 text-emerald-700"
      case "negative":
        return "bg-destructive/20 text-destructive"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card className="border-2 flex flex-col h-full">
      <CardHeader className="pb-2 flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-serif">Questions ({filteredQuestions.length})</CardTitle>
          <div className="flex gap-1">
            <Button
              variant={filter === "unanswered" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setFilter("unanswered")}
              className="text-xs h-7"
            >
              Pending
            </Button>
            <Button
              variant={filter === "all" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
              className="text-xs h-7"
            >
              All
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-64 px-4 pb-4">
          {filteredQuestions.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8 font-serif italic">No questions yet</p>
          ) : (
            <div className="space-y-2">
              {filteredQuestions.map((question) => (
                <div
                  key={question.id}
                  className={`
                    p-3 rounded-sm border bg-card
                    ${question.is_answered ? "opacity-60" : ""}
                  `}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm flex-1 font-serif">{question.text}</p>
                    {!question.is_answered && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onMarkAnswered(question.id)}
                        className="flex-shrink-0 h-6 text-xs"
                      >
                        Done
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-muted-foreground font-mono">
                      {new Date(question.created_at).toLocaleTimeString()}
                    </span>
                    {question.sentiment && (
                      <Badge variant="secondary" className={`text-xs ${getSentimentColor(question.sentiment)}`}>
                        {question.sentiment}
                      </Badge>
                    )}
                    {question.theme && (
                      <Badge variant="outline" className="text-xs">
                        {question.theme}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
