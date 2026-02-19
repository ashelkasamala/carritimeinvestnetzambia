import { motion } from "framer-motion";
import { Users, BookOpen, Handshake, Monitor, Clock } from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced & Qualified Team" },
  { icon: BookOpen, title: "Strong Regulatory Knowledge" },
  { icon: Handshake, title: "Strategic Industry Partnerships" },
  { icon: Monitor, title: "Modern IT-Enabled Systems" },
  { icon: Clock, title: "Timely & Cost-Efficient Delivery" },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground mb-1">
            WHY <span className="text-green-brand">CHOOSE US</span>
          </h2>
          <div className="green-divider mx-auto mt-4 mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are dedicated to delivering optimized logistics solutions that
            enhance operational efficiency. We build long-term relationships
            founded on trust, reliability, and measurable performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-muted transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-charcoal flex items-center justify-center mb-4">
                <r.icon className="w-7 h-7 text-green-brand" />
              </div>
              <p className="font-body text-sm font-medium text-foreground leading-snug">
                {r.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
