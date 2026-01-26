import { Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-semibold">ACH IT Solutions</span>
          </div>
          
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href="#tecnologias" className="hover:text-foreground transition-colors">Tech</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} ACH IT Solutions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
