import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const ROLES = [
  "Backend & AI Engineer",
  "Python Developer",
  "Agentic AI Builder",
];

const useTypewriter = (words: string[], speed = 80, pause = 1600) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, speed, pause]);

  return words[index % words.length].substring(0, subIndex);
};

const Hero = () => {
  const text = useTypewriter(ROLES);

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sai014", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sai-sandeep-r", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sandeep.5112004@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919513189613", label: "Phone" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
      {/* Blueprint grid + glows */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: intro */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-mono text-xs text-primary">available for opportunities</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-sm text-muted-foreground mb-3"
            >
              <span className="text-primary">const</span>{" "}
              <span className="text-secondary">engineer</span> = {"{"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight"
            >
              <span className="text-foreground">Sai </span>
              <span className="gradient-text text-glow">Sandeep R</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-8 mb-6"
            >
              <span className="font-mono text-lg md:text-xl text-secondary">
                {"> "}
                {text}
                <span className="blink text-primary">_</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              I build scalable backend services, autonomous workflow agents, and LLM-powered
              systems. Currently engineering AI-native platforms with Python, FastAPI, and Temporal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8 font-mono text-sm"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>Bengaluru, India</span>
            </motion.div>

            {/* CTAs + Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-mono font-semibold text-sm rounded-xl hover:bg-primary/90 transition-all duration-300"
              >
                ./view-projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded-xl hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                ./contact
              </a>
              <div className="flex items-center gap-2 ml-1">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <link.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: terminal / code window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="terminal max-w-lg w-full mx-auto"
          >
            <div className="terminal-bar">
              <span className="terminal-dot bg-[#ff5f56]" />
              <span className="terminal-dot bg-[#ffbd2e]" />
              <span className="terminal-dot bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">engineer.py</span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre">
{`class `}<span className="text-secondary">Engineer</span>{`:
    name `}<span className="text-muted-foreground">=</span>{` `}<span className="text-[hsl(var(--syntax-yellow))]">"Sai Sandeep R"</span>{`
    role `}<span className="text-muted-foreground">=</span>{` `}<span className="text-[hsl(var(--syntax-yellow))]">"Backend & AI Engineer"</span>{`
    stack `}<span className="text-muted-foreground">=</span>{` {
        `}<span className="text-[hsl(var(--syntax-yellow))]">"lang"</span>{`: [`}<span className="text-[hsl(var(--syntax-yellow))]">"Python"</span>{`, `}<span className="text-[hsl(var(--syntax-yellow))]">"C++"</span>{`, `}<span className="text-[hsl(var(--syntax-yellow))]">"C"</span>{`],
        `}<span className="text-[hsl(var(--syntax-yellow))]">"backend"</span>{`: [`}<span className="text-[hsl(var(--syntax-yellow))]">"FastAPI"</span>{`, `}<span className="text-[hsl(var(--syntax-yellow))]">"Microservices"</span>{`, `}<span className="text-[hsl(var(--syntax-yellow))]">"Temporal"</span>{`],
        `}<span className="text-[hsl(var(--syntax-yellow))]">"ai"</span>{`: [`}<span className="text-[hsl(var(--syntax-yellow))]">"LangChain"</span>{`, `}<span className="text-[hsl(var(--syntax-yellow))]">"LangGraph"</span>{`, `}<span className="text-[hsl(var(--syntax-yellow))]">"RAG"</span>{`],
        `}<span className="text-[hsl(var(--syntax-yellow))]">"data"</span>{`: [`}<span className="text-[hsl(var(--syntax-yellow))]">"PostgreSQL"</span>{`, `}<span className="text-[hsl(var(--syntax-yellow))]">"MongoDB"</span>{`, `}<span className="text-[hsl(var(--syntax-yellow))]">"Redis"</span>{`],
        `}<span className="text-[hsl(var(--syntax-yellow))]">"cloud"</span>{`: [`}<span className="text-[hsl(var(--syntax-yellow))]">"AWS"</span>{`, `}<span className="text-[hsl(var(--syntax-yellow))]">"GCP"</span>{`, `}<span className="text-[hsl(var(--syntax-yellow))]">"Docker"</span>{`],
    }

    `}<span className="text-accent">def</span>{` `}<span className="text-primary">build</span>{`(self):
        `}<span className="text-accent">return</span>{` `}<span className="text-[hsl(var(--syntax-yellow))]">"scalable AI systems"</span>
              </pre>
              <div className="mt-3 pt-3 border-t border-border text-muted-foreground">
                <span className="text-primary">$</span> python engineer.py
                <span className="blink text-primary"> ▋</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
