
import React from 'react';
import { Target, BarChart3, Lock, Coins } from 'lucide-react';

export const InvestorProgram = () => {
  const investors = [
    { name: 'Andreessen Horowitz', logo: '🏛️' },
    { name: 'Sequoia Capital', logo: '🌲' },
    { name: 'Paradigm', logo: '⬢' },
    { name: 'Electric Capital', logo: '⚡' },
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: 'Curated Deals',
      description: 'Hand-picked investment opportunities from our deal flow'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive market insights and performance tracking'
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      title: 'Secure Custody',
      description: 'Institutional-grade security and asset protection'
    },
    {
      icon: <Coins className="w-8 h-8 text-green-400" />,
      title: 'Diverse Assets',
      description: 'Access to tokens, NFTs, and DeFi protocols'
    }
  ];

  return (
    <section id="investor-program" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Investor Program
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access exclusive investment opportunities with institutional-grade infrastructure. 
            From early-stage tokens to established DeFi protocols, build your eXchange1 portfolio with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Backed by Top Investors</h3>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {investors.map((investor, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 text-center hover:border-purple-400/50 transition-colors duration-300"
                >
                  <div className="text-4xl mb-4">{investor.logo}</div>
                  <div className="text-white font-semibold text-sm">{investor.name}</div>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Investing
            </button>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Investment Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-400/50 transition-colors duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
