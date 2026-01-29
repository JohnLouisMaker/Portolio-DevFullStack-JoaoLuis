import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

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
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resumeRef.current &&
        !resumeRef.current.contains(event.target as Node)
      ) {
        setIsResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
            ? "py-3 bg-black/80 backdrop-blur-xl border-b border-slate-800"
            : "py-6 bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-slate-100 font-resolve">João Luis</span>
          <span className="text-sky-400 font-semibold"> DEV</span>
        </motion.a>

        {/* Desktop */}
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
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div
            ref={resumeRef}
            className="relative pl-6 border-l border-slate-800"
          >
            <button
              onClick={() => setIsResumeOpen(!isResumeOpen)}
              className="
                flex items-center gap-2
                px-5 py-2 rounded-md
                border border-sky-500/40
                text-sky-400 text-xs
                hover:bg-sky-500/10
                transition-all tracking-widest
              "
            >
              Currículo
              <ChevronDown size={14} />
            </button>

            <AnimatePresence>
              {isResumeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="
                    absolute right-0 mt-2 w-40
                    bg-black border border-slate-800
                    rounded-md shadow-xl overflow-hidden
                  "
                >
                  <a
                    href="../../public/Curriculo_JoaoLuisSilvaDev.pdf"
                    download
                    className="block px-4 py-3 text-xs text-slate-300 hover:bg-slate-800"
                  >
                    Baixar PDF
                  </a>
                  <a
                    href="../../public/Curriculo_JoaoLuisSilvaDev.dcox"
                    download
                    className="block px-4 py-3 text-xs text-slate-300 hover:bg-slate-800"
                  >
                    Baixar DOCX
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              p-2 rounded-lg text-sky-400
              bg-slate-900 border border-slate-800
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
            className="md:hidden bg-black border-b border-slate-800"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest text-slate-400 hover:text-sky-400"
                >
                  {link.name}
                </a>
              ))}

              {/* Currículo Mobile */}
              <div className="w-full flex flex-col items-center gap-2">
                <button
                  onClick={() => setIsResumeOpen(!isResumeOpen)}
                  className="
      w-full max-w-xs
      flex items-center justify-center gap-2
      px-5 py-2 rounded-md
      border border-sky-500/40
      text-sky-400 text-sm
      hover:bg-sky-500/10
      transition-all tracking-widest
    "
                >
                  Currículo
                  <ChevronDown size={14} />
                </button>

                <AnimatePresence>
                  {isResumeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="
          w-full max-w-xs
          bg-black border border-slate-800
          rounded-md shadow-xl overflow-hidden
        "
                    >
                      <a
                        href="../../public/Curriculo_JoaoLuisSilvaDev.pdf"
                        download
                        className="block px-4 py-3 text-xs text-slate-300 hover:bg-slate-800 text-center"
                      >
                        Baixar PDF
                      </a>
                      <a
                        href="../../public/Curriculo_JoaoLuisSilvaDev.docx"
                        download
                        className="block px-4 py-3 text-xs text-slate-300 hover:bg-slate-800 text-center"
                      >
                        Baixar DOCX
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
