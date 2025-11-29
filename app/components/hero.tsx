import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              ✨ The Future of Productivity
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight text-foreground mb-6">
              Work Smarter, Not Harder
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              FlowTrack helps teams organize tasks, track progress, and achieve goals with ease. Intuitive, powerful,
              and built for modern workflows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition">
              Get Started Free <ArrowRight size={20} />
            </button>
            <button className="border-2 border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition">
              Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-2xl font-bold text-foreground">10K+</p>
              <p className="text-muted-foreground">Active Teams</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">4.9★</p>
              <p className="text-muted-foreground">Customer Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">99.9%</p>
              <p className="text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-accent/20 to-transparent rounded-2xl blur-3xl"></div>
          <img
            src="/modern-productivity-dashboard-with-tasks-and-timel.jpg"
            alt="FlowTrack Dashboard"
            className="relative rounded-2xl w-full h-auto shadow-2xl border border-border"
          />
        </div>
      </div>
    </section>
  )
}
