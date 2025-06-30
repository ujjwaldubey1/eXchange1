
import React from 'react';
import { Building, Layers, Shuffle } from 'lucide-react';

export const InstitutionalSection = () => {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-cyan-400" />,
      title: 'Asset Tokenization',
      description: 'Transform traditional assets into blockchain-based tokens with full regulatory compliance and institutional security.',
      features: ['Real Estate Tokenization', 'Commodity Tokens', 'Security Token Offerings', 'Fractional Ownership']
    },
    {
      icon: <Layers className="w-12 h-12 text-blue-400" />,
      title: 'Multi-Store Funds',
      description: 'Diversified investment vehicles across multiple eXchange1 sectors with professional fund management.',
      features: ['DeFi Fund', 'NFT Fund', 'Infrastructure Fund', 'Gaming Fund']
    },
    {
      icon: <Shuffle className="w-12 h-12 text-purple-400" />,
      title: 'Exchange Integration',
      description: 'Seamless integration with top-tier exchanges for optimal liquidity and trading execution.',
      features: ['API Integration', 'Liquidity Pools', 'Market Making', 'Cross-chain Trading']
    }
  ];

  return (
    <section id="institutional" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Institutional Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade eXchange1 solutions built for institutions, funds, and large-scale operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
              
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-auto bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-lg font-medium transition-all duration-300">
                Contact Sales
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800/30 border border-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Need a custom solution? Our enterprise team works with institutions to build 
            tailored Web3 infrastructure and investment strategies.
          </p>
          <button className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
