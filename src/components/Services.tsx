import { motion } from "framer-motion";
import { Workflow, BarChart3, Headphones, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Workflow,
      title: t("services.integrations.title"),
      description: t("services.integrations.description")
    },
    {
      icon: BarChart3,
      title: t("services.data.title"),
      description: t("services.data.description")
    },
    {
      icon: Headphones,
      title: t("services.support.title"),
      description: t("services.support.description")
    },
    {
      icon: FileText,
      title: t("services.implementation.title"),
      description: t("services.implementation.description")
    }
  ];

  return (
    <section id="servicos" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            {t("services.title1")} <span className="gradient-text">{t("services.title2")}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-6 group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
