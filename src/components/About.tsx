import { motion } from "framer-motion";
import { CheckCircle2, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { language, t } = useLanguage();

  const highlights = language === "pt" ? [
    "Mais de 10 anos de experiência em tecnologia",
    "Vivência em empresas de grande escala e alta complexidade",
    "Foco em integrações, automação e eficiência operacional",
    "Abordagem técnica, direta e orientada a resultados"
  ] : [
    "Over 10 years of experience in technology",
    "Background in large-scale, high-complexity companies",
    "Focus on integrations, automation, and operational efficiency",
    "Technical, direct, and results-oriented approach"
  ];

  const experiences = language === "pt" ? [
    { company: "QuintoAndar", role: "Tecnologia & Operações" },
    { company: "iFood", role: "Suporte Técnico & Integrações" },
    { company: "Uber", role: "Operações & Processos" },
    { company: "99", role: "Tecnologia & Automação" }
  ] : [
    { company: "QuintoAndar", role: "Technology & Operations" },
    { company: "iFood", role: "Technical Support & Integrations" },
    { company: "Uber", role: "Operations & Processes" },
    { company: "99", role: "Technology & Automation" }
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">
              {language === "pt" ? "Sobre a" : "About"} <span className="gradient-text">ACH IT</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {language === "pt" 
                ? "A ACH IT Solutions consolida a experiência profissional de Carolina Honorio como especialista em tecnologia, integrações, automação e operações digitais."
                : "ACH IT Solutions represents the professional experience of Carolina Honorio as a specialist in technology, integrations, automation, and digital operations."}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("about.description")}
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://www.linkedin.com/in/carolinahonorio/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>{t("about.cta")}</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-6 text-center">
                  {t("about.title1")} {t("about.title2")}
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-border/30"
                    >
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-sm text-muted-foreground">{exp.role}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
