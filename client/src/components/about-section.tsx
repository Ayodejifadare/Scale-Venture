import { Check } from "lucide-react";

const teamHighlights = [
  "Former startup founders and CTOs",
  "Enterprise architecture specialists",
  "Innovation program veterans",
  "Y Combinator and Techstars alumni"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Built by Innovation Experts</h2>
            <p className="text-xl text-slate-600 mb-8">
              Our team combines decades of experience in startup development, corporate innovation, and technical excellence to deliver results that matter.
            </p>
            <div className="space-y-4">
              {teamHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-primary p-1 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Professional business meeting" 
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
            />
            <img 
              src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Creative startup workspace" 
              className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
