
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block">The Future of</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                eXchange1 Investment
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock institutional-grade investment opportunities in the decentralized economy. 
              From token launches to exchange listings, we're your gateway to the next generation of finance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Start Investing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400">$2.5B+</div>
              <div className="text-gray-400 mt-2">Total Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400">500+</div>
              <div className="text-gray-400 mt-2">Successful Token Launches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400">50+</div>
              <div className="text-gray-400 mt-2">Exchange Partnerships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
