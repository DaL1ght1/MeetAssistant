"use client"

interface ConnectionStatusProps {
  state: "connecting" | "connected" | "disconnected"
}

export function ConnectionStatus({ state }: ConnectionStatusProps) {
  const statusConfig = {
    connecting: {
      color: "bg-amber-500",
      text: "Connecting...",
      pulse: true,
    },
    connected: {
      color: "bg-emerald-600",
      text: "Live",
      pulse: false,
    },
    disconnected: {
      color: "bg-destructive",
      text: "Disconnected",
      pulse: true,
    },
  }

  const config = statusConfig[state]

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-sm">
      <span className={`w-2 h-2 rounded-full ${config.color} ${config.pulse ? "animate-pulse" : ""}`} />
      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{config.text}</span>
    </div>
  )
}
