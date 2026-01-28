import { motion, easeOut } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "joaoluisdev9@gmail.com",
    href: "mailto:joaoluisdev9@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Caucaia, Ceará - Brasil",
    href: "#",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (85) 99722-4365",
    href: "tel:+5585997224365",
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

export default function Contact() {
  return (
    <section id="contact" className="py-24 font-resolve bg-black text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-resolve mb-4">
            Informações de <span className="text-sky-400">Contato</span>
          </h2>
          <p className="font-rounded tracking-wider text-slate-400 max-w-2xl mx-auto">
            Você pode entrar em contato comigo pelos canais abaixo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.15 }}
              className="
                group p-8 rounded-2xl
                bg-[#020617]
                border border-slate-800
                hover:border-sky-500/50
                transition-all duration-300
                flex flex-col items-center text-center
              "
            >
              <div className="p-4 rounded-xl bg-slate-900 text-sky-400 mb-4 group-hover:scale-110 transition-transform duration-300 border border-slate-800">
                <info.icon className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
                {info.label}
              </span>

              <p className="text-lg font-medium group-hover:text-sky-400 transition-colors">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
