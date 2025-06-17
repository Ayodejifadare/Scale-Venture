import { Twitter, Linkedin, Instagram } from "lucide-react";

const services = [
  "MVP Development",
  "Business Modeling", 
  "Cap Table Management with Venture Design",
  "Technical Integration"
];

const company = [
  "About Us",
  "Case Studies",
  "Careers",
  "Contact"
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">LaunchForge</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Accelerating innovation through rapid MVP development, business modeling, and strategic guidance for the world's leading innovation organizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 LaunchForge. All rights reserved. Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
