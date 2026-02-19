import { Phone, MapPin, Mail } from "lucide-react";

const branches = [
  "Chirundu",
  "Lusaka / Port Office",
  "Livingstone",
  "Nakonde",
  "Mwami",
  "Kasumbalesa",
  "Lusaka International Airport",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Management", href: "#management" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-charcoal-deeper">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-brand rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                  <path d="M12 2L4 7v4l8 5 8-5V7l-8-5z" fill="hsl(215, 70%, 35%)" />
                  <path d="M12 8L4 13v4l8 5 8-5v-4l-8-5z" fill="hsl(0, 0%, 40%)" opacity="0.6" />
                  <path d="M12 14L4 19v2l8 5 8-5v-2l-8-5z" fill="hsl(95, 62%, 52%)" />
                </svg>
              </div>
              <div>
                <p className="font-heading text-base font-extrabold">
                  <span className="text-green-brand">CARRI</span>{" "}
                  <span className="text-secondary-foreground">TIME</span>
                </p>
                <p className="text-[9px] tracking-[0.2em] text-secondary-foreground/50 font-body">
                  INVEST NET ZAMBIA
                </p>
              </div>
            </div>
            <p className="font-heading text-sm text-green-brand italic mb-3">
              "Time Optimised"
            </p>
            <p className="font-body text-xs text-secondary-foreground/50 leading-relaxed">
              Premier provider of comprehensive logistics solutions, trading
              services and environmental consultancy across Zambia and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-secondary-foreground uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-secondary-foreground/50 hover:text-green-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-heading text-sm font-bold text-secondary-foreground uppercase tracking-wider mb-5">
              Our Branches
            </h4>
            <ul className="space-y-2.5">
              {branches.map((branch) => (
                <li key={branch} className="flex items-center gap-2">
                  <MapPin size={12} className="text-green-brand shrink-0" />
                  <span className="font-body text-sm text-secondary-foreground/50">
                    {branch}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-secondary-foreground uppercase tracking-wider mb-5">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-green-brand shrink-0 mt-0.5" />
                <p className="font-body text-sm text-secondary-foreground/50">
                  Plot # 138, Off Chirundu-Lusaka,
                  <br />
                  Chiawa Road, Opposite Sabot Offices,
                  <br />
                  Chirundu-Zambia
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={14} className="text-green-brand shrink-0 mt-0.5" />
                <div className="font-body text-sm text-secondary-foreground/50 space-y-1">
                  <p>+260 977 658 548</p>
                  <p>+260 966 658 548</p>
                  <p>+260 973 395 016</p>
                  <p className="text-secondary-foreground/40">
                    Landline: +260 211 515 339
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={14} className="text-green-brand shrink-0 mt-0.5" />
                <div className="font-body text-xs text-secondary-foreground/40 space-y-1">
                  <p>Business Reg: 120180008889</p>
                  <p>TPIN: 1017267741</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-secondary-foreground/30">
            © {new Date().getFullYear()} Carri Time Invest Net Zambia Limited.
            All rights reserved.
          </p>
          <p className="font-body text-xs text-secondary-foreground/20">
            TSK International
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
