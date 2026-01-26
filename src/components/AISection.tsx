import { motion } from "framer-motion";
import { Sparkles, Tag, FileText, PenTool, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AISection = () => {
  const { t } = useLanguage();

  const aiFeatures = [
    {
      icon: Tag,
      title: t("ai.classification.title"),
      description: t("ai.classification.description")
    },
    {
      icon: FileText,
      title: t("ai.summarization.title"),
      description: t("ai.summarization.description")
    },
    {
      icon: PenTool,
      title: t("ai.writing.title"),
      description: t("ai.writing.description")
    },
    {
      icon: Zap,
      title: t("ai.automation.title"),
      description: t("ai.automation.description")
    }
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-5 rounded-xl glass-card group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
