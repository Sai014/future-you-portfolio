import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.Tech in Computer Science",
      school: "Sir M Visvesvaraya Institute of Technology",
      period: "04/2022 – Present",
      score: "CGPA - 9.05",
      location: "Bengaluru",
    },
    {
      degree: "Secondary Education (XII)",
      school: "Sindhi High School",
      period: "04/2020 – 03/2022",
      score: "93.6%",
      location: "Bengaluru",
    },
    {
      degree: "Primary Education (X)",
      school: "Sindhi High School",
      period: "04/2007 – 03/2020",
      score: "89.2%",
      location: "Bengaluru",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest mb-4 uppercase">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A passionate software engineer with a strong foundation in computer science 
            and a drive for creating innovative solutions.
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl mb-3 text-foreground">Summary</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Software Engineer skilled in data structures, algorithms, and full-stack application development. 
                Experienced in designing scalable systems, building production-ready APIs, and developing reliable 
                frontend interfaces. Strong problem-solver with hands-on experience in end-to-end feature development, 
                debugging, and delivering clean, maintainable code.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-display font-bold text-2xl mb-8 text-center">
            <GraduationCap className="w-6 h-6 inline-block mr-2 text-primary" />
            Education
          </h3>

          <div className="max-w-3xl mx-auto space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className="glass-card p-6 relative group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display font-semibold text-lg text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-body font-medium">{edu.school}</p>
                    <p className="text-muted-foreground font-body text-sm">{edu.location}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="flex items-center gap-2 text-muted-foreground font-body text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-display text-sm rounded-lg">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;