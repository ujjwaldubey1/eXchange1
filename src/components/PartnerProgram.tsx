
import React from 'react';
import { Users, Zap, Shield, TrendingUp } from 'lucide-react';

export const PartnerProgram = () => {
  const partners = [
    { name: 'Binance', logo: '🔸' },
    { name: 'Coinbase', logo: '🔷' },
    { name: 'Polygon', logo: '🟣' },
    { name: 'Chainlink', logo: '🔗' },
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Network Access',
      description: 'Connect with top-tier projects and investors'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: 'Fast Track',
      description: 'Accelerated due diligence and onboarding'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Compliance',
      description: 'Full regulatory support and guidance'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Growth',
      description: 'Revenue sharing and scaling opportunities'
    }
  ];

  return (
    <section id="partner-program" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partner Program
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our exclusive network of trusted partners and unlock unprecedented opportunities 
            in the eXchange1 ecosystem. Together, we're building the future of decentralized finance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Partner Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-colors duration-300"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Trusted Partners</h3>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 text-center hover:border-cyan-400/50 transition-colors duration-300"
                >
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <div className="text-white font-semibold">{partner.name}</div>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
