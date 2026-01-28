import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${
          isScrolled
            ? "py-3 bg-black/80 backdrop-blur-xl border-b border-slate-800 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.9)]"
            : "py-6 bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-slate-100 font-resolve">João Luis</span>
          <span className="text-sky-400 font-semibold "> DEV</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="
                  group relative text-xs uppercase tracking-widest
                  text-white hover:text-sky-400 transition-colors
                "
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Botão Currículo */}
          <div className="pl-6 border-l border-slate-800">
            <button
              className="
                px-5 py-2 rounded-md
                border border-sky-500/40
                text-sky-400 text-xs 
                hover:bg-sky-500/10
                hover:border-sky-500
                transition-all duration-300 tracking-widest
              "
            >
              Currículo
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
            className="
              p-2 rounded-lg
              text-sky-400
              bg-slate-900
              border border-slate-800
              hover:bg-slate-800
              transition-all
            "
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="
              md:hidden bg-black
              border-b border-slate-800
              shadow-2xl overflow-hidden
            "
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    text-sm uppercase tracking-widest
                    text-slate-400 hover:text-sky-400
                    flex flex-col items-center
                  "
                >
                  <span className="text-sky-500 text-[10px] mb-1">
                    0{index + 1}.
                  </span>
                  {link.name}
                </a>
              ))}

              <button
                className="
                  mt-4 w-full max-w-50
                  px-5 py-2 rounded-md
                  border border-sky-500/40
                  text-sky-400 text-xs 
                  hover:bg-sky-500/10
                  transition-all
                "
              >
                Currículo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
