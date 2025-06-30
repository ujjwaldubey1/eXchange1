
import React from 'react';
import { Rocket, Building2, Scale, Smartphone } from 'lucide-react';

export const BusinessSection = () => {
  const services = [
    {
      icon: <Rocket className="w-12 h-12 text-cyan-400" />,
      title: 'Token Launch',
      description: 'End-to-end token creation, distribution, and launch strategy with regulatory compliance.',
      features: ['Tokenomics Design', 'Smart Contract Audit', 'Launch Strategy', 'Market Making']
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-400" />,
      title: 'Exchange Listing',
      description: 'Get listed on top-tier exchanges with our extensive network and listing expertise.',
      features: ['Exchange Partnerships', 'Listing Support', 'Liquidity Provision', 'Market Analysis']
    },
    {
      icon: <Scale className="w-12 h-12 text-purple-400" />,
      title: 'Legal/Compliance',
      description: 'Navigate complex regulatory landscapes with our expert legal and compliance team.',
      features: ['Regulatory Guidance', 'Legal Documentation', 'Compliance Audits', 'Risk Assessment']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-400" />,
      title: 'Product App Launch',
      description: 'Launch your eXchange1 application with comprehensive technical and strategic support.',
      features: ['Technical Development', 'UI/UX Design', 'Testing & QA', 'Go-to-Market Strategy']
    }
  ];

  return (
    <section id="business" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Business Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive eXchange1 business services to take your project from concept to market success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-800/30 border border-gray-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-auto bg-gradient-to-r from-gray-700 to-gray-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
