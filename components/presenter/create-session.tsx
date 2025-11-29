"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

interface CreateSessionProps {
  onCreate: (title: string) => Promise<void>
  error?: string | null
}

export function CreateSession({ onCreate, error }: CreateSessionProps) {
  const [title, setTitle] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return

    setIsCreating(true)
    try {
      await onCreate(trimmed)
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md border-2">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 rounded-sm border-2 border-primary flex items-center justify-center mb-2">
            <span className="text-2xl font-mono font-bold text-primary">AF</span>
          </div>
          <CardTitle className="text-2xl font-serif">Audience Feedback</CardTitle>
          <p className="text-sm text-muted-foreground">Create a new session to start collecting real-time feedback</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Session Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Q4 Product Demo"
                className="font-serif"
              />
            </div>
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
            <Button type="submit" className="w-full" disabled={!title.trim() || isCreating}>
              {isCreating ? "Creating..." : "Start Session"}
            </Button>
            <p className="text-xs text-muted-foreground text-center pt-2 border-t">
              Type <span className="font-mono font-semibold text-primary">test</span> as title to see a demo dashboard
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
