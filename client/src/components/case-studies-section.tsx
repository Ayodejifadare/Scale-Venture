import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "PAPDIS",
    description: "Leading accelerator increased cohort success rate by 40% using our rapid MVP development program.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=200",
    metric: "40% Increase",
    metricColor: "bg-green-100 text-green-800",
    type: "Accelerator"
  },
  {
    title: "Nest360",
    description: "Global corporation launched 5 internal innovations in 6 months, reducing time-to-market by 60%.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=200",
    metric: "60% Faster",
    metricColor: "bg-blue-100 text-blue-800",
    type: "Corporate"
  },
  {
    title: "NitHub",
    description: "Unilag innovation program launch MSME research into viable MVP.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=200",
    metric: "50K+ Users",
    metricColor: "bg-purple-100 text-purple-800",
    type: "Government"
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how we've helped organizations like yours accelerate innovation and bring game-changing products to market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="rounded-lg w-full h-32 object-cover" 
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{study.title}</h3>
                <p className="text-slate-600 mb-4">{study.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <Badge className={study.metricColor}>
                    {study.metric}
                  </Badge>
                  <span className="text-slate-500">{study.type}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
