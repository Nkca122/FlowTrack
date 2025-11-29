import {
  CheckCircle,
  Zap,
  BarChart3,
  Users,
  Lock,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Smart Task Management",
    description:
      "Create, organize, and prioritize tasks with our intuitive interface. Get things done faster with drag-and-drop functionality.",
  },
  {
    icon: Zap,
    title: "Real-Time Collaboration",
    description:
      "Work together seamlessly with your team. Assign tasks, share updates, and stay synchronized in real-time.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track productivity metrics and visualize progress with powerful dashboards and detailed reports.",
  },
  {
    icon: Users,
    title: "Team Workspaces",
    description:
      "Organize projects by team, department, or client. Custom workspaces for every need.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and compliance standards. Your data is safe with us.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Desktop",
    description:
      "Access FlowTrack anywhere. Fully responsive apps for iOS, Android, and web.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          FEATURES
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-balance text-foreground mb-4">
          Everything You Need to Succeed
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Powerful features designed to keep your team organized and productive.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
