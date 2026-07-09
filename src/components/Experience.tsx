import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Python AI Developer",
      company: "Appscrip",
      period: "Feb 2026 – Present",
      location: "Bengaluru",
      current: true,
      responsibilities: [
        "Engineered AI-native CRM systems and autonomous workflow agents in Python, automating up to 80% of internal operations including lead management, outreach, and execution pipelines.",
        "Built scalable backend services with FastAPI and asynchronous architectures, optimizing API performance and reducing response latency by 25%.",
        "Implemented distributed workflow orchestration with Temporal for reliable execution, retries, and stateful long-running AI workflows.",
        "Developed agentic systems for sales automation, enabling personalized engagement and supporting customer acquisition workflows at scale.",
      ],
      techStack: ["Python", "FastAPI", "Temporal", "LangGraph", "Async", "AI Agents"],
    },
    {
      title: "Backend Developer Intern",
      company: "Numa Soft Technology Services Pvt. Ltd.",
      period: "Apr 2024 – Jun 2024",
      location: "Bengaluru",
      current: false,
      responsibilities: [
        "Engineered backend microservices supporting email delivery, workflow automation, and logistics operations, reducing manual workload by 40%.",
        "Built scalable APIs and inter-service communication layers for email processing pipelines and business workflows.",
        "Collaborated with cross-functional teams to design and deploy backend solutions.",
        "Developed reusable modules for validation, email orchestration, and structured data processing across multiple services.",
      ],
      techStack: ["Python", "Microservices", "REST APIs", "Workflow Automation"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mono-label mb-3">// 04. experience</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            <span className="text-muted-foreground/40 font-mono mr-2">$</span>
            <span className="gradient-text">git log --work</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-10"
              >
                {/* Node */}
                <div className="absolute left-0 top-1.5 z-10">
                  <span className="relative flex h-4 w-4">
                    {exp.current && (
                      <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-4 w-4 border-2 ${
                        exp.current ? "bg-primary border-primary" : "bg-card border-secondary"
                      }`}
                    />
                  </span>
                </div>

                {/* Card */}
                <div className="glass-card glow-border p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                        current
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-foreground">{exp.title}</h3>
                  <p className="text-secondary font-body font-medium text-sm mt-0.5">
                    {exp.company}
                  </p>
                  <p className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-4">
                    {exp.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-muted-foreground font-body text-sm leading-relaxed"
                      >
                        <span className="text-primary font-mono mt-0.5 shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
