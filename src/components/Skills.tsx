import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Database, Wrench, Cloud } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      icon: Database,
      title: "Database Management",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Jupyter", level: 80 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, IAM)", level: 75 },
        { name: "Google Cloud", level: 70 },
        { name: "Docker", level: 75 },
        { name: "Jenkins CI/CD", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative cyber-grid" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] mb-4">
            {"// TECHNICAL SKILLS"}
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">My Expertise</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of learning and hands-on experience 
            in software development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-muted-foreground">{skill.name}</span>
                      <span className="font-display text-primary text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                        className="skill-bar-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;