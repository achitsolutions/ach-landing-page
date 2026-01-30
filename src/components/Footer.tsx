import { Terminal, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-semibold">ACH IT Solutions</span>
            </div>
            <span className="text-xs text-muted-foreground">CNPJ: 56.202.848/0001-58</span>
          </div>
          
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition-colors">{t("nav.services")}</a>
            <a href="#sobre" className="hover:text-foreground transition-colors">{t("nav.about")}</a>
            <a href="#tecnologias" className="hover:text-foreground transition-colors">{t("nav.tech")}</a>
            <a href="#contato" className="hover:text-foreground transition-colors">{t("nav.contact")}</a>
            <a 
              href="https://www.linkedin.com/in/carolinahonorio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
