import { motion } from "framer-motion";

const values = [
  {
    title: "Customer-Centricity",
    description: "We prioritize our customers' unique needs, delivering tailored logistics solutions that foster long-term relationships and ensure satisfaction.",
  },
  {
    title: "Integrity",
    description: "We conduct our business with honesty and transparency, building trust with our clients, partners, and stakeholders.",
  },
  {
    title: "Sustainability",
    description: "We are committed to sustainable practices, minimizing our environmental impact while providing effective logistics and consultancy services.",
  },
  {
    title: "Innovation",
    description: "We embrace modern technologies and creative solutions to enhance efficiency and adapt to the evolving demands of our clients.",
  },
  {
    title: "Collaborative Teamwork",
    description: "We believe that effective collaboration drives success. By valuing diverse perspectives, we achieve superior results for our clients.",
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in our services, ensuring quality, reliability, and exceptional performance in every interaction.",
  },
];

const VisionMissionSection = () => {
  return (
    <section className="bg-charcoal section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-4 bg-charcoal-deeper rounded-full" />
              <h2 className="font-heading text-3xl md:text-4xl font-black text-secondary-foreground">
                <span className="text-green-brand">VISION</span>
              </h2>
            </div>
            <div className="green-divider mb-6" />
            <p className="font-body text-secondary-foreground/70 leading-relaxed">
              To be the premier provider of comprehensive, innovative and
              sustainable end-to-end logistics solutions, trading services and
              environmental consultancy that creates measurable value for our
              esteemed clientele across diverse industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-4 bg-charcoal-deeper rounded-full" />
              <h2 className="font-heading text-3xl md:text-4xl font-black text-secondary-foreground">
                OUR <span className="text-green-brand">MISSION</span>
              </h2>
            </div>
            <div className="green-divider mb-6" />
            <p className="font-body text-secondary-foreground/70 leading-relaxed">
              To create exceptional value for our esteemed clients by delivering
              innovative, sustainable, and cost-efficient freight forwarding,
              logistics, environmental consultancy, and general trading solutions
              that drive their long term growth and success.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-black text-secondary-foreground mb-1">
            OUR <span className="text-green-brand">VALUES</span>
          </h2>
          <div className="green-divider mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-charcoal-dark/60 border border-secondary-foreground/5 rounded-xl p-6 hover:border-green-brand/30 transition-colors duration-300"
            >
              <h3 className="font-heading text-lg font-bold text-green-brand mb-3">
                {v.title}
              </h3>
              <p className="font-body text-sm text-secondary-foreground/60 leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
