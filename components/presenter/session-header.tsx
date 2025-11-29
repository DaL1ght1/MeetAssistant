"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { CopyRoomCode } from "@/components/copy-room-code"
import type { Session } from "@/lib/types"

interface SessionHeaderProps {
  session: Session
  connectionState: "connecting" | "connected" | "disconnected"
  onEndSession: () => void
  onGenerateSummary: () => void
}

export function SessionHeader({ session, connectionState, onEndSession, onGenerateSummary }: SessionHeaderProps) {
  const connectionConfig = {
    connecting: { color: "bg-amber-500", text: "Connecting..." },
    connected: { color: "bg-emerald-500", text: "Live" },
    disconnected: { color: "bg-destructive", text: "Disconnected" },
  }

  const config = connectionConfig[connectionState]

  return (
    <header className="bg-card border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md border border-primary/50 bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-mono font-bold text-primary">AF</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold">{session.title}</h1>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-mono bg-muted px-1.5 py-0.5 rounded">{session.id}</span>
              <span className="text-border">|</span>
              <span>{session.participant_count} participants</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 border rounded-md">
            <span
              className={`w-2 h-2 rounded-full ${config.color} ${connectionState !== "connected" ? "animate-pulse" : ""}`}
            />
            <span className="text-xs font-medium uppercase tracking-wider">{config.text}</span>
          </div>
          <CopyRoomCode sessionId={session.id} />
          <Button variant="outline" size="sm" onClick={onGenerateSummary} className="bg-transparent">
            Summary
          </Button>
          <ThemeToggle />
          <Button variant="destructive" size="sm" onClick={onEndSession}>
            End
          </Button>
        </div>
      </div>
    </header>
  )
}
