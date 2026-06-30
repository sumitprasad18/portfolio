import { useState } from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 py-5 bg-transparent text-white z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          PM<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }, index) => (
            <a
              key={index}
              href={href}
              className="hover:text-blue-400 transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong w-full animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map(({ href, label }, index) => (
              <a
                key={index}
                href={href}
                className="text-lg hover:text-blue-400 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <Button onClick={() => setIsMobileMenuOpen(false)}>Contact</Button>
          </div>
        </div>
      )}
    </header>
  );
};
