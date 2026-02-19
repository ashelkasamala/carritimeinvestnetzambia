import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground mb-1">
            ABOUT <span className="text-green-brand">US</span>
          </h2>
          <div className="green-divider mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img
              src={aboutBg}
              alt="Capri Time logistics operations"
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
            className="space-y-5"
          >
            <p className="font-body text-muted-foreground leading-relaxed">
              At Carri Time Invest Net Zambia Limited, we are a premier provider
              of comprehensive and innovative logistics solutions, established on{" "}
              <strong className="text-foreground">October 19, 2018</strong>. Our commitment to
              sustainability is reflected in our diverse range of services.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              We provide free consulting on customs processes and procedures,
              ensuring our clients receive expert guidance tailored to their
              needs. As your one-stop logistics solution provider, we integrate
              transportation and logistics services through our sister and liaison
              companies. Leveraging modern technologies and IT solutions, we drive
              efficiency and cost-effectiveness in all our operations.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-charcoal rounded-lg p-4 text-center">
                <p className="text-[10px] font-body text-secondary-foreground/50 uppercase tracking-wider mb-1">
                  Business Reg.
                </p>
                <p className="font-heading text-sm font-bold text-secondary-foreground">
                  120180008889
                </p>
              </div>
              <div className="bg-charcoal rounded-lg p-4 text-center">
                <p className="text-[10px] font-body text-secondary-foreground/50 uppercase tracking-wider mb-1">
                  TPIN
                </p>
                <p className="font-heading text-sm font-bold text-secondary-foreground">
                  1017267741
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
