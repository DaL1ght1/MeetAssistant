import type { WebSocketMessage } from "./types"
import { isTestSession, generateTestStats, generateTestAlerts, generateTestInsights } from "./test-data"

type MessageHandler = (message: WebSocketMessage) => void
type ConnectionHandler = () => void

const WS_BASE_URL = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000"

class TestWebSocketClient {
  private messageHandlers: Set<MessageHandler> = new Set()
  private connectHandlers: Set<ConnectionHandler> = new Set()
  private disconnectHandlers: Set<ConnectionHandler> = new Set()
  private simulationInterval: NodeJS.Timeout | null = null
  private _isConnected = false
  private role: "audience" | "presenter"

  constructor(role: "audience" | "presenter") {
    this.role = role
  }

  connect(): void {
    setTimeout(() => {
      this._isConnected = true
      this.connectHandlers.forEach((handler) => handler())

      this.messageHandlers.forEach((handler) =>
        handler({
          type: "connection_ack",
          payload: { participant_count: 24 },
        }),
      )

      if (this.role === "presenter") {
        this.startSimulation()
      }
    }, 500)
  }

  private startSimulation(): void {
    this.simulationInterval = setInterval(() => {
      const random = Math.random()

      if (random < 0.3) {
        this.messageHandlers.forEach((handler) =>
          handler({
            type: "stats_update",
            payload: generateTestStats(),
          }),
        )
      } else if (random < 0.5) {
        this.messageHandlers.forEach((handler) =>
          handler({
            type: "reaction",
            payload: { type: "speed_up" },
          }),
        )
      } else if (random < 0.6) {
        const alerts = generateTestAlerts()
        if (alerts.length > 0) {
          this.messageHandlers.forEach((handler) =>
            handler({
              type: "alert",
              payload: alerts[0],
            }),
          )
        }
      } else if (random < 0.7) {
        this.messageHandlers.forEach((handler) =>
          handler({
            type: "insights_update",
            payload: generateTestInsights(),
          }),
        )
      }
    }, 3000)
  }

  send(message: WebSocketMessage): void {
    if (this.role === "audience" && message.type === "reaction") {
      setTimeout(() => {
        this.messageHandlers.forEach((handler) =>
          handler({
            type: "reaction_ack",
            payload: { success: true },
          }),
        )
      }, 100)
    }
  }

  disconnect(): void {
    this._isConnected = false
    if (this.simulationInterval) {
      clearInterval(this.simulationInterval)
      this.simulationInterval = null
    }
    this.disconnectHandlers.forEach((handler) => handler())
  }

  onMessage(handler: MessageHandler): () => void {
    this.messageHandlers.add(handler)
    return () => this.messageHandlers.delete(handler)
  }

  onConnect(handler: ConnectionHandler): () => void {
    this.connectHandlers.add(handler)
    return () => this.connectHandlers.delete(handler)
  }

  onDisconnect(handler: ConnectionHandler): () => void {
    this.disconnectHandlers.add(handler)
    return () => this.disconnectHandlers.delete(handler)
  }

  get isConnected(): boolean {
    return this._isConnected
  }

  get connectionState(): "connecting" | "connected" | "disconnected" {
    return this._isConnected ? "connected" : "disconnected"
  }
}

export class WebSocketClient {
  private ws: WebSocket | null = null
  private url: string
  private reconnectAttempts = 0
  private maxReconnectAttempts = 10
  private reconnectDelay = 1000
  private messageHandlers: Set<MessageHandler> = new Set()
  private connectHandlers: Set<ConnectionHandler> = new Set()
  private disconnectHandlers: Set<ConnectionHandler> = new Set()
  private isIntentionalClose = false
  private messageQueue: string[] = []

  constructor(sessionId: string, role: "audience" | "presenter") {
    this.url = `${WS_BASE_URL}/ws?sessionId=${sessionId}&role=${role}`
  }

  connect(): void {
    if (this.ws?.readyState === WebSocket.OPEN) return

    this.isIntentionalClose = false
    this.ws = new WebSocket(this.url)

    this.ws.onopen = () => {
      this.reconnectAttempts = 0
      this.reconnectDelay = 1000
      this.connectHandlers.forEach((handler) => handler())
      this.flushMessageQueue()
    }

    this.ws.onmessage = (event) => {
      try {
        const message: WebSocketMessage = JSON.parse(event.data)
        this.messageHandlers.forEach((handler) => handler(message))
      } catch { }
    }

    this.ws.onclose = () => {
      this.disconnectHandlers.forEach((handler) => handler())
      if (!this.isIntentionalClose) {
        this.attemptReconnect()
      }
    }

    this.ws.onerror = () => { }
  }

  private attemptReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) return

    this.reconnectAttempts++
    this.reconnectDelay = Math.min(this.reconnectDelay * 1.5, 30000)

    setTimeout(() => {
      this.connect()
    }, this.reconnectDelay)
  }

  private flushMessageQueue(): void {
    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift()
      if (message && this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(message)
      }
    }
  }

  send(message: WebSocketMessage): void {
    const data = JSON.stringify(message)
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(data)
    } else {
      this.messageQueue.push(data)
    }
  }

  disconnect(): void {
    this.isIntentionalClose = true
    this.ws?.close()
    this.ws = null
  }

  onMessage(handler: MessageHandler): () => void {
    this.messageHandlers.add(handler)
    return () => this.messageHandlers.delete(handler)
  }

  onConnect(handler: ConnectionHandler): () => void {
    this.connectHandlers.add(handler)
    return () => this.connectHandlers.delete(handler)
  }

  onDisconnect(handler: ConnectionHandler): () => void {
    this.disconnectHandlers.add(handler)
    return () => this.disconnectHandlers.delete(handler)
  }

  get isConnected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN
  }

  get connectionState(): "connecting" | "connected" | "disconnected" {
    if (!this.ws) return "disconnected"
    switch (this.ws.readyState) {
      case WebSocket.CONNECTING:
        return "connecting"
      case WebSocket.OPEN:
        return "connected"
      default:
        return "disconnected"
    }
  }
}

export function createAudienceWebSocket(sessionId: string): WebSocketClient | TestWebSocketClient {
  if (isTestSession(sessionId)) {
    return new TestWebSocketClient("audience")
  }
  return new WebSocketClient(sessionId, "audience")
}

export function createPresenterWebSocket(sessionId: string): WebSocketClient | TestWebSocketClient {
  if (isTestSession(sessionId)) {
    return new TestWebSocketClient("presenter")
  }
  return new WebSocketClient(sessionId, "presenter")
}
