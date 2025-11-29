"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface QuestionInputProps {
  onSubmit: (question: string) => Promise<void>
  disabled?: boolean
  maxLength?: number
}

export function QuestionInput({ onSubmit, disabled, maxLength = 500 }: QuestionInputProps) {
  const [question, setQuestion] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    const trimmed = question.trim()
    if (!trimmed || isSubmitting) return

    setIsSubmitting(true)
    try {
      await onSubmit(trimmed)
      setQuestion("")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const remaining = maxLength - question.length

  return (
    <div className="space-y-3">
      <div className="relative">
        <Textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value.slice(0, maxLength))}
          onKeyDown={handleKeyDown}
          placeholder="Type your question here..."
          disabled={disabled || isSubmitting}
          className="min-h-24 resize-none pr-16 font-serif bg-card"
          rows={3}
        />
        <span
          className={`absolute bottom-2 right-2 text-xs font-mono ${remaining < 50 ? "text-destructive" : "text-muted-foreground"}`}
        >
          {remaining}
        </span>
      </div>
      <Button onClick={handleSubmit} disabled={disabled || isSubmitting || !question.trim()} className="w-full">
        {isSubmitting ? "Sending..." : "Submit Question"}
      </Button>
      <p className="text-xs text-muted-foreground text-center font-mono">Press Cmd/Ctrl + Enter to submit</p>
    </div>
  )
}
