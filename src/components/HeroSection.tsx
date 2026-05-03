import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("q", searchTerm);
    if (location) params.set("ubicacion", location);
    navigate(`/cliente?${params.toString()}`);
  };

  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="gradient-hero min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold gradient-accent text-accent-foreground mb-4">
                  🚀 Tu comunidad, tus servicios
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground">
                  Encuentra profesionales
                  <span className="text-gradient block">cerca de ti</span>
                </h1>
                <p className="mt-4 text-lg text-primary-foreground/70 max-w-lg">
                  Conectamos usuarios con proveedores de servicios locales verificados. Solicita, contrata y califica de forma rápida y segura.
                </p>
              </div>

              <form
                onSubmit={e => { e.preventDefault(); handleSearch(); }}
                className="flex flex-col sm:flex-row gap-3 bg-card/10 backdrop-blur-md p-3 rounded-xl border border-primary-foreground/10 max-w-lg"
              >
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="¿Qué servicio necesitas?"
                    className="pl-10 bg-card border-0 h-11"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Ubicación"
                    className="pl-10 bg-card border-0 h-11 w-full sm:w-40"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" className="h-11 px-6">Buscar</Button>
              </form>

              <div className="flex items-center gap-6 text-primary-foreground/60 text-sm">
                <span><strong className="text-primary-foreground">2,500+</strong> Proveedores</span>
                <span><strong className="text-primary-foreground">15,000+</strong> Servicios</span>
                <span><strong className="text-primary-foreground">4.8★</strong> Promedio</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img src={heroImg} alt="LocalService - Servicios locales" className="rounded-2xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
