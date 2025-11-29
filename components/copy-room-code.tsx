"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check, Link } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface CopyRoomCodeProps {
  sessionId: string
}

export function CopyRoomCode({ sessionId }: CopyRoomCodeProps) {
  const [copied, setCopied] = useState<"code" | "link" | null>(null)

  const copyCode = async () => {
    await navigator.clipboard.writeText(sessionId)
    setCopied("code")
    setTimeout(() => setCopied(null), 2000)
  }

  const copyLink = async () => {
    const url = `${window.location.origin}/audience?session=${sessionId}`
    await navigator.clipboard.writeText(url)
    setCopied("link")
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Share</span>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={copyCode} className="cursor-pointer gap-2">
          <Copy className="h-4 w-4" />
          <span>Copy Room Code</span>
          <span className="ml-auto font-mono text-xs text-muted-foreground">{sessionId}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyLink} className="cursor-pointer gap-2">
          <Link className="h-4 w-4" />
          <span>Copy Join Link</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
