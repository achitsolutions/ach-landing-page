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
    "hero.headline1": "Integrações",
    "hero.headline2": "Engenharia de dados",
    "hero.headline3": "Operações estruturadas",
    "hero.subheadline": "Trabalho na interseção entre operações, tecnologia e dados, ajudando a transformar ambientes complexos em estruturas organizadas, eficientes e pensadas para o longo prazo.",
    "hero.cta.primary": "Entrar em Contato",
    "hero.cta.secondary": "Nossos Serviços",
    "hero.context.title": "O problema",
    "hero.context.text": "Na maioria das empresas, os problemas não surgem por falta de ferramentas, mas sim por falta de organização entre recursos, processos e informações. Dados sem padronização, automações frágeis e sistemas que não conversam entre si costumam ser sintomas de estruturas que cresceram sem método.",
    "hero.positioning.title": "A solução",
    "hero.positioning.text": "Nosso trabalho começa quando \"ajustes pontuais\" deixam de resolver e passa a ser necessário olhar para o todo. Atuo organizando operações digitais de forma estruturada, conectando dados, automações e ferramentas para que as decisões deixem de ser reativas e passem a ser estratégicas.",
    "hero.practice.title": "Na prática",
    "hero.practice.items.1": "Estruturar integrações entre sistemas",
    "hero.practice.items.2": "Automatizar fluxos críticos",
    "hero.practice.items.3": "Organizar dados para análise e tomada de decisão",
    "hero.practice.items.4": "Documentar processos para garantir continuidade",
    "hero.practice.items.5": "Apoiar times e lideranças com visão operacional clara",

    // Services
    "services.title1": "O que",
    "services.title2": "Fazemos",
    "services.subtitle": "A ACH IT Solutions atua na organização de operações digitais por meio de dados, integrações e automação de processos.",
    "services.intro": "O foco não está apenas em implementar ferramentas, mas em estruturar sistemas e fluxos que sustentem decisões mais claras, eficientes e alinhadas aos objetivos do negócio.",
    "services.data.title": "Dados & Integrações",
    "services.data.description": "Estruturação e integração de dados entre sistemas para garantir consistência, confiabilidade e visibilidade operacional.",
    "services.data.hover": "Esse trabalho costuma envolver a conexão entre plataformas que não \"conversam\" entre si, criando uma base sólida para análise e tomada de decisão.",
    "services.automation.title": "Automação de Processos",
    "services.automation.description": "Automação de fluxos operacionais com foco em reduzir trabalho manual, minimizar erros e aumentar previsibilidade.",
    "services.automation.hover": "As automações são pensadas como parte de um sistema maior, evitando soluções frágeis ou difíceis de manter.",
    "services.systems.title": "Estruturação de Sistemas",
    "services.systems.description": "Organização, configuração e customização de sistemas como CRMs e ferramentas internas para refletir processos reais do negócio.",
    "services.systems.hover": "O objetivo é alinhar operação, dados e times, evitando retrabalho e perda de informação ao longo do fluxo.",
    "services.documentation.title": "Documentação & Padronização",
    "services.documentation.description": "Criação de documentação clara e padronização de processos para garantir continuidade, escalabilidade e autonomia dos times.",
    "services.documentation.hover": "A documentação faz parte da solução, não é um passo opcional ao final do projeto.",
    "services.workshops.title": "Workshops & Treinamentos",
    "services.workshops.description": "Workshops e treinamentos voltados a dados, automação, processos e uso estratégico de ferramentas.",
    "services.workshops.hover": "Os conteúdos são adaptados ao contexto do time e têm foco prático, aplicável à rotina e aos desafios reais da operação.",
    "services.method.title": "Como esses trabalhos costumam acontecer",
    "services.method.text": "Os projetos podem assumir formatos diferentes, desde intervenções pontuais até iniciativas mais estruturais, mas sempre partem de uma leitura cuidadosa do contexto, dos sistemas existentes e dos objetivos envolvidos.",
    "services.method.hover": "Não se trata apenas de \"implementar\", mas de entender o impacto do que está sendo construído no médio e longo prazo.",
    "services.closing": "Se você precisa organizar dados, sistemas e processos de forma estruturada e responsável, podemos conversar sobre o melhor caminho.",
    "services.cta": "Entrar em contato",

    // About
    "about.title1": "Sobre a",
    "about.title2": "ACH IT",
    "about.intro": "Sou movida por entender como as coisas funcionam. Especialmente quando parecem confusas, fragmentadas ou mal explicadas.",
    "about.trajectory1": "Ao longo da minha trajetória, sempre me interessei menos por tarefas isoladas e mais pela estrutura por trás delas: como sistemas se conectam, como decisões são tomadas e como os processos podem ser organizados de forma mais clara e eficiente.",
    "about.trajectory2": "Hoje, meu trabalho reflete exatamente isso.",
    "about.formation.title": "Formação e Trajetória",
    "about.formation.text1": "Minha primeira formação foi em Tradução e Interpretação. Mais do que o domínio do inglês, essa experiência me ensinou a traduzir ideias complexas, identificar ambiguidades e estruturar mensagens com precisão.",
    "about.formation.text2": "Com o tempo, essa habilidade de \"traduzir\" saiu do campo linguístico e passou a atuar no campo técnico: traduzir problemas operacionais em soluções estruturadas.",
    "about.formation.text3": "A vivência em suporte e operações aprofundou essa visão. Trabalhando diretamente com sistemas, integrações e dados sob pressão, desenvolvi uma leitura prática sobre onde processos quebram, onde falhas de comunicação surgem e como decisões são impactadas pela falta de organização.",
    "about.connection.translation": "Aprendi a identificar nuances, inconsistências e lacunas de comunicação — conceitos que hoje aplico ao analisar sistemas e fluxos de informação.",
    "about.connection.support": "Adquiri uma perspectiva real de como ferramentas são usadas na prática, onde surgem gargalos e como pequenas decisões podem afetar os clientes.",
    "about.connection.data": "Passei a estruturar conexões entre sistemas, organizar dados e automatizar processos com foco em previsibilidade e clareza.",
    "about.connection.cs": "Cursando Ciência da Computação, aprofundo fundamentos técnicos que sustentam minhas decisões, ampliando minha capacidade de criar soluções mais robustas.",
    "about.vision": "Minha visão estratégica não surgiu de teoria isolada, mas da combinação entre prática, análise e estudo contínuo. Trabalhar na interseção entre operações e tecnologia me mostrou que soluções eficientes não nascem apenas de ferramentas, mas de entendimento sistêmico.",
    "about.positioning": "Atualmente, concentro meu trabalho em organizar complexidade por meio de dados, integrações e automação responsável. Acredito que tecnologia deve ampliar clareza, não gerar dependência. Que processos precisam ser compreendidos antes de serem automatizados. E que decisões sustentáveis nascem de informação estruturada e bem interpretada.",
    "about.description": "A ACH IT Solutions consolida a experiência profissional de Carolina Honorio como especialista em tecnologia, integrações, automação e operações digitais.",
    "about.experience": "Experiência Profissional",
    "about.cta": "Conecte no LinkedIn",
    // Company contexts
    "about.company.quintoandar": "Marketplace imobiliário — Tecnologia & Operações",
    "about.company.ifood": "Plataforma de delivery — Suporte Técnico & Integrações",
    "about.company.uber": "Tecnologia para mobilidade — Operações & Processos",
    "about.company.99": "Plataforma digital de mobilidade — Tecnologia & Automação",

    // Tech Stack - now "Como eu trabalho"
    "tech.title1": "Como eu",
    "tech.title2": "Trabalho",
    "tech.subtitle": "O trabalho parte do entendimento de que problemas técnicos raramente existem isolados. Eles quase sempre são reflexo de processos mal definidos, sistemas desconectados ou decisões tomadas sem contexto suficiente.",
    "tech.intro": "Por isso, antes de implementar qualquer solução, procuro entender o cenário como um todo: operação, dados, ferramentas e objetivos envolvidos.",
    "tech.approach.title": "Método",
    "tech.approach.text": "A forma como trabalho se apoia em alguns princípios claros:",
    "tech.approach.1": "Problemas devem ser entendidos antes de serem resolvidos",
    "tech.approach.2": "Ajustes pontuais só funcionam quando fazem parte de um sistema coerente",
    "tech.approach.3": "Dados precisam ser confiáveis para apoiar decisões reais",
    "tech.approach.4": "Soluções precisam ser sustentáveis para quem vai operar depois",
    "tech.approach.closing": "O foco não está em \"fazer rápido\", mas em fazer com integridade e eficiência — reduzindo o retrabalho e a dependência excessiva no futuro.",
    "tech.tools.title": "Ferramentas",
    "tech.tools.intro": "As ferramentas que utilizamos fazem parte do meio, não do fim. Elas são escolhidas de acordo com o contexto, a maturidade da operação e o tipo de problema a ser resolvido.",
    "tech.tools.automation": "Automation & Integration",
    "tech.tools.automation.items": "Zapier, Webhooks, REST APIs",
    "tech.tools.automation.hover": "Contexto de uso, tipo de automação e cuidado com soluções frágeis. Cada automação é pensada como parte de um sistema maior.",
    "tech.tools.support": "Support & Operations",
    "tech.tools.support.items": "Zendesk, Intercom, Twilio, SalesForce",
    "tech.tools.support.hover": "Organização de fluxos, visibilidade operacional e suporte como fonte de sinal para decisões de produto e negócio.",
    "tech.tools.data": "Data & Analytics",
    "tech.tools.data.items": "BigQuery, Mixpanel, Google Sheets, Looker Studio",
    "tech.tools.data.hover": "Estruturação de dados, fonte única de verdade e apoio à decisão com base em informações confiáveis e organizadas.",
    "tech.languages.title": "Linguagens",
    "tech.languages.intro": "Além de ferramentas, utilizo linguagens de programação para criar soluções mais flexíveis, robustas e adaptáveis ao contexto de cada projeto.",
    "tech.languages.items": "SQL, Python, R",
    "tech.languages.hover": "O uso de código permite ir além do no-code quando necessário, mantendo controle sobre lógica, dados e integrações.",

    // AI Section - Applied AI
    "ai.badge": "IA Aplicada",
    "ai.title1": "Applied",
    "ai.title2": "AI",
    "ai.subtitle": "Utilizamos inteligência artificial como ferramenta de apoio — nunca como substituição do pensamento crítico, da análise de contexto ou da responsabilidade sobre as decisões tomadas.",
    "ai.intro": "A IA entra no trabalho como um meio para ampliar capacidade, não para terceirizar julgamento. Ela é usada para acelerar etapas, identificar padrões, organizar informações e apoiar análises — sempre dentro de um processo estruturado, documentado e revisado.",
    "ai.criteria.title": "Cada uso de IA faz parte de um fluxo maior, com critérios claros:",
    "ai.criteria.1": "O problema é compreendido antes da aplicação da ferramenta",
    "ai.criteria.2": "As etapas são documentadas",
    "ai.criteria.3": "Os resultados são avaliados de forma crítica",
    "ai.criteria.4": "Decisões finais permanecem humanas",
    "ai.closing": "Quando aplicada dessa forma, a IA se torna um recurso poderoso para reduzir trabalho repetitivo, enriquecer dados, apoiar leituras de cenário e melhorar eficiência — sem comprometer qualidade, ética ou responsabilidade.",
    "ai.hover.ethics.title": "Ética e responsabilidade",
    "ai.hover.ethics.text": "O uso de IA envolve impacto real em processos e decisões. Por isso, priorizo aplicações que possam ser compreendidas, auditadas e justificadas.",
    "ai.hover.docs.title": "Documentação e processo",
    "ai.hover.docs.text": "Sempre que a IA faz parte de um fluxo, as etapas são registradas para garantir continuidade, entendimento e possibilidade de revisão futura.",
    "ai.hover.critical.title": "Pensamento crítico",
    "ai.hover.critical.text": "A IA apoia o raciocínio, mas não o substitui. Resultados são questionados, ajustados e contextualizados antes de qualquer decisão.",

    // Contact
    "contact.title1": "Vamos",
    "contact.title2": "Conversar",
    "contact.subtitle": "Se você está lidando com sistemas desconectados, dados pouco confiáveis ou processos que parecem mais complexos do que deveriam, podemos conversar sobre o que está acontecendo.",
    "contact.intro": "Preencha o formulário abaixo com um breve contexto da sua situação. Responderei assim que possível.",
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
    "footer.rights": "ACH IT Solutions",
    "footer.closing": "Independentemente do formato do projeto, nosso papel é ajudar a organizar complexidade com método, clareza e responsabilidade."
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
    "hero.headline1": "I organize systems, processes and data",
    "hero.headline2": "for clearer",
    "hero.headline3": "and sustainable decisions",
    "hero.subheadline": "I work at the intersection of operations, technology, and data — helping transform complex environments into organized, efficient structures built for the long term.",
    "hero.cta.primary": "Get in Touch",
    "hero.cta.secondary": "Our Services",
    "hero.context.title": "The problem",
    "hero.context.text": "In most companies, problems don't arise from a lack of tools, but from a lack of organization between resources, processes, and information. Unstandardized data, fragile automations, and disconnected systems are usually symptoms of structures that grew without method.",
    "hero.positioning.title": "The solution",
    "hero.positioning.text": "Our work begins when \"quick fixes\" stop working and it becomes necessary to look at the big picture. I organize digital operations in a structured way, connecting data, automations, and tools so that decisions shift from reactive to strategic.",
    "hero.practice.title": "In practice",
    "hero.practice.items.1": "Structure integrations between systems",
    "hero.practice.items.2": "Automate critical workflows",
    "hero.practice.items.3": "Organize data for analysis and decision-making",
    "hero.practice.items.4": "Document processes to ensure continuity",
    "hero.practice.items.5": "Support teams and leaders with clear operational vision",

    // Services
    "services.title1": "What we",
    "services.title2": "Do",
    "services.subtitle": "ACH IT Solutions works on organizing digital operations through data, integrations, and process automation.",
    "services.intro": "The focus is not just on implementing tools, but on structuring systems and flows that support clearer, more efficient decisions aligned with business goals.",
    "services.data.title": "Data & Integrations",
    "services.data.description": "Data structuring and integration between systems to ensure consistency, reliability, and operational visibility.",
    "services.data.hover": "This work usually involves connecting platforms that don't \"talk\" to each other, creating a solid foundation for analysis and decision-making.",
    "services.automation.title": "Process Automation",
    "services.automation.description": "Automation of operational flows focused on reducing manual work, minimizing errors, and increasing predictability.",
    "services.automation.hover": "Automations are designed as part of a larger system, avoiding fragile or hard-to-maintain solutions.",
    "services.systems.title": "Systems Structuring",
    "services.systems.description": "Organization, configuration, and customization of systems like CRMs and internal tools to reflect real business processes.",
    "services.systems.hover": "The goal is to align operations, data, and teams — avoiding rework and information loss throughout the flow.",
    "services.documentation.title": "Documentation & Standardization",
    "services.documentation.description": "Creating clear documentation and standardizing processes to ensure continuity, scalability, and team autonomy.",
    "services.documentation.hover": "Documentation is part of the solution, not an optional step at the end of the project.",
    "services.workshops.title": "Workshops & Training",
    "services.workshops.description": "Workshops and training focused on data, automation, processes, and strategic use of tools.",
    "services.workshops.hover": "Content is adapted to the team's context with a practical focus, applicable to daily routines and real operational challenges.",
    "services.method.title": "How these projects usually happen",
    "services.method.text": "Projects can take different formats, from specific interventions to more structural initiatives, but always start from a careful reading of context, existing systems, and objectives involved.",
    "services.method.hover": "It's not just about \"implementing\" — it's about understanding the impact of what's being built in the medium and long term.",
    "services.closing": "If you need to organize data, systems, and processes in a structured and responsible way, we can talk about the best path forward.",
    "services.cta": "Get in touch",

    // About
    "about.title1": "About",
    "about.title2": "ACH IT",
    "about.intro": "I'm driven by understanding how things work. Especially when they seem confusing, fragmented, or poorly explained.",
    "about.trajectory1": "Throughout my career, I've always been less interested in isolated tasks and more in the structure behind them: how systems connect, how decisions are made, and how processes can be organized more clearly and efficiently.",
    "about.trajectory2": "Today, my work reflects exactly that.",
    "about.formation.title": "Background & Trajectory",
    "about.formation.text1": "My first degree was in Translation & Interpretation. Beyond mastering English, this experience taught me to translate complex ideas, identify ambiguities, and structure messages with precision.",
    "about.formation.text2": "Over time, this ability to \"translate\" moved from the linguistic field to the technical one: translating operational problems into structured solutions.",
    "about.formation.text3": "Experience in support and operations deepened this vision. Working directly with systems, integrations, and data under pressure, I developed a practical understanding of where processes break, where communication gaps arise, and how decisions are impacted by lack of organization.",
    "about.connection.translation": "I learned to identify nuances, inconsistencies, and communication gaps — concepts I now apply when analyzing systems and information flows.",
    "about.connection.support": "I gained a real perspective on how tools are used in practice, where bottlenecks emerge, and how small decisions can affect customers.",
    "about.connection.data": "I began structuring connections between systems, organizing data, and automating processes with a focus on predictability and clarity.",
    "about.connection.cs": "Studying Computer Science, I deepen the technical foundations that support my decisions, expanding my ability to create more robust solutions.",
    "about.vision": "My strategic vision didn't come from isolated theory, but from the combination of practice, analysis, and continuous study. Working at the intersection of operations and technology showed me that efficient solutions don't come just from tools, but from systemic understanding.",
    "about.positioning": "Currently, I focus my work on organizing complexity through data, integrations, and responsible automation. I believe technology should amplify clarity, not create dependency. That processes need to be understood before being automated. And that sustainable decisions come from structured, well-interpreted information.",
    "about.description": "ACH IT Solutions represents the professional experience of Carolina Honorio as a specialist in technology, integrations, automation, and digital operations.",
    "about.experience": "Professional Experience",
    "about.cta": "Connect on LinkedIn",
    // Company contexts
    "about.company.quintoandar": "Real estate marketplace — Technology & Operations",
    "about.company.ifood": "Delivery platform — Technical Support & Integrations",
    "about.company.uber": "Mobility technology — Operations & Processes",
    "about.company.99": "Digital mobility platform — Technology & Automation",

    // Tech Stack - now "How I work"
    "tech.title1": "How I",
    "tech.title2": "Work",
    "tech.subtitle": "The work starts from the understanding that technical problems rarely exist in isolation. They're almost always a reflection of poorly defined processes, disconnected systems, or decisions made without enough context.",
    "tech.intro": "That's why, before implementing any solution, I seek to understand the full picture: operations, data, tools, and objectives involved.",
    "tech.approach.title": "Approach",
    "tech.approach.text": "The way I work is built on a few clear principles:",
    "tech.approach.1": "Problems must be understood before being solved",
    "tech.approach.2": "Quick fixes only work when they're part of a coherent system",
    "tech.approach.3": "Data needs to be reliable to support real decisions",
    "tech.approach.4": "Solutions must be sustainable for those who will operate them",
    "tech.approach.closing": "The focus isn't on \"doing it fast,\" but on doing it with integrity and efficiency — reducing rework and excessive dependency in the future.",
    "tech.tools.title": "Tools",
    "tech.tools.intro": "The tools we use are a means, not an end. They're chosen according to context, operational maturity, and the type of problem to be solved.",
    "tech.tools.automation": "Automation & Integration",
    "tech.tools.automation.items": "Zapier, Webhooks, REST APIs",
    "tech.tools.automation.hover": "Context of use, type of automation, and care with fragile solutions. Each automation is designed as part of a larger system.",
    "tech.tools.support": "Support & Operations",
    "tech.tools.support.items": "Zendesk, Intercom, Twilio, SalesForce",
    "tech.tools.support.hover": "Flow organization, operational visibility, and support as a signal source for product and business decisions.",
    "tech.tools.data": "Data & Analytics",
    "tech.tools.data.items": "BigQuery, Mixpanel, Google Sheets, Looker Studio",
    "tech.tools.data.hover": "Data structuring, single source of truth, and decision support based on reliable and organized information.",
    "tech.languages.title": "Languages",
    "tech.languages.intro": "Beyond tools, I use programming languages to create more flexible, robust, and adaptable solutions for each project's context.",
    "tech.languages.items": "SQL, Python, R",
    "tech.languages.hover": "Using code allows going beyond no-code when necessary, maintaining control over logic, data, and integrations.",

    // AI Section - Applied AI
    "ai.badge": "Applied AI",
    "ai.title1": "Applied",
    "ai.title2": "AI",
    "ai.subtitle": "We use artificial intelligence as a support tool — never as a replacement for critical thinking, context analysis, or responsibility over decisions made.",
    "ai.intro": "AI enters the work as a means to expand capacity, not to outsource judgment. It's used to accelerate steps, identify patterns, organize information, and support analyses — always within a structured, documented, and reviewed process.",
    "ai.criteria.title": "Each use of AI is part of a larger flow, with clear criteria:",
    "ai.criteria.1": "The problem is understood before the tool is applied",
    "ai.criteria.2": "Steps are documented",
    "ai.criteria.3": "Results are critically evaluated",
    "ai.criteria.4": "Final decisions remain human",
    "ai.closing": "When applied this way, AI becomes a powerful resource for reducing repetitive work, enriching data, supporting scenario analysis, and improving efficiency — without compromising quality, ethics, or responsibility.",
    "ai.hover.ethics.title": "Ethics and responsibility",
    "ai.hover.ethics.text": "The use of AI involves real impact on processes and decisions. That's why I prioritize applications that can be understood, audited, and justified.",
    "ai.hover.docs.title": "Documentation and process",
    "ai.hover.docs.text": "Whenever AI is part of a flow, steps are recorded to ensure continuity, understanding, and the possibility of future review.",
    "ai.hover.critical.title": "Critical thinking",
    "ai.hover.critical.text": "AI supports reasoning but doesn't replace it. Results are questioned, adjusted, and contextualized before any decision.",

    // Contact
    "contact.title1": "Let's",
    "contact.title2": "Talk",
    "contact.subtitle": "If you're dealing with disconnected systems, unreliable data, or processes that seem more complex than they should be, we can talk about what's going on.",
    "contact.intro": "Fill out the form below with a brief context of your situation. I'll respond as soon as possible.",
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
    "footer.rights": "ACH IT Solutions",
    "footer.closing": "Regardless of the project format, our role is to help organize complexity with method, clarity, and responsibility."
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
