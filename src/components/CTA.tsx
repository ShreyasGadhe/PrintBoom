// src/components/CTA.tsx
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Bring Your Ideas to Life?
        </h2>

        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust PrintBlow for their
          printing needs. Fast, reliable, and always high-quality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
            <span>Get Instant Quote</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
            Call (555) 123-PRINT
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-primary-100">Online Ordering</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">48hr</div>
            <div className="text-primary-100">Standard Turnaround</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-primary-100">Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
