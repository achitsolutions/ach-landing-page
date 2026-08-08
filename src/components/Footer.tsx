import { Terminal, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { scrollToSectionWhenReady, getSectionIdForPath } from "@/lib/sectionNav";

const Footer = () => {
  const { language, t, sectionPath } = useLanguage();
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  const sectionLinks = [
    { to: sectionPath("servicos"), label: t("nav.services") },
    { to: sectionPath("sobre"), label: t("nav.about") },
    { to: sectionPath("tecnologias"), label: t("nav.tech") },
    { to: sectionPath("contato"), label: t("nav.contact") },
  ];

  const handleSectionClick = (to: string) => {
    if (pathname !== to) return;
    const sectionId = getSectionIdForPath(to);
    if (sectionId) scrollToSectionWhenReady(sectionId, "smooth");
  };

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
            {sectionLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleSectionClick(link.to)}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              {language === "pt" ? "Política de Privacidade" : "Privacy Policy"}
            </Link>
            <span>© {currentYear} {t("footer.rights")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
