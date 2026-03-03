import { motion } from "framer-motion";
import { Linkedin, BookOpen, Eye, Code2, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ExpandableCard from "@/components/ExpandableCard";

const About = () => {
  const { language, t } = useLanguage();

  const experiences = [
    { companyKey: "about.exp.onelocal", areasKey: "about.areas.onelocal" },
    { companyKey: "about.exp.quintoandar", areasKey: "about.areas.quintoandar" },
    { companyKey: "about.exp.99", areasKey: "about.areas.99" },
    { companyKey: "about.exp.uber", areasKey: "about.areas.uber" },
    { companyKey: "about.exp.ifood", areasKey: "about.areas.ifood" },
  ];

  const connections = [
    {
      icon: BookOpen,
      label: language === "pt" ? "Tradução & Interpretação" : "Translation & Interpretation",
      textKey: "about.connection.translation",
    },
    {
      icon: Eye,
      label: language === "pt" ? "Suporte & Operações" : "Support & Operations",
      textKey: "about.connection.support",
    },
    {
      icon: Code2,
      label: language === "pt" ? "Dados & Automações" : "Data & Automations",
      textKey: "about.connection.data",
    },
    {
      icon: GraduationCap,
      label: language === "pt" ? "Ciência da Computação" : "Computer Science",
      textKey: "about.connection.cs",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            {t("about.title1")} <span className="gradient-text">{t("about.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Personal intro */}
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">
              {t("about.intro")}
            </p>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t("about.trajectory1")}
            </p>
            <p className="text-sm font-medium text-foreground mb-6">
              {t("about.trajectory2")}
            </p>

            {/* Formation */}
            <h3 className="text-lg font-semibold mb-3">{t("about.formation.title")}</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {t("about.formation.text1")}
            </p>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {t("about.formation.text2")}
            </p>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {t("about.formation.text3")}
            </p>

            {/* Connection steps - expandable */}
            <div className="space-y-3 mb-6">
              {connections.map((conn, index) => (
                <motion.div
                  key={conn.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ExpandableCard
                    className="p-3 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 transition-colors"
                    expandedContent={t(conn.textKey)}
                  >
                    <div className="flex items-center gap-3">
                      <conn.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{conn.label}</span>
                    </div>
                  </ExpandableCard>
                </motion.div>
              ))}
            </div>

            {/* Vision */}
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t("about.vision")}
            </p>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {t("about.positioning")}
            </p>

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

          {/* Right: Experience card (preserved layout) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {t("about.experience")}
                </h3>
                <p className="text-xs text-muted-foreground text-center mb-6">
                  {t("about.description")}
                </p>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.companyKey}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="p-2.5 rounded-lg bg-background/30 border border-border/30"
                    >
                      <span className="font-medium text-sm block">{t(exp.companyKey)}</span>
                      <span className="text-xs text-muted-foreground">{t(exp.areasKey)}</span>
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
