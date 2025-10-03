import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Logo from "./Logo";
import { IoSettingsOutline } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: <IoSettingsOutline /> },
    { name: "Watchlist", href: "#services" },
    { name: "Saved Movies", href: "#about" },
    { name: "My Profile", href: "#contact" },
  ];

  return (
    <nav className="bg-[#0f0f0f] text-[#f9fafb] relative">
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r border-b-2 border-b-red-500 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button with gradient - Left side on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl bg-[#1a1a1a] backdrop-blur-sm hover:bg-[#27272a] focus:outline-none focus:ring-2 focus:ring-[#ef4444] transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo with icon - Center on mobile, left on desktop */}
          <div className="flex-shrink-0 flex items-center group absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#1a1a1a] backdrop-blur-sm transition-all duration-300 hover:scale-105 relative group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ef4444] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Spacer for mobile to keep logo centered */}
          <div className="md:hidden w-10"></div>
        </div>
      </div>

      {/* Mobile menu dropdown with glassmorphism */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[40vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="h-[40vh] bg-[#1a1a1a]/95 backdrop-blur-xl border-t border-[#27272a]">
          <div className="px-4 pt-4 pb-3 space-y-2 flex flex-col h-full justify-evenly">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-5 py-3 rounded-2xl text-base font-medium bg-[#1a1a1a] hover:bg-[#27272a] backdrop-blur-sm transition-all duration-300 text-center border border-[#27272a] hover:border-[#ef4444] hover:scale-105 hover:shadow-lg hover:shadow-[#ef4444]/20"
                onClick={() => setIsOpen(false)}
                style={{
                  animation: isOpen
                    ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
