import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a href="#home" className="font-display font-bold text-lg">
            <span className="gradient-text">Sandeep</span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground font-body text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Sai Sandeep R. Built with
            <Heart className="w-4 h-4 text-primary inline" />
          </p>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;