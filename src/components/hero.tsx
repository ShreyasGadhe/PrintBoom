// src/components/Hero.tsx
import { ArrowRight, Star, Printer } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 from 2,500+ reviews</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional
              <span className="text-primary-600 block">Printing</span>
              Made Simple
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From business cards to banners, we deliver high-quality prints
              with lightning-fast turnaround times. Your vision, our expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Start Your Order</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary">View Portfolio</button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">24h</div>
                <div className="text-gray-600">Fast Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500K+</div>
                <div className="text-gray-600">Orders Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">99%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-8 transform rotate-3">
              <div className="bg-white rounded-2xl p-6 transform -rotate-6 shadow-xl">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <Printer className="h-16 w-16 text-white" />
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-full p-4 shadow-lg">
              <Star className="h-8 w-8 text-white fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
