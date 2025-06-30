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

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Coming Soon</h3>
          <p className="text-lg text-gray-400">
            Our investor solutions are currently under development. Please check back later for more information.
          </p>
        </div>
      </div>
    </section>
  );
};
