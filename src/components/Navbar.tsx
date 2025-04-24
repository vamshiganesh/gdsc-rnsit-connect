
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Members', href: '#members' },
    { title: 'Events', href: '#events' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="font-google-sans text-gdsc-base font-bold text-xl">
            GDSC RNSIT
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="font-google-sans text-gdsc-base hover:text-gdsc-blue transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pt-4 pb-2">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-2 font-google-sans text-gdsc-base hover:text-gdsc-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
