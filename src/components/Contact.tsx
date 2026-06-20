import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Mail, label: "email", value: "sandeep.5112004@gmail.com", href: "mailto:sandeep.5112004@gmail.com" },
    { icon: Phone, label: "phone", value: "+91 95131 89613", href: "tel:+919513189613" },
    { icon: MapPin, label: "location", value: "Bengaluru, India", href: null },
  ];

  const socialLinks = [
    { icon: Github, label: "github", username: "Sai014", href: "https://github.com/Sai014" },
    { icon: Linkedin, label: "linkedin", username: "sai-sandeep-r", href: "https://linkedin.com/in/sai-sandeep-r" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mono-label mb-3">// 05. contact</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            <span className="text-muted-foreground/40 font-mono mr-2">$</span>
            <span className="gradient-text">./connect</span>
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-2xl mt-4">
            I'm open to backend / AI engineering roles and collaborations. Drop a message and I'll
            get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
          {/* Contact Info terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="terminal"
          >
            <div className="terminal-bar">
              <span className="terminal-dot bg-[#ff5f56]" />
              <span className="terminal-dot bg-[#ffbd2e]" />
              <span className="terminal-dot bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">contact.sh</span>
            </div>
            <div className="p-6 space-y-3">
              {contactInfo.map((item) => {
                const inner = (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-lg border border-border p-3 group hover:border-primary/40 transition-all duration-300"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className="block rounded-lg border border-border p-3 group">
                    {inner}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Social + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {socialLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card glow-border p-5 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                      @{item.username}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}

            <motion.a
              href="mailto:sandeep.5112004@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5" />
              ./send-message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
