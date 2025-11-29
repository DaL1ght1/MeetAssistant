"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactionStats } from "@/lib/types"

interface ReactionHeatmapProps {
  stats: ReactionStats
}

interface HeatmapCell {
  type: string
  label: string
  count: number
}

export function ReactionHeatmap({ stats }: ReactionHeatmapProps) {
  const cells: HeatmapCell[] = [
    { type: "speed_up", label: "Speed Up", count: stats.speed_up },
    { type: "slow_down", label: "Slow Down", count: stats.slow_down },
    { type: "show_code", label: "Show Code", count: stats.show_code },
    { type: "lost", label: "Lost", count: stats.lost },
  ]

  const maxCount = Math.max(...cells.map((c) => c.count), 1)

  const getIntensityClass = (count: number): string => {
    const ratio = count / maxCount
    if (ratio === 0) return "bg-muted"
    if (ratio < 0.25) return "bg-primary/20"
    if (ratio < 0.5) return "bg-primary/40"
    if (ratio < 0.75) return "bg-primary/60"
    return "bg-primary/80"
  }

  return (
    <Card className="border-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-serif">Reaction Intensity (Last {stats.window_seconds}s)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {cells.map((cell) => (
            <div
              key={cell.type}
              className={`
                p-3 rounded-sm border transition-colors duration-300
                ${getIntensityClass(cell.count)}
              `}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">{cell.label}</span>
                <span className="text-lg font-mono font-bold text-foreground">{cell.count}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Total reactions</span>
            <span className="font-mono font-semibold">{stats.total}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
