import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.E. in Computer Science",
      school: "Sir M Visvesvaraya Institute of Technology",
      period: "2022 – 2026",
      score: "CGPA 9.05",
      location: "Bengaluru",
    },
    {
      degree: "Secondary Education (XII)",
      school: "Sindhi High School",
      period: "2020 – 2022",
      score: "93.6%",
      location: "Bengaluru",
    },
  ];

  const stats = [
    { value: "2+", label: "internships" },
    { value: "9.05", label: "cgpa / 10" },
    { value: "10+", label: "AI / backend tools" },
    { value: "80%", label: "ops automated" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mono-label mb-3">// 01. about</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            <span className="text-muted-foreground/40 font-mono mr-2">$</span>
            <span className="gradient-text">whoami</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Summary terminal card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 terminal"
          >
            <div className="terminal-bar">
              <span className="terminal-dot bg-[#ff5f56]" />
              <span className="terminal-dot bg-[#ffbd2e]" />
              <span className="terminal-dot bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">about.md</span>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 font-mono text-sm text-primary mb-4">
                <Award className="w-4 h-4" />
                <span># Summary</span>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Backend & AI Engineer with a strong computer science foundation and hands-on
                experience building <span className="text-foreground">AI-native systems</span>. I
                engineer autonomous workflow agents, scalable FastAPI backends, and distributed
                workflow orchestration that automate real-world operations at scale.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                I enjoy designing reliable, asynchronous architectures and integrating LLMs into
                production pipelines — from RAG and agentic systems to real-time, low-latency
                services. I care about clean, maintainable code and end-to-end ownership.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7 pt-6 border-t border-border">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="text-center sm:text-left"
                  >
                    <div className="font-display font-bold text-2xl gradient-text">{s.value}</div>
                    <div className="font-mono text-[11px] text-muted-foreground mt-0.5">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-mono text-sm text-primary flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4" />
              ~/education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.12 }}
                className="glass-card glow-border p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-display font-semibold text-foreground leading-snug">
                    {edu.degree}
                  </h4>
                  <span className="shrink-0 px-2.5 py-1 bg-primary/10 text-primary font-mono text-xs rounded-md">
                    {edu.score}
                  </span>
                </div>
                <p className="text-secondary font-body text-sm font-medium">{edu.school}</p>
                <div className="flex items-center gap-4 mt-2 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
