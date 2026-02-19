import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const servicesDropdown = [
  "International Freight Forwarding",
  "Custom Clearance & Warehousing",
  "Container Groupage Services",
  "Multi-Modal Transport",
  "Environmental Consultancy",
  "General Trading & Supply",
  "Door-to-Door Transport",
  "Airfreight Services",
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Our Team", href: "#team" },
  { label: "Management", href: "#management" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal-deeper/97 backdrop-blur-md shadow-2xl py-2"
          : "bg-charcoal-deeper py-4"
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-end max-w-7xl mx-auto px-6 pb-2 border-b border-secondary-foreground/10 mb-2">
        <div className="flex items-center gap-4">
          <a href="tel:+260977658548" className="flex items-center gap-1.5 text-xs font-body text-secondary-foreground/60 hover:text-green-brand transition-colors">
            <Phone size={12} />
            +260 977 658 548
          </a>
          <span className="text-secondary-foreground/30">|</span>
          <span className="text-xs font-body text-secondary-foreground/60">
            TPIN: 1017267741
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-brand rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path d="M12 2L4 7v4l8 5 8-5V7l-8-5z" fill="hsl(215, 70%, 35%)" />
              <path d="M12 8L4 13v4l8 5 8-5v-4l-8-5z" fill="hsl(0, 0%, 40%)" opacity="0.6" />
              <path d="M12 14L4 19v2l8 5 8-5v-2l-8-5z" fill="hsl(95, 62%, 52%)" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-base md:text-lg font-extrabold tracking-wide">
              <span className="text-green-brand">CARRI</span>
              <span className="text-secondary-foreground"> TIME</span>
            </span>
            <span className="text-[10px] tracking-[0.25em] text-secondary-foreground/60 font-body font-medium">
              INVEST NET ZAMBIA
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label} className="relative" ref={item.hasDropdown ? dropdownRef : undefined}>
              {item.hasDropdown ? (
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-sm font-body font-medium text-secondary-foreground/80 hover:text-green-brand transition-colors duration-300 tracking-wide uppercase px-4 py-2 rounded-md hover:bg-secondary-foreground/5"
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-body font-medium text-secondary-foreground/80 hover:text-green-brand transition-colors duration-300 tracking-wide uppercase px-4 py-2 rounded-md hover:bg-secondary-foreground/5 block"
                >
                  {item.label}
                </a>
              )}

              {/* Dropdown */}
              {item.hasDropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-72 bg-card rounded-lg shadow-2xl border border-border z-50 overflow-hidden"
                    >
                      <div className="py-2">
                        <div className="px-4 py-2 border-b border-border">
                          <p className="text-xs font-heading font-bold text-green-brand uppercase tracking-wider">Our Services</p>
                        </div>
                        {servicesDropdown.map((service) => (
                          <a
                            key={service}
                            href="#services"
                            onClick={() => setDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-green-brand hover:text-primary-foreground transition-colors duration-150"
                          >
                            {service}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-block bg-green-brand hover:bg-green-dark text-primary-foreground font-body font-semibold px-5 py-2 rounded-md transition-colors duration-300 text-sm"
          >
            Get a Quote
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-secondary-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal-deeper border-t border-secondary-foreground/10"
          >
            <ul className="flex flex-col py-4 px-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-body font-medium text-secondary-foreground/80 hover:text-green-brand transition-colors uppercase tracking-wide border-b border-secondary-foreground/5"
                  >
                    {item.label}
                  </a>
                  {item.hasDropdown && (
                    <div className="pl-4 pb-2">
                      {servicesDropdown.map((s) => (
                        <a
                          key={s}
                          href="#services"
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-xs font-body text-secondary-foreground/50 hover:text-green-brand"
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
