import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Sai014", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sai-sandeep-r", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sandeep.5112004@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919513189613", label: "Phone" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl floating" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary animate-spin-slow opacity-75 blur-sm" style={{ animationDuration: "8s" }} />
              <div className="absolute inset-1 rounded-full bg-background" />
              <img
                src={profileImage}
                alt="Sai Sandeep R"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover border-2 border-primary/50"
              />
              <div className="absolute inset-0 rounded-full neon-border opacity-50" />
            </div>
            {/* Floating particles */}
            <div className="absolute -top-4 -right-4 w-4 h-4 bg-primary rounded-full pulse-glow" />
            <div className="absolute -bottom-2 -left-6 w-3 h-3 bg-secondary rounded-full pulse-glow" style={{ animationDelay: "-1s" }} />
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] mb-4">
                {"< WELCOME />"}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
            >
              <span className="text-foreground">I'm </span>
              <span className="gradient-text">Sai Sandeep R</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl font-body font-medium text-muted-foreground mb-6"
            >
              Software Engineer & Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground font-body text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Skilled in data structures, algorithms, and full-stack application development. 
              Experienced in designing scalable systems and building production-ready APIs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body">Bengaluru, India</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-lg flex items-center gap-2 neon-border hover:bg-primary/90 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;