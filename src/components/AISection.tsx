import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Shield, FileText, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ExpandableCard from "@/components/ExpandableCard";

const AISection = () => {
  const { t } = useLanguage();

  const criteria = [
    t("ai.criteria.1"),
    t("ai.criteria.2"),
    t("ai.criteria.3"),
    t("ai.criteria.4"),
  ];

  const principleCards = [
    { icon: Shield, titleKey: "ai.hover.ethics.title", textKey: "ai.hover.ethics.text" },
    { icon: FileText, titleKey: "ai.hover.docs.title", textKey: "ai.hover.docs.text" },
    { icon: Brain, titleKey: "ai.hover.critical.title", textKey: "ai.hover.critical.text" },
  ];

  return (
    <section id="ia" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("ai.badge")}</span>
          </div>
          <h2 className="section-title mb-4">
            {t("ai.title1")} <span className="gradient-text">{t("ai.title2")}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {t("ai.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground leading-relaxed text-center mb-10"
          >
            {t("ai.intro")}
          </motion.p>

          {/* Criteria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-6 mb-8"
          >
            <h3 className="font-semibold text-sm mb-4">{t("ai.criteria.title")}</h3>
            <div className="space-y-3">
              {criteria.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Principle cards - expandable */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {principleCards.map((card, index) => (
              <motion.div
                key={card.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-4 group"
              >
                <ExpandableCard
                  expandedContent={t(card.textKey)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <card.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-sm font-medium">{t(card.titleKey)}</h4>
                  </div>
                </ExpandableCard>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground leading-relaxed text-center"
          >
            {t("ai.closing")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AISection;
