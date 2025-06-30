
import React from 'react';
import { Twitter, Linkedin, MessageSquare, Users } from 'lucide-react';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: ['Token Launch', 'Exchange Listing', 'Legal Compliance', 'Product Development']
    },
    {
      title: 'Company',
      links: ['About Us', 'Team', 'Careers', 'Press']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Whitepaper', 'Research', 'Documentation']
    },
    {
      title: 'Legal',
      links: ['Terms of Service', 'Privacy Policy', 'Risk Disclosure', 'Compliance']
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              eXchange1
            </h3>
            <p className="text-gray-400 mb-6">
              The future of Web3 investment. Institutional-grade infrastructure 
              for the decentralized economy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Users className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2024 eXchange1. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Security
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Status
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
