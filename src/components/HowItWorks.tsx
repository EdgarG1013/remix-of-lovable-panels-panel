import { Search, UserCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Search, title: "Busca un servicio", desc: "Encuentra profesionales cercanos por categoría y ubicación." },
  { icon: UserCheck, title: "Contrata al proveedor", desc: "Revisa perfiles, calificaciones y solicita una cotización." },
  { icon: Star, title: "Califica el servicio", desc: "Evalúa la calidad y ayuda a otros usuarios a decidir." },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground">¿Cómo funciona?</h2>
          <p className="mt-3 text-muted-foreground">Tres pasos simples para conseguir el servicio que necesitas</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-sm font-bold text-primary mb-2">Paso {i + 1}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
