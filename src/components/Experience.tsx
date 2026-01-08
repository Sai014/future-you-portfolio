import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = {
    title: "Junior Web Developer Intern",
    company: "Numa Soft Technology Services Pvt. Ltd.",
    period: "04/2024 – 06/2024",
    location: "Bengaluru",
    responsibilities: [
      "Built and deployed responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React.js, ensuring seamless performance across devices.",
      "Contributed to the Transport CRM for MAT Logistics, implementing dynamic UI components and collaborating with the backend team to integrate REST APIs using Node.js.",
      "Optimized page load speed, reduced UI latency, and improved overall cross-browser compatibility through clean, modular code and performance tuning.",
    ],
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest mb-4 uppercase">
            Work History
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Professional experience that shaped my skills and expertise in software development.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 hover:border-primary/30 transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-primary font-body font-semibold text-lg">
                    {experience.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:items-end">
                <div className="flex items-center gap-2 text-muted-foreground font-body">
                  <Calendar className="w-4 h-4 text-primary" />
                  {experience.period}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-body">
                  <MapPin className="w-4 h-4 text-primary" />
                  {experience.location}
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground text-lg mb-4">
                Key Responsibilities
              </h4>
              {experience.responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <span className="text-primary font-display font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed flex-1">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
              {["React.js", "Node.js", "JavaScript", "HTML", "CSS", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-muted text-foreground font-body text-sm rounded-lg border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;