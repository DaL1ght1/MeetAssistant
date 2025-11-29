"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

interface SessionJoinProps {
  onJoin: (sessionId: string) => void
  error?: string | null
}

export function SessionJoin({ onJoin, error }: SessionJoinProps) {
  const [sessionId, setSessionId] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = sessionId.trim()
    if (trimmed) {
      onJoin(trimmed)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md border-2">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 rounded-sm border-2 border-primary flex items-center justify-center mb-2">
            <span className="text-2xl font-mono font-bold text-primary">AF</span>
          </div>
          <CardTitle className="text-2xl font-serif">Join Presentation</CardTitle>
          <p className="text-sm text-muted-foreground">Enter the session code to provide feedback</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={sessionId}
              onChange={(e) => setSessionId(e.target.value.toUpperCase())}
              placeholder="Enter Session Code"
              className="text-center text-lg font-mono tracking-widest uppercase"
              maxLength={12}
            />
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
            <Button type="submit" className="w-full" disabled={!sessionId.trim()}>
              Join Session
            </Button>
            <p className="text-xs text-muted-foreground text-center pt-2 border-t">
              Try typing <span className="font-mono font-semibold text-primary">TEST</span> to see a demo
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
