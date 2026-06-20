import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Bot, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      key: "languages",
      skills: ["Python", "C++", "C", "JavaScript"],
    },
    {
      icon: Server,
      title: "Backend Development",
      key: "backend",
      skills: ["FastAPI", "REST APIs", "Microservices", "Async Programming", "API Design", "Temporal"],
    },
    {
      icon: Bot,
      title: "AI & Agent Frameworks",
      key: "ai_agents",
      skills: ["LangChain", "LangGraph", "Strands", "LLM Integration", "RAG Pipelines", "LiveKit"],
    },
    {
      icon: Database,
      title: "Databases",
      key: "databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      key: "cloud_devops",
      skills: ["AWS", "Google Cloud", "Docker", "CI/CD"],
    },
    {
      icon: Wrench,
      title: "Tools",
      key: "tools",
      skills: ["Git", "Postman"],
    },
  ];

  const marqueeItems = [
    "Python", "FastAPI", "LangGraph", "Temporal", "PostgreSQL", "Redis",
    "Docker", "AWS", "RAG", "WebRTC", "MongoDB", "LangChain", "LiveKit", "CI/CD",
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mono-label mb-3">// 02. skills</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            <span className="text-muted-foreground/40 font-mono mr-2">$</span>
            <span className="gradient-text">cat tech-stack.json</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
              className="glass-card glow-border p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground leading-tight">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    .{category.key}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.35,
                      delay: categoryIndex * 0.08 + skillIndex * 0.04 + 0.2,
                    }}
                    className="tech-pill"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 relative overflow-hidden border-y border-border py-4"
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex w-max animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="font-mono text-sm text-muted-foreground px-6 flex items-center gap-6"
              >
                {item}
                <span className="text-primary/50">/</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
