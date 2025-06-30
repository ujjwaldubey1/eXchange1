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

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Coming Soon</h3>
          <p className="text-lg text-gray-400">
            We are working hard to bring you our business solutions. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};
