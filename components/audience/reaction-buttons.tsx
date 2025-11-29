"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { ReactionType } from "@/lib/types"

interface ReactionButtonsProps {
  onReaction: (type: ReactionType) => Promise<void>
  disabled?: boolean
}

interface ReactionConfig {
  type: ReactionType
  label: string
  icon: string
  description: string
}

const reactions: ReactionConfig[] = [
  {
    type: "speed_up",
    label: "Speed Up",
    icon: ">>",
    description: "Go faster",
  },
  {
    type: "slow_down",
    label: "Slow Down",
    icon: "<<",
    description: "Please slow down",
  },
  {
    type: "show_code",
    label: "Show Code",
    icon: "</>",
    description: "Want to see code",
  },
  {
    type: "lost",
    label: "I'm Lost",
    icon: "?",
    description: "Need clarification",
  },
]

export function ReactionButtons({ onReaction, disabled }: ReactionButtonsProps) {
  const [activeReaction, setActiveReaction] = useState<ReactionType | null>(null)
  const [cooldowns, setCooldowns] = useState<Record<ReactionType, boolean>>({
    speed_up: false,
    slow_down: false,
    show_code: false,
    lost: false,
  })

  const handleReaction = async (type: ReactionType) => {
    if (cooldowns[type] || disabled) return

    setActiveReaction(type)
    setCooldowns((prev) => ({ ...prev, [type]: true }))

    try {
      await onReaction(type)
    } finally {
      setTimeout(() => {
        setActiveReaction(null)
      }, 200)

      setTimeout(() => {
        setCooldowns((prev) => ({ ...prev, [type]: false }))
      }, 2000)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {reactions.map((reaction) => (
        <Button
          key={reaction.type}
          variant="outline"
          disabled={disabled || cooldowns[reaction.type]}
          onClick={() => handleReaction(reaction.type)}
          className={`
            h-28 flex flex-col items-center justify-center gap-2
            border-2 transition-all duration-150
            ${activeReaction === reaction.type ? "scale-95 bg-primary/10 border-primary" : ""}
            ${cooldowns[reaction.type] ? "opacity-60" : "hover:border-primary hover:bg-primary/5"}
          `}
        >
          <span className="text-2xl font-mono font-bold text-primary">{reaction.icon}</span>
          <span className="text-sm font-semibold">{reaction.label}</span>
          <span className="text-xs text-muted-foreground">{reaction.description}</span>
        </Button>
      ))}
    </div>
  )
}
