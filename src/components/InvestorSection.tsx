
import React from 'react';
import { TrendingUp, Network, Coins, Users } from 'lucide-react';

export const InvestorSection = () => {
  const opportunities = [
    {
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
      title: 'Early-stage Market Opportunities',
      description: 'Access pre-public rounds of the most promising eXchange1 projects before they hit the market.',
      stats: 'Avg. ROI: 450%'
    },
    {
      icon: <Network className="w-12 h-12 text-blue-400" />,
      title: 'Investment Network',
      description: 'Join an exclusive network of accredited investors and institutions in the crypto space.',
      stats: '2,500+ Investors'
    },
    {
      icon: <Coins className="w-12 h-12 text-purple-400" />,
      title: 'Fund/Token Buy & Sell',
      description: 'Trade tokens and access structured funds with professional-grade execution and custody.',
      stats: '$2.5B+ Volume'
    }
  ];

  return (
    <section id="investor" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Investor Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional investment tools and opportunities designed for sophisticated eXchange1 investors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">{opportunity.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{opportunity.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{opportunity.description}</p>
              <div className="text-2xl font-bold text-blue-400 mt-auto">{opportunity.stats}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-gray-700 rounded-2xl p-8 text-center">
          <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Accredited Investor Program</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our exclusive program for accredited investors with minimum investment thresholds 
            and access to institutional-grade investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Apply for Access
            </button>
            <button className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
