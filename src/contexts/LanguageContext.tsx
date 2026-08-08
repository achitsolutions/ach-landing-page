import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getEquivalentPath,
  getLanguageForPath,
  getSectionPath,
} from "@/lib/sectionNav";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  /** Localized route for a section id (e.g. "servicos" -> "/servicos" | "/services"). */
  sectionPath: (sectionId: string) => string;
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
    "hero.badge": "Inteligência de Negócios",
    "hero.headline1": "Operações,",
    "hero.headline2": "Dados",
    "hero.headline3": "& Integrações",
    "hero.subheadline": "Ajudando a transformar ambientes complexos em estruturas organizadas, eficientes e pensadas para o longo prazo.",
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
    "services.title2": "fazemos",
    "services.intro": "O foco está em estruturar sistemas e fluxos, seja aprimorando o que já existe ou implementando o necessário para sustentar decisões mais claras e eficientes para o negócio.",
    "services.dataeng.title": "Engenharia de Dados",
    "services.dataeng.description": "Criação de pipelines, modelagem, padronização e integridade para garantir confiabilidade e visibilidade.",
    "services.dataeng.expand": "Arquitetura estruturada em camadas (raw, clean, metrics), com padrões claros e qualidade pensada desde a origem. Transformando dados dispersos em uma base operacional confiável.",
    "services.integrations.title": "Integrações",
    "services.integrations.description": "Conexão entre sistemas, automação de tarefas e redução de trabalho repetitivo para simplificar a rotina operacional.",
    "services.integrations.expand": "Construção de integrações robustas, com filtros condicionais, validações, webhooks e APIs, além de tratamento de exceções para evitar falhas silenciosas. Low-code como base, com lógica avançada quando necessário.",
    "services.automation.title": "Automação de Processos",
    "services.automation.description": "Fluxos operacionais estruturados para reduzir trabalho manual, minimizar erros e aumentar previsibilidade.",
    "services.automation.expand": "Projetadas como parte de um sistema maior, evitando soluções frágeis, isoladas ou difíceis de manter.",
    "services.systems.title": "Estruturação de Sistemas",
    "services.systems.description": "Organização e customização de sistemas como CRMs e ferramentas internas para refletir processos reais do negócio.",
    "services.systems.expand": "O objetivo é alinhar operação, dados e times, evitando retrabalho e perda de informação ao longo do fluxo.",
    "services.documentation.title": "Documentação & Padronização",
    "services.documentation.description": "Criação de documentação clara e padronização de processos para garantir continuidade, escalabilidade e autonomia dos times.",
    "services.documentation.expand": "A documentação faz parte da solução, não é um passo opcional ao final do projeto.",
    "services.workshops.title": "Workshops & Treinamentos",
    "services.workshops.description": "Workshops e treinamentos voltados a dados, automação, processos e uso estratégico de ferramentas.",
    "services.workshops.expand": "Conteúdos adaptados ao contexto do time, com foco prático e aplicável à rotina e aos desafios reais da operação.",
    "services.method.title": "Como esses trabalhos costumam acontecer",
    "services.method.text": "Os projetos podem assumir formatos diferentes, desde intervenções pontuais até iniciativas mais estruturais, mas sempre partem de uma leitura cuidadosa do contexto, dos sistemas existentes e dos objetivos envolvidos.",
    "services.method.expand": "Não se trata apenas de \"implementar\", mas de entender o impacto do que está sendo construído no médio e longo prazo.",
    "services.closing": "Se você precisa organizar dados, sistemas e processos de forma estruturada e responsável, podemos conversar sobre o melhor caminho.",
    "services.cta": "Entrar em contato",

    // About
    "about.title1": "Sobre a",
    "about.title2": "ACH IT Solutions",
    "about.intro": "Sou movida por entender como as coisas funcionam. Especialmente quando parecem confusas, fragmentadas ou mal explicadas.",
    "about.trajectory1": "Sempre me interessei pela estrutura por trás de cada tarefa: como sistemas se conectam, como decisões são tomadas e como os processos podem ser organizados de forma mais clara e eficiente.",
    "about.trajectory2": "Hoje, meu trabalho reflete exatamente isso.",
    "about.formation.title": "Formação e Trajetória",
    "about.formation.text1": "Minha primeira formação em Tradução e Interpretação me trouxe uma visão profunda sobre como traduzir ideias complexas, identificar ambiguidades e interpretar contextos.",
    "about.formation.text2": "Com a vivência em CS Ops, essa habilidade de \"interpretar\" saiu do campo linguístico e passou a atuar no campo técnico: traduzir problemas reais em soluções operacionais estruturadas.",
    "about.formation.text3": "O aprofundamento técnico ampliou essa perspectiva. Trabalhando diretamente com sistemas, integrações e dados em ambientes de alta performance, desenvolvi uma leitura prática sobre onde processos quebram, onde falhas de comunicação surgem e como decisões são impactadas pela falta de organização.",
    "about.connection.translation": "Aprendi a interpretar a linguagem, entender a transmissão de informações, identificar nuances e falhas de comunicação: conceitos que hoje aplico ao analisar sistemas e fluxos.",
    "about.connection.support": "Adquiri uma perspectiva real de como ferramentas são usadas na prática, das dores dos clientes na ponta do negócio e de como transformá-las em ações internas com stakeholders.",
    "about.connection.data": "Passei a estruturar conexões entre sistemas, organizar dados e automatizar processos com foco em previsibilidade e clareza.",
    "about.connection.cs": "Aprofundei fundamentos técnicos que sustentam minhas decisões, ampliando minha capacidade de criar alternativas mais robustas e escaláveis.",
    "about.vision": "A visão estratégica não surgiu de teoria isolada, mas da combinação entre prática, análise e estudo contínuo. Trabalhar na interseção entre operações e tecnologia me mostrou que soluções eficientes não nascem apenas de ferramentas, mas de entendimento sistêmico.",
    "about.positioning": "Atualmente, concentro meu trabalho em organizar complexidade por meio de dados, integrações e automação responsável. Acredito que tecnologia deve ampliar clareza, não gerar dependência. Processos precisam ser compreendidos antes de serem automatizados. Decisões sustentáveis nascem de informação estruturada e bem interpretada.",
    "about.description": "A ACH IT Solutions consolida a bagagem de Carolina Honório como especialista em tecnologia, integrações de dados e operações de produto, com foco em experiência do cliente.",
    "about.experience": "Experiência Profissional",
    "about.cta": "Conecte no LinkedIn",
    "about.exp.onelocal": "OneLocal — SaaS B2B de Marketing (Canadá)",
    "about.areas.onelocal": "Operações Técnicas & Produto | Integrações SaaS | Arquitetura de Dados",
    "about.exp.quintoandar": "QuintoAndar — Marketplace PropTech",
    "about.areas.quintoandar": "Estratégia Operacional | CX Orientado a Dados | Otimização de Processos",
    "about.exp.99": "99 — Plataforma de Mobilidade",
    "about.areas.99": "Operações Críticas | Análise de Incidentes | Melhoria Contínua",
    "about.exp.uber": "Uber — Plataforma Global de Mobilidade",
    "about.areas.uber": "Excelência Operacional | Sistemas de Conhecimento | Métricas de Performance",
    "about.exp.ifood": "iFood — Plataforma FoodTech",
    "about.areas.ifood": "Desenho de Processos | Operações B2B | Estruturação de Métrica",

    // Tech Stack
    "tech.title1": "Como eu",
    "tech.title2": "trabalho",
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
    "tech.tools.automation.expand": "Contexto de uso, tipo de automação e cuidado com soluções frágeis. Cada automação é pensada como parte de um sistema maior.",
    "tech.tools.support": "Support & Operations",
    "tech.tools.support.items": "Zendesk, Intercom, Twilio, SalesForce",
    "tech.tools.support.expand": "Organização de fluxos, visibilidade operacional e suporte como fonte de sinal para decisões de produto e negócio.",
    "tech.tools.data": "Data & Analytics",
    "tech.tools.data.items": "BigQuery, Mixpanel, Google Sheets, Looker Studio",
    "tech.tools.data.expand": "Estruturação de dados, fonte única de verdade e apoio à decisão com base em informações confiáveis e organizadas.",
    "tech.languages.title": "Linguagens",
    "tech.languages.intro": "Além de ferramentas, utilizo linguagens de programação para criar soluções mais flexíveis, robustas e adaptáveis ao contexto de cada projeto.",
    "tech.languages.items": "SQL, Python, R",
    "tech.languages.expand": "O uso de código permite ir além do no-code quando necessário, mantendo controle sobre lógica, dados e integrações.",

    // AI Section
    "ai.badge": "IA Aplicada",
    "ai.title1": "Inteligência Artificial como",
    "ai.title2": "Ferramenta Estratégica",
    "ai.subtitle": "Nunca como substituição do pensamento crítico, da análise de contexto ou da responsabilidade pelas decisões tomadas.",
    "ai.intro": "A IA entra no trabalho como um meio para ampliar capacidade, não para terceirizar julgamento humano. Ela é usada para acelerar etapas, identificar padrões, organizar informações e apoiar análises dentro de um processo estruturado, documentado e revisado.",
    "ai.criteria.title": "Cada uso faz parte de um fluxo maior, com critérios claros:",
    "ai.criteria.1": "O problema é compreendido antes da aplicação da ferramenta",
    "ai.criteria.2": "As etapas são documentadas",
    "ai.criteria.3": "Os resultados são avaliados de forma crítica",
    "ai.criteria.4": "Decisões finais permanecem humanas",
    "ai.closing": "Quando aplicada dessa forma, a IA se torna um recurso poderoso para reduzir trabalho repetitivo, enriquecer dados, apoiar leituras de cenário e melhorar eficiência — sem comprometer qualidade, ética ou responsabilidade.",
    "ai.hover.ethics.title": "Ética e responsabilidade",
    "ai.hover.ethics.text": "O uso envolve impacto real em processos e decisões. Por isso, priorizo aplicações que possam ser compreendidas, auditadas e justificadas.",
    "ai.hover.docs.title": "Documentação e processo",
    "ai.hover.docs.text": "Ao fazer parte de um fluxo, as etapas são registradas para garantir continuidade, entendimento e possibilidade de revisão futura.",
    "ai.hover.critical.title": "Pensamento crítico",
    "ai.hover.critical.text": "A IA apoia o raciocínio, mas não o substitui. Resultados são questionados, ajustados e contextualizados antes de qualquer decisão.",

    // Contact
    "contact.title1": "Vamos",
    "contact.title2": "conversar",
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
    "contact.github.label": "GitHub",
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
    "hero.badge": "Business Intelligence",
    "hero.headline1": "Operations,",
    "hero.headline2": "Data",
    "hero.headline3": "& Integrations",
    "hero.subheadline": "Helping transform complex environments into organized, efficient structures built for the long term.",
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
    "services.title2": "do",
    "services.intro": "The focus is on structuring systems and workflows, whether by improving what already exists or implementing what is necessary to support clearer and more efficient business decisions.",
    "services.dataeng.title": "Data Engineering",
    "services.dataeng.description": "Building pipelines, data modeling, standardization, and integrity to ensure reliability and visibility.",
    "services.dataeng.expand": "Layered data architecture (raw, clean, metrics), with clear standards and quality designed from the source. Transforming scattered data into a reliable operational foundation.",
    "services.integrations.title": "Integrations",
    "services.integrations.description": "Connecting systems, automating tasks, and reducing repetitive work to simplify operational routines.",
    "services.integrations.expand": "Building robust integrations with conditional filters, validations, webhooks, and APIs, along with exception handling to prevent silent failures. Low-code as a foundation, with advanced logic when necessary.",
    "services.automation.title": "Process Automation",
    "services.automation.description": "Structured operational workflows to reduce manual work, minimize errors, and increase predictability.",
    "services.automation.expand": "Designed as part of a broader system, avoiding fragile, isolated, or difficult-to-maintain solutions.",
    "services.systems.title": "Systems Structuring",
    "services.systems.description": "Organizing and customizing systems such as CRMs and internal tools to reflect real business processes.",
    "services.systems.expand": "The goal is to align operations, data, and teams, avoiding rework and information loss throughout the workflow.",
    "services.documentation.title": "Documentation & Standardization",
    "services.documentation.description": "Creating clear documentation and standardized processes to ensure continuity, scalability, and team autonomy.",
    "services.documentation.expand": "Documentation is part of the solution, not an optional step at the end of the project.",
    "services.workshops.title": "Workshops & Training",
    "services.workshops.description": "Workshops and training focused on data, automation, processes, and strategic use of tools.",
    "services.workshops.expand": "Content tailored to the team’s context, with a practical focus applicable to daily operations and real business challenges.",
    "services.method.title": "How these projects usually happen",
    "services.method.text": "Projects can take different formats, from specific interventions to more structural initiatives, but always start from a careful reading of context, existing systems, and objectives involved.",
    "services.method.expand": "It's not just about \"implementing\" — it's about understanding the impact of what's being built in the medium and long term.",
    "services.closing": "If you need to organize data, systems, and processes in a structured and responsible way, we can talk about the best path forward.",
    "services.cta": "Get in touch",

    // About
    "about.title1": "About",
    "about.title2": "ACH IT Solutions",
    "about.intro": "I am driven by understanding how things work. Especially when they seem confusing, fragmented, or poorly explained.",
    "about.trajectory1": "I have always been interested in the structure behind each task: how systems connect, how decisions are made, and how processes can be organized more clearly and efficiently.",
    "about.trajectory2": "Today, my work reflects exactly that.",
    "about.formation.title": "Education & Background",
    "about.formation.text1": "My first degree in Translation and Interpretation gave me a deep understanding of how to translate complex ideas, identify ambiguities, and interpret context.",
    "about.formation.text2": "Through my experience in CS Ops, this ability to \"interpret\" moved beyond the linguistic field into the technical one: translating real problems into structured operational solutions.",
    "about.formation.text3": "Further technical depth expanded this perspective. Working directly with systems, integrations, and data in high-performance environments, I developed a practical understanding of where processes break down, where communication gaps emerge, and how decisions are impacted by lack of structure.",
    "about.connection.translation": "I learned to interpret language, understand information flow, and identify nuances and communication gaps — concepts I now apply when analyzing systems and workflows.",
    "about.connection.support": "I gained a real-world perspective on how tools are used in practice, the challenges faced by customers at the operational edge, and how to translate those challenges into internal actions with stakeholders.",
    "about.connection.data": "I began structuring connections between systems, organizing data, and automating processes with a focus on predictability and clarity.",
    "about.connection.cs": "I deepened the technical foundations that support my decisions, expanding my ability to design more robust and scalable alternatives.",
    "about.vision": "My strategic perspective did not emerge from theory alone, but from the combination of hands-on experience, analysis, and continuous study. Working at the intersection of operations and technology showed me that efficient solutions are not born from tools alone, but from systemic understanding.",
    "about.positioning": "Today, I focus on organizing complexity through data, integrations, and responsible automation. I believe technology should increase clarity, not create dependency. Processes must be understood before they are automated. Sustainable decisions are built on structured and well-interpreted information.",
    "about.description": "ACH IT Solutions brings together Carolina Honório’s experience as a technology specialist in data integrations and product operations, with a strong focus on customer experience.",
    "about.experience": "Professional Experience",
    "about.cta": "Connect on LinkedIn",
    "about.exp.onelocal": "OneLocal — Canadian B2B Marketing SaaS",
    "about.areas.onelocal": "Technical & Product Operations | SaaS Integrations | Data Architecture",
    "about.exp.quintoandar": "QuintoAndar — Brazilian PropTech Marketplace",
    "about.areas.quintoandar": "Operational Strategy | Data-Driven CX | Process Optimization",
    "about.exp.99": "99 — Brazilian Mobility Platform",
    "about.areas.99": "Critical Operations | Incident Analysis | Continuous Improvement",
    "about.exp.uber": "Uber — Global Mobility Platform",
    "about.areas.uber": "Operational Excellence | Knowledge Systems | Performance Metrics",
    "about.exp.ifood": "iFood — Brazilian FoodTech Platform",
    "about.areas.ifood": "Process Design | B2B Operations | Performance Frameworks",

    // Tech Stack
    "tech.title1": "How I",
    "tech.title2": "work",
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
    "tech.tools.automation.expand": "Context of use, type of automation, and care with fragile solutions. Each automation is designed as part of a larger system.",
    "tech.tools.support": "Support & Operations",
    "tech.tools.support.items": "Zendesk, Intercom, Twilio, SalesForce",
    "tech.tools.support.expand": "Flow organization, operational visibility, and support as a signal source for product and business decisions.",
    "tech.tools.data": "Data & Analytics",
    "tech.tools.data.items": "BigQuery, Mixpanel, Google Sheets, Looker Studio",
    "tech.tools.data.expand": "Data structuring, single source of truth, and decision support based on reliable and organized information.",
    "tech.languages.title": "Languages",
    "tech.languages.intro": "Beyond tools, I use programming languages to create more flexible, robust, and adaptable solutions for each project's context.",
    "tech.languages.items": "SQL, Python, R",
    "tech.languages.expand": "Using code allows going beyond no-code when necessary, maintaining control over logic, data, and integrations.",

    // AI Section
    "ai.badge": "Applied AI",
    "ai.title1": "Artificial Intelligence as a",
    "ai.title2": "Strategic Tool",
    "ai.subtitle": "Never as a substitute for critical thinking, contextual analysis, or responsibility for the decisions made.",
    "ai.intro": "AI is integrated into the work as a way to expand capacity, not to outsource human judgment. It is used to accelerate steps, identify patterns, organize information, and support analysis within a structured, documented, and reviewed process.",
    "ai.criteria.title": "Each use is part of a broader workflow, guided by clear criteria:",
    "ai.criteria.1": "The problem is understood before applying the tool",
    "ai.criteria.2": "Steps are documented",
    "ai.criteria.3": "Results are critically evaluated",
    "ai.criteria.4": "Final decisions remain human",
    "ai.closing": "When applied this way, AI becomes a powerful resource to reduce repetitive work, enrich data, support scenario analysis, and improve efficiency — without compromising quality, ethics, or accountability.",
    "ai.hover.ethics.title": "Ethics & responsibility",
    "ai.hover.ethics.text": "Its use has real impact on processes and decisions. For that reason, I prioritize applications that can be understood, audited, and justified.",
    "ai.hover.docs.title": "Documentation & process",
    "ai.hover.docs.text": "As part of a structured workflow, steps are recorded to ensure continuity, clarity, and the possibility of future review.",
    "ai.hover.critical.title": "Critical thinking",
    "ai.hover.critical.text": "AI supports reasoning, but does not replace it. Outputs are questioned, adjusted, and contextualized before any decision is made.",

    // Contact
    "contact.title1": "Let's",
    "contact.title2": "talk",
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
    "contact.github.label": "GitHub",
    "contact.location.label": "Location",
    "contact.location.value": "Brazil",

    // Footer
    "footer.rights": "ACH IT Solutions",
    "footer.closing": "Regardless of the project format, our role is to help organize complexity with method, clarity, and responsibility."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const fromPath = getLanguageForPath(window.location.pathname);
      if (fromPath) return fromPath;
      const saved = localStorage.getItem("ach-language");
      if (saved === "pt" || saved === "en") return saved;
    }
    return "pt";
  });

  // Direct access to a localized section route defines the language.
  useEffect(() => {
    const fromPath = getLanguageForPath(pathname);
    if (fromPath && fromPath !== language) setLanguageState(fromPath);
  }, [pathname, language]);

  // Switching language also converts the current section route.
  const setLanguage = useCallback(
    (lang: Language) => {
      setLanguageState(lang);
      const equivalent = getEquivalentPath(pathname, lang);
      if (equivalent && equivalent !== pathname) {
        navigate(equivalent, { replace: true });
      }
    },
    [pathname, navigate],
  );

  const sectionPath = useCallback(
    (sectionId: string) => getSectionPath(sectionId, language),
    [language],
  );

  useEffect(() => {
    localStorage.setItem("ach-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content",
        language === "pt"
          ? "Arquitetura de integrações SaaS, automação e inteligência operacional orientada a dados. Estruturação de sistemas para operações digitais mais eficientes e escaláveis."
          : "SaaS integration architecture, automation and data-driven operational intelligence. Structuring systems for scalable and high-performance digital operations."
      );
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, sectionPath }}>
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
