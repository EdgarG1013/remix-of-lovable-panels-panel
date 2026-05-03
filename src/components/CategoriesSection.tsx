import { useNavigate } from "react-router-dom";
import { Wrench, Zap, Droplets, Paintbrush, Leaf, ShieldCheck, Laptop, Truck } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { icon: Wrench, name: "Plomería", count: 340, color: "bg-blue-50 text-blue-600" },
  { icon: Zap, name: "Electricidad", count: 280, color: "bg-yellow-50 text-yellow-600" },
  { icon: Droplets, name: "Limpieza", count: 520, color: "bg-cyan-50 text-cyan-600" },
  { icon: Paintbrush, name: "Pintura", count: 190, color: "bg-pink-50 text-pink-600" },
  { icon: Leaf, name: "Jardinería", count: 230, color: "bg-green-50 text-green-600" },
  { icon: ShieldCheck, name: "Seguridad", count: 150, color: "bg-red-50 text-red-600" },
  { icon: Laptop, name: "Tecnología", count: 410, color: "bg-purple-50 text-purple-600" },
  { icon: Truck, name: "Mudanzas", count: 180, color: "bg-orange-50 text-orange-600" },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="categorias" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Categorías de Servicios</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">Explora nuestra amplia gama de servicios profesionales</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => navigate(`/cliente?categoria=${encodeURIComponent(cat.name)}`)}
              className="group cursor-pointer p-6 rounded-xl bg-card border hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className={`w-12 h-12 rounded-lg ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">{cat.name}</h3>
              <p className="text-sm text-muted-foreground">{cat.count} profesionales</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
