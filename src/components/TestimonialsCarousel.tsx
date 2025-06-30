
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "eXchange1 helped us raise $50M in our Series A. Their network and expertise in tokenomics were game-changing.",
      author: "Sarah Chen",
      role: "CEO, DeFi Protocol",
      rating: 5,
      metric: "Series A Funding",
      value: "$50M"
    },
    {
      quote: "The compliance support was exceptional. We launched on 15 exchanges within 6 months of our token launch.",
      author: "Marcus Rodriguez",
      role: "Founder, GameFi Platform",
      rating: 5,
      metric: "Exchange Listings",
      value: "15 Exchanges"
    },
    {
      quote: "Their institutional network gave us access to tier-1 investors we couldn't reach before. ROI exceeded expectations.",
      author: "Elena Volkov",
      role: "CTO, Infrastructure Protocol",
      rating: 5,
      metric: "Investor ROI",
      value: "340%"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped innovative projects and investors achieve extraordinary results in the Web3 space.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 sm:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl text-gray-100 text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <div className="font-semibold text-white text-lg">{testimonials[currentIndex].author}</div>
                <div className="text-gray-400">{testimonials[currentIndex].role}</div>
              </div>

              <div className="text-center sm:text-right">
                <div className="text-2xl font-bold text-green-400">{testimonials[currentIndex].value}</div>
                <div className="text-gray-400 text-sm">{testimonials[currentIndex].metric}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full p-3 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full p-3 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
