import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO at TechStart",
    avatar: "/professional-woman-avatar.png",
    content:
      "FlowTrack transformed how our team works. We've cut project timelines by 40% and team satisfaction is through the roof.",
    rating: 4,
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
    rating: 3,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="">
      <div
        className="max-w-7xl rounded-md mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-primary/20 border bg-center bg-repeat"
        style={{
          backgroundImage: "url('/path.svg')",
        }}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border hover:border-primary">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground mb-2 underline">
            Loved by Teams Worldwide
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about FlowTrack.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:*:even:translate-y-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-primary-foreground border-2 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-primary"
                />
                <div>
                  <p className="font-bold text-background leading-none">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-primary/50 font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      testimonial.rating > i ? "fill-primary" : null
                    } text-primary`}
                  />
                ))}
              </div>
              <p className="text-background text-xs">{`${testimonial.content}`}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
