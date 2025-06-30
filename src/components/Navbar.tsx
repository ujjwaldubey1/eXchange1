
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    {
      label: 'Investors',
      items: [
        { name: 'Live deals', description: 'Primary market' },
        { name: 'Buy and sell', description: 'Secondary market' },
        { name: 'Republic Note', description: 'Own a piece of Republic\'s upside' },
        { name: 'Investor Network Membership', description: 'Receive exclusive discounts and benefits' }
      ]
    },
    {
      label: 'Businesses',
      items: [
        { name: 'Capital fundraising', description: 'Raise on Republic' },
        { name: 'Tokenized assets', description: 'Design, launch, manage tokenized assets' },
        { name: 'Sharedrops', description: 'Gift equity as a reward' }
      ]
    },
    {
      label: 'Accelerator Programs',
      items: [
        { name: 'Why Join Base Camp', description: '' },
        { name: 'Base Camp Accelerator', description: '' },
        { name: 'Ascent Token Launch', description: '' }
      ]
    },
    {
      label: 'Partners',
      items: [
        { name: 'Partner Program', description: 'Join our network' },
        { name: 'API Integration', description: 'Build with our platform' }
      ]
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/2da0db0e-6c1c-4951-981f-4dc8e6340237.png" 
              alt="eXchange1" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <button
                    className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-80 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-4 z-50">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href="#"
                          className="block px-6 py-3 hover:bg-gray-800 transition-colors duration-200"
                        >
                          <div className="text-sm font-medium text-gray-200 hover:text-cyan-400">
                            {subItem.name}
                          </div>
                          {subItem.description && (
                            <div className="text-xs text-gray-400 mt-1">
                              {subItem.description}
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="hidden lg:block">
            <button className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2 rounded-lg font-medium transition-all duration-200">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium w-full text-left"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                  </button>
                  {activeDropdown === item.label && (
                    <div className="pl-6 space-y-1">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.name}
                          href="#"
                          className="block px-3 py-2"
                        >
                          <div className="text-gray-300 hover:text-cyan-400 text-sm font-medium">
                            {subItem.name}
                          </div>
                          {subItem.description && (
                            <div className="text-gray-400 text-xs mt-1">
                              {subItem.description}
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="w-full mt-4 bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
