import { motion, easeOut } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.Js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "Insomnia", "Figma", "VS Code", "Vercel"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-resolve text-center mb-4">
            Habilidades & <span className="text-sky-400">Expertise</span>
          </h2>
          <p className="font-rounded tracking-wider text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Tecnologias que utilizo no dia a dia para entregar soluções de
            qualidade
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: categoryIndex * 0.15 }}
              className="
                p-6 rounded-2xl
                bg-[#020617]
                border border-slate-800
                hover:border-sky-500/50
                transition-all
              "
            >
              <h3 className="text-xl font-rounded mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                {category.title}
              </h3>

              <ul className="space-y-2 text-slate-200 font-resolve">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
