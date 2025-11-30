import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "Unlimited tasks & projects",
      "Basic analytics",
      "Email support",
      "Mobile app access",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing teams that need more power",
    features: [
      "Up to 25 team members",
      "Advanced analytics & reports",
      "Custom workflows",
      "Priority support",
      "API access",
      "Integrations",
      "Advanced security",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited team members",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Advanced compliance",
      "On-premise option",
      "White-label solution",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border hover:border-primary">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-primary mb-2 underline">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. Always flexible, always fair.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-md p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary/60 text-primary-foreground border-2 border-accent-foreground md:scale-105 shadow-2xl"
                  : "bg-accent border border-border hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-background border-t-2 border-t-accent-foreground text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold animate-bounce">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-2xl font-bold leading-none ${
                  plan.highlighted
                    ? "text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mb-6 text-sm ${
                  plan.highlighted
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-8 border-b-2">
                <span
                  className={`text-3xl font-bold ${
                    plan.highlighted
                      ? "text-primary-foreground/80"
                      : "text-foreground/80"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-xs font-semibold ml-1 ${
                    plan.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold mb-8 transition-all ${
                  plan.highlighted
                    ? "bg-background hover:bg-accent/90 text-accent-foreground border border-accent"
                    : "bg-primary text-primary-foreground hover:bg-primary/90 border border-accent-foreground"
                }`}
              >
                Get Started
              </button>

              <div className="space-y-2">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-1 *:font-semibold *:text-sm">
                    <Check
                      size={20}
                      className={
                        plan.highlighted ? "text-accent-foreground" : "text-primary"
                      }
                    />
                    <span
                      className={
                        plan.highlighted
                          ? "text-primary-foreground/80"
                          : "text-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <pre className="text-primary mb-4 underline text-sm font-semibold">
            {"  All plans include a 14-day free trial. No credit card required.  "}
          </pre>
        </div>
      </div>
    </section>
  );
}
