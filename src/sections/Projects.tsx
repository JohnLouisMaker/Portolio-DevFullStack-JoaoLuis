import { motion, easeOut } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import taskzen from "../assets/imgs/taskzen.png";
import cinezaImg from "../assets/imgs/cineza.png";
import ufelina from "../assets/imgs/ufelina.png";

const projects = [
  {
    title: "ONG União Felina: Site Centralizado",
    description:
      "Site com informações sobre a ONG União Felina, incluindo trajetória, contato e futuramente notícias.",
    image: ufelina,
    tags: ["React.js", "TypeScript", "Tailwind", "Cooperação", "ONG"],
    github: "https://github.com/JohnLouisMaker/uniao-felina-website",
    live: "https://uniao-felina-website.vercel.app/",
    featured: true,
  },
  {
    title: "TaskZen: Gerenciador de Tarefas",
    description:
      "Aplicação colaborativa para gerenciamento de tarefas com atualizações em tempo real.",
    image: taskzen,
    tags: ["React", "JavaScript", "Email.js", "JSON Server", "CRUD"],
    github: "https://github.com/JohnLouisMaker/task-zen-final",
    live: "https://task-zen-final.vercel.app/",
    featured: true,
  },
  {
    title: "Cineza: Plataforma de filmes (TMDb)",
    description:
      "Plataforma de filmes consumindo dados da TMDb, com interface interativa e design moderno.",
    image: cinezaImg,
    tags: ["React", "Javascript", "Tailwind", "TMDb API"],
    github: "https://github.com/JohnLouisMaker/cineza",
    live: "https://cineza-beta.vercel.app/",
    featured: true,
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

const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: fadeInUp,
};

const cardBase =
  "bg-[#020617] border border-slate-800 hover:border-sky-500/50 transition-all";

function ProjectLinks({ github, live }: { github: string; live: string }) {
  return (
    <div className="flex gap-4">
      <a
        href={github}
        target="_blank"
        className="text-slate-400 hover:text-sky-400"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href={live}
        target="_blank"
        className="text-slate-400 hover:text-sky-400"
      >
        <ExternalLink className="w-5 h-5" />
      </a>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...motionProps} viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl md:text-4xl font-resolve text-center mb-4">
            Projetos em <span className="text-sky-400">Destaque</span>
          </h2>
          <p className="font-rounded tracking-wider text-slate-400 text-center max-w-2xl mx-auto mb-16">
            Alguns projetos que representam bem meu trabalho e evolução técnica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...motionProps}
              transition={{ delay: i * 0.15 }}
              className={`group font-rimouski rounded-2xl overflow-hidden ${cardBase}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-400">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <Tags tags={project.tags} />
                <ProjectLinks github={project.github} live={project.live} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
