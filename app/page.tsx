import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Users, Presentation, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center space-y-4 pb-2">
          <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold tracking-tight">Audience Feedback</CardTitle>
            <p className="text-muted-foreground text-sm mt-1">Real-time insights for better presentations</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          <div className="grid grid-cols-1 gap-3">
            <Link href="/presenter">
              <Button className="w-full h-12 text-base gap-2" size="lg">
                <Presentation className="w-5 h-5" />
                Start Presenting
              </Button>
            </Link>
            <Link href="/audience">
              <Button variant="outline" className="w-full h-12 text-base gap-2 bg-transparent" size="lg">
                <Users className="w-5 h-5" />
                Join as Audience
              </Button>
            </Link>
          </div>

          <div className="pt-4 border-t">
            <p className="text-xs text-muted-foreground text-center mb-3">Try the demo with test mode</p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/presenter?session=test">
                <Button variant="secondary" className="w-full text-sm" size="sm">
                  Demo Dashboard
                </Button>
              </Link>
              <Link href="/audience?session=test">
                <Button variant="secondary" className="w-full text-sm" size="sm">
                  Demo Audience
                </Button>
              </Link>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="text-sm font-semibold mb-3 text-center">How it works</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-sm">Presenter creates a session and shares the code</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-sm">Audience joins and sends real-time reactions</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-sm">AI analyzes feedback and provides insights</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
