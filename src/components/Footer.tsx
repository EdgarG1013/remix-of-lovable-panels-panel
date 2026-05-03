import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-hero text-primary-foreground/70 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Wrench className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-primary-foreground">LocalService</span>
          </div>
          <p className="text-sm">Conectamos tu comunidad con servicios profesionales de calidad.</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3">Plataforma</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/cliente" className="hover:text-primary-foreground transition-colors">Buscar servicios</Link></li>
            <li><Link to="/registro" className="hover:text-primary-foreground transition-colors">Ser proveedor</Link></li>
            <li><a href="#categorias" className="hover:text-primary-foreground transition-colors">Categorías</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3">Soporte</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#como-funciona" className="hover:text-primary-foreground transition-colors">Centro de ayuda</a></li>
            <li><a href="mailto:soporte@localservice.com" className="hover:text-primary-foreground transition-colors">Contacto</a></li>
            <li><a href="#como-funciona" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/terminos" className="hover:text-primary-foreground transition-colors">Términos</Link></li>
            <li><Link to="/privacidad" className="hover:text-primary-foreground transition-colors">Privacidad</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm">
        © 2026 LocalService. Universidad del Valle - Seccional Pacífico.
      </div>
    </div>
  </footer>
);

export default Footer;
