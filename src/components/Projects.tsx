import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Search, Mic, ChevronRight } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: Search,
      title: "RankPilot",
      subtitle: "AI SEO Intelligence Platform",
      description:
        "An AI-powered SEO intelligence platform tracking 500+ keywords and analyzing hundreds of pages for SERP monitoring, competitor benchmarking, and content performance.",
      highlights: [
        "Async FastAPI backend powering 6+ SEO workflows: rank tracking, sitemap crawling, page auditing, competitor analysis, and Google Search Console integration",
        "LLM-powered recommendation pipelines that identify content gaps and generate actionable optimization strategies",
        "Scalable data pipelines processing SERP rankings, impressions, clicks, and keyword trends for near real-time intelligence",
      ],
      techStack: ["Python", "FastAPI", "LLMs", "PostgreSQL", "Async", "Google Search Console"],
      github: "https://github.com/Sai014",
      demo: "https://seo-rankpilot.vercel.app/",
    },
    {
      icon: Mic,
      title: "Real-Time Voice Communication System",
      subtitle: "Low-latency WebRTC voice platform",
      description:
        "A low-latency voice communication platform supporting real-time bidirectional audio streaming with integrated AI voice agents for natural conversations.",
      highlights: [
        "Real-time bidirectional audio streaming built with WebRTC and WebSockets",
        "FastAPI signaling services for session management and concurrent connection handling",
        "Integrated AI voice agents over live audio streams with async MongoDB logging for non-blocking performance",
      ],
      techStack: ["WebRTC", "WebSockets", "FastAPI", "AI Voice Agents", "MongoDB", "Async"],
      github: "https://github.com/Sai014",
      demo: null,
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
          className="mb-14"
        >
          <p className="mono-label mb-3">// 03. projects</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            <span className="text-muted-foreground/40 font-mono mr-2">$</span>
            <span className="gradient-text">git log --featured</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="terminal flex flex-col group"
            >
              {/* Window bar */}
              <div className="terminal-bar">
                <span className="terminal-dot bg-[#ff5f56]" />
                <span className="terminal-dot bg-[#ffbd2e]" />
                <span className="terminal-dot bg-[#27c93f]" />
                <span className="ml-3 font-mono text-xs text-muted-foreground truncate">
                  {project.title.toLowerCase().replace(/\s+/g, "-")}/README.md
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-secondary mt-0.5">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-body text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {project.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + hIndex * 0.1 + 0.3 }}
                      className="flex items-start gap-2.5 text-muted-foreground font-body text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      live demo
                    </a>
                  )}
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
