import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Shield, Utensils } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: Shield,
      title: "Authentication & Authorization System",
      period: "06/2025 – 07/2025",
      description: "A secure authentication system with JWT-based auth, role-based access control, and essential security features.",
      highlights: [
        "Built signup/login with hashed passwords using bcrypt",
        "JWT-based authentication with protected routes",
        "Implemented CORS, Helmet, and rate limiting",
        "Clean architecture with routes, controllers, and middleware",
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Helmet"],
    },
    {
      icon: Utensils,
      title: "Food Donation & Inventory Management",
      period: "10/2024 – 02/2025",
      description: "A comprehensive platform connecting restaurants and NGOs for efficient food donation with ML-powered forecasting.",
      highlights: [
        "Backend services for inventory logging and order tracking",
        "Integrated Twilio for alerts and Google Maps for routing",
        "Designed database schemas for restaurants and donors",
        "ML forecasting module integration through APIs",
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "Python", "Twilio API", "Google Maps API"],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest mb-4 uppercase">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating full-stack development capabilities 
            and problem-solving skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground font-body text-sm mt-1">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + hIndex * 0.1 + 0.3 }}
                      className="flex items-start gap-3 text-muted-foreground font-body text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-foreground font-body text-xs rounded-lg border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;