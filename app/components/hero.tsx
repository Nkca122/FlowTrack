import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="bg-center bg-contain bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-bg.svg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border hover:border-primary">
                The Future of Productivity
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-none text-foreground mb-6">
                Work Smarter, Not Harder
              </h1>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                FlowTrack helps teams organize tasks, track progress, and
                achieve goals with ease. Intuitive, powerful, and built for
                modern workflows.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition border-2 hover:border-accent-foreground">
                Get Started Free <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-primary">10K +</p>
                <p className="text-muted-foreground text-xs">Active Teams</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4.9 ★</p>
                <p className="text-muted-foreground text-xs">Customer Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">99.9%</p>
                <p className="text-muted-foreground text-xs">Uptime</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/hero.webp"
              alt="FlowTrack Dashboard"
              className="relative rounded-2xl w-full h-auto shadow-2xl border-2 border-accent-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
