"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { createAudienceWebSocket, createPresenterWebSocket } from "@/lib/websocket"
import type { WebSocketMessage } from "@/lib/types"

interface UseWebSocketOptions {
  sessionId: string
  role: "audience" | "presenter"
  onMessage?: (message: WebSocketMessage) => void
  autoConnect?: boolean
}

interface UseWebSocketReturn {
  isConnected: boolean
  connectionState: "connecting" | "connected" | "disconnected"
  send: (message: WebSocketMessage) => void
  connect: () => void
  disconnect: () => void
}

type WSClient = ReturnType<typeof createAudienceWebSocket>

export function useWebSocket({
  sessionId,
  role,
  onMessage,
  autoConnect = true,
}: UseWebSocketOptions): UseWebSocketReturn {
  const wsRef = useRef<WSClient | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [connectionState, setConnectionState] = useState<"connecting" | "connected" | "disconnected">("disconnected")

  useEffect(() => {
    wsRef.current = role === "audience" ? createAudienceWebSocket(sessionId) : createPresenterWebSocket(sessionId)

    const unsubConnect = wsRef.current.onConnect(() => {
      setIsConnected(true)
      setConnectionState("connected")
    })

    const unsubDisconnect = wsRef.current.onDisconnect(() => {
      setIsConnected(false)
      setConnectionState("disconnected")
    })

    const unsubMessage = onMessage ? wsRef.current.onMessage(onMessage) : undefined

    if (autoConnect) {
      setConnectionState("connecting")
      wsRef.current.connect()
    }

    return () => {
      unsubConnect()
      unsubDisconnect()
      unsubMessage?.()
      wsRef.current?.disconnect()
    }
  }, [sessionId, role, autoConnect])

  useEffect(() => {
    if (!wsRef.current || !onMessage) return
    return wsRef.current.onMessage(onMessage)
  }, [onMessage])

  const send = useCallback((message: WebSocketMessage) => {
    wsRef.current?.send(message)
  }, [])

  const connect = useCallback(() => {
    setConnectionState("connecting")
    wsRef.current?.connect()
  }, [])

  const disconnect = useCallback(() => {
    wsRef.current?.disconnect()
  }, [])

  return {
    isConnected,
    connectionState,
    send,
    connect,
    disconnect,
  }
}
