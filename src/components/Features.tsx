// src/components/Features.tsx
import { Clock, Shield, Truck, HeadphonesIcon } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: "Lightning Fast",
      description:
        "Most orders ready within 24-48 hours with our streamlined production process.",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description:
        "100% satisfaction guarantee with premium materials and rigorous quality control.",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description:
        "Free shipping on orders over $50, with express options available nationwide.",
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description:
        "Dedicated print specialists available to help with design and technical questions.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose PrintBlow?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering exceptional printing services that
            exceed your expectations every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-primary-600 mx-auto" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Upload your design or work with our team to create something
                amazing. Get your instant quote in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Upload Design</button>
                <button className="btn-secondary">Design Service</button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30%</div>
                <div className="text-lg mb-4">Off First Order</div>
                <p className="text-primary-100 mb-6">
                  New customers save 30% on their first printing order. No
                  minimum required.
                </p>
                <button className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                  Claim Discount
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
