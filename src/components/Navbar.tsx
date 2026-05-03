import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isLanding = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <Wrench className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">LocalService</span>
        </Link>

        {isLanding && (
          <>
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Servicios</a>
              <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Cómo funciona</a>
              <a href="#categorias" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Categorías</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link to="/login">Iniciar Sesión</Link>
              </Button>
              <Button asChild>
                <Link to="/registro">Registrarse</Link>
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </>
        )}
      </div>

      {isOpen && isLanding && (
        <div className="md:hidden bg-card border-b px-4 pb-4 space-y-3">
          <a href="#servicios" className="block text-sm font-medium text-muted-foreground">Servicios</a>
          <a href="#como-funciona" className="block text-sm font-medium text-muted-foreground">Cómo funciona</a>
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" asChild><Link to="/login">Iniciar Sesión</Link></Button>
            <Button size="sm" asChild><Link to="/registro">Registrarse</Link></Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
