import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-charcoal-deeper/80" />

      {/* Decorative green chevrons */}
      <div className="absolute top-20 right-0 w-40 h-40 opacity-20">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M50 10L10 40v20l40 25 40-25V40L50 10z" stroke="hsl(95, 62%, 52%)" strokeWidth="2" />
          <path d="M50 30L20 50v15l30 18 30-18V50L50 30z" stroke="hsl(95, 62%, 52%)" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="green-divider mx-auto mb-8" />
          <p className="font-body text-sm tracking-[0.3em] text-green-brand uppercase mb-4">
            Invest Net Zambia
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-secondary-foreground leading-tight mb-2">
            CARRI <span className="text-green-brand">TIME</span>
          </h1>
          <p className="font-heading text-lg md:text-2xl font-bold text-secondary-foreground/80 mb-2 tracking-wide">
            COMPANY PROFILE
          </p>
          <p className="font-heading text-lg md:text-xl text-green-brand italic mb-8">
            "Time Optimised"
          </p>
          <p className="font-body text-base md:text-lg text-secondary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Premier provider of comprehensive, innovative, and sustainable
            logistics solutions, trading services and environmental consultancy across Zambia and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-block bg-green-brand hover:bg-green-dark text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-md transition-colors duration-300 tracking-wide text-sm uppercase"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-green-brand text-green-brand hover:bg-green-brand hover:text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-md transition-colors duration-300 tracking-wide text-sm uppercase"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-green-brand/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-green-brand rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
