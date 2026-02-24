import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, Zap, Headphones, BarChart3, Code2 } from "lucide-react";
import ExpandableCard from "@/components/ExpandableCard";

const TechStack = () => {
  const { t } = useLanguage();

  const principles = [
    t("tech.approach.1"),
    t("tech.approach.2"),
    t("tech.approach.3"),
    t("tech.approach.4"),
  ];

  const toolCategories = [
    {
      icon: Zap,
      titleKey: "tech.tools.automation",
      itemsKey: "tech.tools.automation.items",
      expandKey: "tech.tools.automation.expand",
    },
    {
      icon: Headphones,
      titleKey: "tech.tools.support",
      itemsKey: "tech.tools.support.items",
      expandKey: "tech.tools.support.expand",
    },
    {
      icon: BarChart3,
      titleKey: "tech.tools.data",
      itemsKey: "tech.tools.data.items",
      expandKey: "tech.tools.data.expand",
    },
  ];

  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="section-title mb-4">
            {t("tech.title1")} <span className="gradient-text">{t("tech.title2")}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {t("tech.subtitle")}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          {t("tech.intro")}
        </motion.p>

        {/* Approach / Method */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">{t("tech.approach.title")}</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">{t("tech.approach.text")}</p>
          
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-3 p-3 rounded-lg glass-card"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{item}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center italic">
            {t("tech.approach.closing")}
          </p>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-xl font-semibold mb-3 text-center">{t("tech.tools.title")}</h3>
          <p className="text-sm text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            {t("tech.tools.intro")}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {toolCategories.map((cat, index) => (
              <motion.div
                key={cat.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-5 group"
              >
                <ExpandableCard
                  expandedContent={t(cat.expandKey)}
                >
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <cat.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{t(cat.titleKey)}</h4>
                  <div className="flex flex-wrap gap-2">
                    {t(cat.itemsKey).split(", ").map((tool) => (
                      <span key={tool} className="tech-badge text-xs !px-3 !py-1 font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </ExpandableCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-xl p-6">
            <ExpandableCard
              expandedContent={t("tech.languages.expand")}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{t("tech.languages.title")}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t("tech.languages.intro")}
              </p>
              <div className="flex flex-wrap gap-3">
                {t("tech.languages.items").split(", ").map((lang) => (
                  <span key={lang} className="tech-badge font-mono">
                    {lang}
                  </span>
                ))}
              </div>
            </ExpandableCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
