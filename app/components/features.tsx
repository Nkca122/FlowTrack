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
      className="bg-center bg-cover"
      style={{
        backgroundImage: 'url("/path.svg")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border hover:border-primary">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-primary/80 mb-2 underline">
            Everything You Need to Succeed
          </h2>
          <p className="text-sm font-semibold text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to keep your team organized and
            productive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:*:even:scale-105 *:even:bg-card *:odd:bg-accent">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-md border hover:border-primary/50 hover:shadow-lg transition-all duration-300 realtive group"
              >
                <div className="flex flex-col justify-center items-start gap-1 relative mb-3">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="flex justify-center items-center text-xl font-bold text-foreground h-full group-hover:text-primary/50">
                      {feature.title}
                    </h3>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20">
                      <Icon
                        className="text-primary group-hover:animate-pulse"
                        size={24}
                      />
                    </div>
                  </div>

                  <div className="w-0 group-hover:transition-all group-hover:w-full group-hover:border-foreground group-hover:border absolute top-full" />
                </div>

                <p className="text-muted-foreground text-xs font-semibold group-hover:text-primary transition-all">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
