import { motion } from "framer-motion";
import { Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description:
      "Escrevo código legível, escalável e de fácil manutenção, seguindo boas práticas e padrões de projeto.",
  },
  {
    icon: Lightbulb,
    title: "Resolvedor de Problemas",
    description:
      "Transformo desafios complexos em soluções simples, eficientes e bem pensadas.",
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    description: "Mentalidade colaborativa, com boa comunicação.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="py-24 bg-black text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-4 font-resolve">
            Sobre <span className="text-sky-400">Mim</span>
          </h2>

          <p className="max-w-2xl mx-auto mb-16 text-center text-slate-400 font-rounded tracking-wider">
            Desenvolvedor apaixonado por criar experiências digitais modernas e
            funcionais
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              Sou{" "}
              <span className="font-medium text-slate-100">
                Desenvolvedor Web
              </span>{" "}
              buscando oportunidade de estágio para aprender e desenvolver
              habilidades em aplicações modernas, focadas em performance,
              usabilidade e boas práticas.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              Sou estudante de{" "}
              <span className="font-medium text-slate-100">
                Análise e Desenvolvimento de Sistemas
              </span>{" "}
              no{" "}
              <span className="font-medium text-slate-100">
                Centro Universitário FAMETRO - Unifametro
              </span>{" "}
              e possuo formação pelo programa{" "}
              <span className="font-medium text-slate-100">Geração Tech</span>,
              no curso{" "}
              <span className="font-medium text-slate-100">
                Desenvolvimento Web Full Stack 2.0
              </span>
              . Durante o curso intensivo de 3 meses, estudei e pratiquei HTML,
              CSS, JavaScript, TypeScript e React.js , consolidando os conceitos
              fundamentais do desenvolvimento web e preparando-me para iniciar
              minha trajetória como estagiário.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              Além da formação, desenvolvi projetos acadêmicos e pessoais.
              Participei da criação de um site para a
              <span className="font-medium text-slate-100">
                {" "}
                ONG União Felina
              </span>
              , voltado ao apoio a animais de rua em Fortaleza. Também construí
              outros projetos focados em
              <span className="font-medium text-slate-100">
                {" "}
                aplicações web modernas, layouts e boas práticas de
                desenvolvimento
              </span>
              , consolidando conhecimentos estudados durante a formação.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#020617] border border-slate-800 hover:border-sky-500/50 transition-all"
              >
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                  <item.icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-rimouski text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-rounded tracking-wider">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
