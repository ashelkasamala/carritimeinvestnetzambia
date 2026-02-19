import { motion } from "framer-motion";

const services = [
  "International Freight Forwarding",
  "Container Groupage Services",
  "Custom Clearance and Bonded Warehousing",
  "Supervision of Project Shipments and Necessary Handling",
  "Warehousing",
  "Multi-Modal Transport",
  "Airfreight",
  "Removals and Packaging",
  "Destinations De-Consolidators & Shipping Agents",
  "Door-to-Door Transport Services",
  "Environmental Impact Assessments (EIA)",
  "General Supply",
  "Environmental Clean-Ups",
  "Environmental Project Briefs",
  "General Consultancy",
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-charcoal-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-1">
            <span className="text-green-brand">OUR</span>{" "}
            <span className="text-secondary-foreground">SERVICES</span>
          </h2>
          <div className="green-divider mt-4 mb-6" />
          <p className="font-body text-secondary-foreground/60 max-w-2xl leading-relaxed">
            Carri Time Invest Net Zambia Limited is a service-oriented company
            fully equipped to provide you with the following services:
          </p>
        </motion.div>

        <div className="space-y-2">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-secondary/40 backdrop-blur-sm rounded-lg px-6 py-4 border-l-4 border-green-brand hover:bg-secondary/60 transition-colors duration-200"
            >
              <p className="font-body text-sm md:text-base text-secondary-foreground font-medium">
                {service}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-sm text-secondary-foreground/50 mt-8 leading-relaxed"
        >
          In cooperation with our extensive network of agents, we offer a
          complete overseas door-to-door package for airfreight and sea freight,
          as well as domestic transportation.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
