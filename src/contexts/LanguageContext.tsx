import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    "nav.services": "Serviços",
    "nav.about": "Sobre",
    "nav.tech": "Tech",
    "nav.ai": "IA",
    "nav.contact": "Contato",
    "nav.cta": "Fale Conosco",

    // Hero
    "hero.badge": "Consultoria Técnica Senior",
    "hero.headline1": "Integrações,",
    "hero.headline2": "automação",
    "hero.headline3": "e operações digitais",
    "hero.subheadline": "Mais de 10 anos de experiência em tecnologia, com foco em integrações de sistemas, dados e eficiência operacional.",
    "hero.cta.primary": "Entre em Contato",
    "hero.cta.secondary": "Nossos Serviços",

    // Services
    "services.title1": "Áreas de",
    "services.title2": "Atuação",
    "services.subtitle": "Soluções técnicas focadas em eficiência e resultados concretos",
    "services.integrations.title": "Integrações & Automação",
    "services.integrations.description": "Zapier, Make, webhooks, APIs REST. Integração entre sistemas SaaS, automação de fluxos operacionais e prevenção de falhas.",
    "services.data.title": "Dados & Analytics",
    "services.data.description": "Google Sheets como fonte de verdade, SQL, BigQuery, Looker Studio. Definição de métricas, KPIs e dashboards para tomada de decisão.",
    "services.support.title": "Suporte Técnico & Operações",
    "services.support.description": "Troubleshooting técnico, análise de incidentes, triagem de tickets, integração com produto e melhoria contínua de processos.",
    "services.implementation.title": "Implementação & Processos",
    "services.implementation.description": "Documentação técnica, handoff entre times, padronização de fluxos, organização operacional e apoio a times em crescimento.",

    // About
    "about.title1": "Experiência",
    "about.title2": "Profissional",
    "about.description": "Ao longo de mais de uma década, atuei como profissional de tecnologia e operações em empresas de grande escala e produtos digitais complexos. Essa vivência em ambientes de alta complexidade técnica e operacional fundamenta o trabalho realizado hoje pela ACH IT Solutions.",
    "about.experience": "Experiência em empresas como:",
    "about.cta": "Conecte no LinkedIn",

    // Tech Stack
    "tech.title1": "Tech",
    "tech.title2": "Stack",
    "tech.subtitle": "Ferramentas e tecnologias utilizadas no dia a dia",

    // AI Section
    "ai.badge": "IA como Ferramenta",
    "ai.title1": "IA na",
    "ai.title2": "Prática",
    "ai.subtitle": "Utilização de inteligência artificial como apoio operacional e eficiência, integrada a processos existentes",
    "ai.classification.title": "Classificação & Priorização",
    "ai.classification.description": "Triagem inteligente de tickets, leads e demandas operacionais",
    "ai.summarization.title": "Sumarização de Dados",
    "ai.summarization.description": "Síntese de feedbacks, relatórios e informações operacionais",
    "ai.writing.title": "Apoio à Escrita Técnica",
    "ai.writing.description": "Suporte na criação de respostas, documentação e comunicações",
    "ai.automation.title": "Automação com LLMs",
    "ai.automation.description": "Integração de modelos prontos a processos e fluxos existentes",

    // Contact
    "contact.title1": "Vamos",
    "contact.title2": "Conversar",
    "contact.subtitle": "Entre em contato para discutir como posso ajudar sua operação",
    "contact.form.name": "Nome",
    "contact.form.name.placeholder": "Seu nome",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "seu@email.com",
    "contact.form.message": "Mensagem",
    "contact.form.message.placeholder": "Conte sobre seu projeto ou necessidade...",
    "contact.form.submit": "Enviar Mensagem",
    "contact.form.success": "Mensagem enviada com sucesso!",
    "contact.form.success.description": "Entrarei em contato em breve.",
    "contact.email.label": "Email",
    "contact.location.label": "Localização",
    "contact.location.value": "Brasil",

    // Footer
    "footer.rights": "ACH IT Solutions"
  },
  en: {
    // Header
    "nav.services": "Services",
    "nav.about": "About",
    "nav.tech": "Tech",
    "nav.ai": "AI",
    "nav.contact": "Contact",
    "nav.cta": "Get in Touch",

    // Hero
    "hero.badge": "Senior Technical Consultant",
    "hero.headline1": "Integrations,",
    "hero.headline2": "automation",
    "hero.headline3": "& digital operations",
    "hero.subheadline": "Over 10 years of experience in technology, focused on system integrations, data, and operational efficiency.",
    "hero.cta.primary": "Get in Touch",
    "hero.cta.secondary": "Our Services",

    // Services
    "services.title1": "Areas of",
    "services.title2": "Expertise",
    "services.subtitle": "Technical solutions focused on efficiency and concrete results",
    "services.integrations.title": "Integrations & Automation",
    "services.integrations.description": "Zapier, Make, webhooks, REST APIs. SaaS system integrations, operational workflow automation, and failure prevention.",
    "services.data.title": "Data & Analytics",
    "services.data.description": "Google Sheets as source of truth, SQL, BigQuery, Looker Studio. Metrics definition, KPIs, and dashboards for data-driven decisions.",
    "services.support.title": "Technical Operations & Support",
    "services.support.description": "Technical troubleshooting, incident analysis, ticket triage, product integration, and continuous process improvement.",
    "services.implementation.title": "Implementation & Processes",
    "services.implementation.description": "Technical documentation, team handoffs, workflow standardization, operational organization, and support for growing teams.",

    // About
    "about.title1": "Professional",
    "about.title2": "Experience",
    "about.description": "Over more than a decade, I've worked as a technology and operations professional at large-scale companies and complex digital products. This experience in highly technical and operationally demanding environments forms the foundation of the work delivered by ACH IT Solutions today.",
    "about.experience": "Experience at companies such as:",
    "about.cta": "Connect on LinkedIn",

    // Tech Stack
    "tech.title1": "Tech",
    "tech.title2": "Stack",
    "tech.subtitle": "Tools and technologies used in day-to-day operations",

    // AI Section
    "ai.badge": "AI as a Tool",
    "ai.title1": "Applied",
    "ai.title2": "AI",
    "ai.subtitle": "Leveraging artificial intelligence for operational support and efficiency, integrated into existing processes",
    "ai.classification.title": "Classification & Prioritization",
    "ai.classification.description": "Intelligent triage of tickets, leads, and operational demands",
    "ai.summarization.title": "Data Summarization",
    "ai.summarization.description": "Synthesis of feedback, reports, and operational information",
    "ai.writing.title": "Technical Writing Support",
    "ai.writing.description": "Assistance with responses, documentation, and communications",
    "ai.automation.title": "LLM-Powered Automation",
    "ai.automation.description": "Integration of pre-trained models into existing processes and workflows",

    // Contact
    "contact.title1": "Let's",
    "contact.title2": "Talk",
    "contact.subtitle": "Get in touch to discuss how I can help your operations",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Tell me about your project or needs...",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Message sent successfully!",
    "contact.form.success.description": "I'll get back to you soon.",
    "contact.email.label": "Email",
    "contact.location.label": "Location",
    "contact.location.value": "Brazil",

    // Footer
    "footer.rights": "ACH IT Solutions"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ach-language");
      if (saved === "pt" || saved === "en") return saved;
    }
    return "pt";
  });

  useEffect(() => {
    localStorage.setItem("ach-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
