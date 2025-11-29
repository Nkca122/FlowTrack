import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO at TechStart",
    avatar: "/professional-woman-avatar.png",
    content:
      "FlowTrack transformed how our team works. We've cut project timelines by 40% and team satisfaction is through the roof.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager at Innovate Co",
    avatar: "/professional-man-avatar.png",
    content:
      "The analytics dashboard gives us insights we never had before. It's become essential to our daily workflow.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Operations Lead at Global Inc",
    avatar: "/professional-woman-avatar-glasses.png",
    content:
      "Support is incredible and the product keeps getting better. Best investment we've made for team productivity.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-muted/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground mb-4">Loved by Teams Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about FlowTrack.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{`"${testimonial.content}"`}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-border"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
