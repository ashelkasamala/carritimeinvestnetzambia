import { motion } from "framer-motion";

const staffPoints = [
  "Acting professionally",
  "Being hardworking and proactive",
  "Adapting flexibly to all customer needs",
  "Thinking and operating as an extension of our customers' businesses",
];

const managementExpertise = [
  "International Freight Forwarding",
  "NVOCC Consolidation",
  "Customs Clearance",
  "Transportation and Warehousing",
  "Courier Services",
  "Ship Agency",
];

const StaffManagementSection = () => {
  return (
    <>
      {/* Our Staff */}
      <section id="team" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-green-brand rounded-full" />
                <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground">
                  OUR <span className="text-green-brand">STAFF</span>
                </h2>
              </div>
              <div className="green-divider mb-6" />
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                All our staff members are trained to understand that each
                customer's needs are unique, and as a company, we prioritize
                recognizing these individual requirements. Operating in a
                service-based industry, we act as communicators of information,
                ensuring that our data is consistent, timely, and accurate.
              </p>
              <ul className="space-y-3">
                {staffPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 font-body text-sm text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-brand shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-charcoal rounded-xl p-8"
            >
              <p className="font-body text-sm text-secondary-foreground/70 leading-relaxed">
                We ensure efficient handling of your cargo by providing
                appropriate vessels and managing all related formalities. Our
                services include both FCL (Full Container Load) and LCL
                (Less-than-Container Load) options, with a wide choice of ocean
                carriers to offer you both flexibility and dependability. Our
                staff embodies these principles, aligning their efforts with our
                commitment to exceptional service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section id="management" className="section-padding bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-1">
              <span className="text-green-brand">MANAGEMENT</span>
            </h2>
            <div className="green-divider mt-4 mb-8" />
            <p className="font-body text-secondary-foreground/70 leading-relaxed max-w-3xl mb-8">
              Our management team brings longstanding and extensive experience in:
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {managementExpertise.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-charcoal-dark/60 rounded-lg p-4 border border-secondary-foreground/5"
                >
                  <span className="w-2 h-2 rounded-full bg-green-brand shrink-0" />
                  <p className="font-body text-sm text-secondary-foreground/80">{item}</p>
                </motion.div>
              ))}
            </div>

            <p className="font-body text-sm text-secondary-foreground/50 leading-relaxed max-w-3xl">
              While traditional practices form the foundation of our business, we
              recognize that today's business environment is electronically
              competitive. Your requirements for delivery and sourcing are truly
              global, and you need a logistics partner who understands
              international trade. Our network of logistics experts is dedicated
              to delivering exceptional service.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default StaffManagementSection;
