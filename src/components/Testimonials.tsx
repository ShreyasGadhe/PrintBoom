// src/components/Testimonials.tsx
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Marketing Director, TechStart",
      rating: 5,
      text: "PrintBlow consistently delivers high-quality materials on time. Their customer service is outstanding and they've helped us look professional at every event.",
    },
    {
      name: "Mike Chen",
      company: "Owner, Local Restaurant",
      rating: 5,
      text: "The menu designs and promotional materials they created for us are beautiful. Sales increased 20% after our rebrand with PrintBlow's help.",
    },
    {
      name: "Emily Rodriguez",
      company: "Event Coordinator",
      rating: 5,
      text: "I've used PrintBlow for dozens of events. They never disappoint - always on time, exactly what we ordered, and the quality is consistently excellent.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Do not just take our word for it - see what thousands of satisfied
            customers have to say about our printing services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-gray-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-primary-50 rounded-full px-8 py-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="text-gray-700">
              <span className="font-bold">4.9/5</span> average rating from
              <span className="font-bold"> 2,500+</span> reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
