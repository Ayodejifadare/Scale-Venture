import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gradient-hero py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Launch Your <span className="text-primary">MVP</span> in Record Time
            </h1>
            <p className="text-xl text-slate-600 mt-6 leading-relaxed">
              LaunchForge provides startup-as-a-service solutions for accelerators, corporate innovation labs, and government hubs. We build fast MVPs, handle business modeling, and manage cap tables so you can focus on what matters most.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-white hover:bg-secondary-brand shadow-lg text-lg px-8 py-4"
              >
                Start Your Project
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
              >
                Schedule Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-slate-600">MVPs Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-slate-600">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30 Days</div>
                <div className="text-sm text-slate-600">Avg. Launch Time</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Startup team collaboration" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">MVP Ready</div>
                  <div className="text-sm text-slate-600">In 30 days or less</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
