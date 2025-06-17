import { Card, CardContent } from "@/components/ui/card";
import { Zap, BarChart3, Lightbulb, Check } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Venture Design",
    description: "Strategic venture design services to structure and optimize your startup for maximum growth potential and investor appeal.",
    features: [
      "Venture architecture",
      "Strategic planning",
      "Investment readiness",
      "Growth optimization"
    ]
  },
  {
    icon: Zap,
    title: "Fast MVP Development",
    description: "Build production-ready minimum viable products in 30 days or less using our proven development framework and technical expertise.",
    features: [
      "Full-stack development",
      "Cloud deployment",
      "API integrations",
      "Quality assurance"
    ]
  },
  {
    icon: BarChart3,
    title: "Business Modeling",
    description: "Create comprehensive business models, financial projections, and go-to-market strategies tailored to your startup's unique needs.",
    features: [
      "Financial modeling",
      "Market analysis",
      "Revenue projections",
      "Business plan creation"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide end-to-end startup services to accelerate your innovation pipeline and get your ideas to market faster than ever.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-slate-50 hover:shadow-lg transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="bg-primary p-3 rounded-lg w-fit mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
