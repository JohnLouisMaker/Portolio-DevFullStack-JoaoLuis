import { motion, easeOut } from "framer-motion";

const education = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário FAMETRO - Unifametro",
    period: "Fev 2025 - Jun 2027 (3º Semestre - em andamento)",
  },
];

const qualifications = [
  {
    course: "Introdução à Cibersegurança",
    institution: "Cisco Networking Academy",
    completed: "Dezembro 2025",
  },
  {
    course: "Curso Básico de Redes",
    institution: "Cisco Networking Academy (Parceria Unifametro)",
    completed: "Outubro 2025",
  },
  {
    course: "Desenvolvimento Web Full-Stack - 2.0",
    institution: "IEL Ceará / Digital College - Geração Tech",
    completed: "Junho 2025",
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

export default function Formation() {
  return (
    <section id="education" className="py-24 bg-black text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-resolve text-center mb-4">
            Formação Acadêmica &{" "}
            <span className="text-sky-400">Qualificações</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Formação Acadêmica */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#020617] border border-slate-800"
          >
            <h3 className="text-xl font-rounded mb-6">Formação Acadêmica</h3>
            <ul className="space-y-6 text-slate-200 font-resolve">
              {education.map((edu) => (
                <li key={edu.degree} className="flex flex-col">
                  <span className="font-semibold text-sky-400">
                    {edu.degree}
                  </span>
                  <span className="text-sm text-slate-400">
                    {edu.institution}
                  </span>
                  <span className="text-sm text-slate-500 italic">
                    {edu.period}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Qualificações */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#020617] border border-slate-800"
          >
            <h3 className="text-xl font-rounded mb-6">Qualificações</h3>
            <ul className="space-y-4 text-slate-200 font-resolve list-disc list-inside">
              {qualifications.map((q) => (
                <li key={q.course} className="flex flex-col">
                  <span className="font-semibold text-sky-400">{q.course}</span>
                  <span className="text-sm text-slate-400">
                    {q.institution}
                  </span>
                  <span className="text-sm text-slate-500 italic">
                    Concluído em {q.completed}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
