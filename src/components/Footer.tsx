import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: "https://github.com/Sai014", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sai-sandeep-r", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sandeep.5112004@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-10 border-t border-border relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <a href="#home" className="flex items-center gap-2 font-mono font-semibold">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">~/</span>
            <span className="gradient-text">sandeep</span>
          </a>

          <p className="font-mono text-xs text-muted-foreground text-center">
            <span className="text-primary">{"// "}</span>
            built with React + TypeScript + Tailwind · © {year} Sai Sandeep R
          </p>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
