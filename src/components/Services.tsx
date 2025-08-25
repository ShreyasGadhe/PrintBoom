// src/components/Services.tsx
import { FileText, Image, Package, Shirt, Gift, Building } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Business Cards",
      description: "Premium business cards that make lasting impressions",
      features: ["Multiple finishes", "Same-day printing", "Bulk discounts"],
    },
    {
      icon: Image,
      title: "Marketing Materials",
      description: "Flyers, brochures, and posters that get noticed",
      features: ["Custom designs", "High-quality paper", "Fast delivery"],
    },
    {
      icon: Package,
      title: "Packaging",
      description: "Custom packaging solutions for your products",
      features: ["Eco-friendly options", "Custom sizes", "Brand printing"],
    },
    {
      icon: Shirt,
      title: "Apparel Printing",
      description: "T-shirts, hoodies, and custom clothing",
      features: ["Direct-to-garment", "Screen printing", "Embroidery"],
    },
    {
      icon: Gift,
      title: "Promotional Items",
      description: "Branded merchandise and corporate gifts",
      features: ["Wide selection", "Logo printing", "Bulk orders"],
    },
    {
      icon: Building,
      title: "Large Format",
      description: "Banners, signs, and display materials",
      features: ["Indoor/outdoor", "Weather resistant", "Installation service"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Printing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From small runs to large campaigns, we handle every printing need
            with professional quality and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-primary-100 rounded-lg p-4 w-fit mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
