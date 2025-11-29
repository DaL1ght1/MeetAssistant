"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Alert } from "@/lib/types"

interface AlertPanelProps {
  alerts: Alert[]
  onDismiss: (alertId: string) => void
}

export function AlertPanel({ alerts, onDismiss }: AlertPanelProps) {
  const activeAlerts = alerts.filter((a) => !a.is_dismissed)

  const getSeverityStyles = (severity: Alert["severity"]) => {
    switch (severity) {
      case "critical":
        return "border-destructive bg-destructive/10 text-destructive"
      case "warning":
        return "border-amber-500 bg-amber-500/10 text-amber-700"
      default:
        return "border-primary bg-primary/10 text-primary"
    }
  }

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "lost_room":
        return "!!"
      case "speed_up":
        return ">>"
      case "slow_down":
        return "<<"
      case "code_demand":
        return "</>"
      case "sentiment":
        return "~"
      case "pacing":
        return "||"
      default:
        return "i"
    }
  }

  if (activeAlerts.length === 0) {
    return (
      <Card className="border-2 border-dashed">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground text-center font-serif italic">No active alerts</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-2">
      {activeAlerts.map((alert) => (
        <Card key={alert.id} className={`border-2 ${getSeverityStyles(alert.severity)}`}>
          <CardContent className="p-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-sm border flex items-center justify-center flex-shrink-0 font-mono font-bold">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{alert.message}</p>
                <p className="text-xs opacity-70 mt-1 font-mono">{new Date(alert.created_at).toLocaleTimeString()}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDismiss(alert.id)}
                className="flex-shrink-0 h-6 w-6 p-0"
              >
                x
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
