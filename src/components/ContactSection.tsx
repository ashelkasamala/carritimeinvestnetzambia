import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-charcoal section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-1">
            <span className="text-secondary-foreground">CONTACT</span>{" "}
            <span className="text-green-brand">US</span>
          </h2>
          <div className="green-divider mx-auto mt-4 mb-6" />
          <p className="font-body text-secondary-foreground/60 max-w-xl mx-auto">
            Ready to optimize your logistics? Reach out and let us help you
            streamline your operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-brand flex items-center justify-center shrink-0">
                <Building className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-secondary-foreground mb-1">
                  Company
                </h4>
                <p className="font-body text-sm text-secondary-foreground/60">
                  Carri Time Invest Net Zambia Limited
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-brand flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-secondary-foreground mb-1">
                  Head Office
                </h4>
                <p className="font-body text-sm text-secondary-foreground/60">
                  Plot # 138, Off Chirundu-Lusaka,
                  <br />
                  Chiawa Road, Opposite Sabot Offices
                  <br />
                  Chirundu, Zambia
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-brand flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-secondary-foreground mb-1">
                  Phone
                </h4>
                <p className="font-body text-sm text-secondary-foreground/60">
                  Mobile: +260 977 658 548 / +260 966 658 548 / +260 973 395 016
                  <br />
                  Land Line: +260 211 515 339
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-brand flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-secondary-foreground mb-1">
                  Registration
                </h4>
                <p className="font-body text-sm text-secondary-foreground/60">
                  Business Reg: 120180008889
                  <br />
                  TPIN: 1017267741
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-charcoal-dark border border-secondary-foreground/10 rounded-lg px-4 py-3 font-body text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:outline-none focus:border-green-brand transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-charcoal-dark border border-secondary-foreground/10 rounded-lg px-4 py-3 font-body text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:outline-none focus:border-green-brand transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-charcoal-dark border border-secondary-foreground/10 rounded-lg px-4 py-3 font-body text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:outline-none focus:border-green-brand transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-charcoal-dark border border-secondary-foreground/10 rounded-lg px-4 py-3 font-body text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:outline-none focus:border-green-brand transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-green-brand hover:bg-green-dark text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-lg transition-colors duration-300 tracking-wide text-sm uppercase w-full"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
