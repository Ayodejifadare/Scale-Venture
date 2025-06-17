import { Heart, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "API-First Architecture",
    description: "Built with modern API standards for easy integration with your existing tools and workflows."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance with industry standards for data protection."
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Live data synchronization ensures your teams always have the latest information."
  }
];

export default function IntegrationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Seamless Data Integration</h2>
            <p className="text-xl text-slate-600 mb-8">
              Our technical teams work directly with your existing systems and data infrastructure to ensure smooth integration and maximum efficiency.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary p-2 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Technology integration workspace" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
            <div className="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
