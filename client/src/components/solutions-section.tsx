import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Accelerators & Incubators",
    description: "Scale your cohort success with our rapid MVP development and business modeling services. Help more startups launch faster.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    features: [
      "Cohort-wide MVP development programs",
      "Standardized business modeling workshops",
      "Mentorship integration and support",
      "Portfolio company progress tracking"
    ]
  },
  {
    title: "Corporate Innovation Labs",
    description: "Co-founding services to build new complementary products that expand your corporate innovation portfolio and market reach.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    features: [
      "Co-founding services",
      "Complementary product development",
      "Corporate venture building",
      "Strategic product expansion"
    ]
  },
  {
    title: "Government & NGO Hubs",
    description: "Startup-as-a-service to support grant portfolio startups and research R&D with comprehensive development and validation services.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    features: [
      "Grant portfolio startup support",
      "Research R&D development",
      "Public sector compliance",
      "Innovation program management"
    ]
  }
];

export default function SolutionsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Tailored Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We understand that different organizations have unique needs. Our services are customized for your specific context and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="rounded-lg w-full h-48 object-cover" 
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600 mb-6">{solution.description}</p>
                <ul className="text-sm text-slate-600 space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary text-white hover:bg-secondary-brand"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
