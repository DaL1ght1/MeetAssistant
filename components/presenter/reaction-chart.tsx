"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ReactionTimePoint } from "@/lib/types"

interface ReactionChartProps {
  data: ReactionTimePoint[]
}

export function ReactionChart({ data }: ReactionChartProps) {
  const formattedData = data.map((point) => ({
    ...point,
    time: new Date(point.timestamp).toLocaleTimeString("en-US", {
      hour12: false,
      minute: "2-digit",
      second: "2-digit",
    }),
  }))

  return (
    <Card className="border-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-serif flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-chart-1 animate-pulse" />
          Live Reactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        {formattedData.length === 0 ? (
          <div className="h-48 flex items-center justify-center">
            <p className="text-sm text-muted-foreground font-serif italic">Waiting for reactions...</p>
          </div>
        ) : (
          <ChartContainer
            config={{
              speed_up: { label: "Speed Up", color: "hsl(var(--chart-1))" },
              slow_down: { label: "Slow Down", color: "hsl(var(--chart-2))" },
              show_code: { label: "Show Code", color: "hsl(var(--chart-3))" },
              lost: { label: "Lost", color: "hsl(var(--chart-4))" },
            }}
            className="h-48"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={formattedData} key={formattedData.length}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} tickLine={false} />
                <YAxis
                  tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                  tickLine={false}
                  allowDecimals={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend wrapperStyle={{ fontSize: "10px" }} iconType="square" iconSize={8} />
                <Line
                  type="monotone"
                  dataKey="speed_up"
                  stroke="var(--color-speed_up)"
                  strokeWidth={2}
                  dot={false}
                  name="Speed Up"
                />
                <Line
                  type="monotone"
                  dataKey="slow_down"
                  stroke="var(--color-slow_down)"
                  strokeWidth={2}
                  dot={false}
                  name="Slow Down"
                />
                <Line
                  type="monotone"
                  dataKey="show_code"
                  stroke="var(--color-show_code)"
                  strokeWidth={2}
                  dot={false}
                  name="Show Code"
                />
                <Line type="monotone" dataKey="lost" stroke="var(--color-lost)" strokeWidth={2} dot={false} name="Lost" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
