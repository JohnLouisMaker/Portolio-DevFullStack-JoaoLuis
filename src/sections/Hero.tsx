import { motion } from "framer-motion";
import { Download, Folder } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-72 h-72 md:w-96 md:h-96 bg-sky-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-40 w-72 h-72 md:w-96 md:h-96 bg-sky-500/10 rounded-full blur-3xl animate-float delay-2000" />
      </div>

      <div className="relative z-10 w-full px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-rounded  tracking-tight leading-tight mb-6"
          >
            Oi, eu sou{" "}
            <span className="block sm:inline text-sky-400 font-resolve">
              João Luis!
            </span>
            <span className="block mt-2 text-xl sm:text-2xl md:text-3xl text-slate-400 font-resolve tracking-wide">
              Desenvolvedor Web
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-10 text-slate-400 sm:text-lg md:text-xl font-rounded tracking-wider"
          >
            Crio experiências digitais modernas utilizando tecnologias atuais,
            transformando problemas complexos em soluções simples e eficientes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-6 py-3 flex items-center justify-center rounded-lg bg-sky-500 text-black font-resolve hover:bg-sky-400 transition"
            >
              <Folder className="w-5 h-5 mr-2" />
              Ver Projetos
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-3 flex items-center justify-center rounded-lg border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 transition font-resolve"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar Currículo
            </motion.a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-14"
          >
            {["React", "TypeScript", "Tailwind", "Node.js", "Next.js"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 text-xs sm:text-sm font-mono rounded-full bg-[#020617] text-slate-400 border border-slate-800"
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
