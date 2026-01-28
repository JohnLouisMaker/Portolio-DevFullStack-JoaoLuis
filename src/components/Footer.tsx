import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/JohnLouisMaker", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jo%C3%A3o-luis-75b18a333/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:joaoluisdev9@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-slate-800 font-resolve">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Texto */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-slate-400"
          >
            © {currentYear} JoãoLuis.dev
          </motion.p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  p-2 rounded-full
                  border border-slate-800
                  text-slate-400
                  hover:text-sky-400
                  hover:border-sky-500/60
                  hover:bg-sky-500/10
                  transition-all duration-300
                "
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
