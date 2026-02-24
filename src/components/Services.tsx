import { motion } from "framer-motion";
import { Database, Workflow, Settings, FileText, GraduationCap, ArrowRight, Link2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import ExpandableCard from "@/components/ExpandableCard";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Database,
      titleKey: "services.dataeng.title",
      descKey: "services.dataeng.description",
      expandKey: "services.dataeng.expand",
    },
    {
      icon: Link2,
      titleKey: "services.integrations.title",
      descKey: "services.integrations.description",
      expandKey: "services.integrations.expand",
    },
    {
      icon: Workflow,
      titleKey: "services.automation.title",
      descKey: "services.automation.description",
      expandKey: "services.automation.expand",
    },
    {
      icon: Settings,
      titleKey: "services.systems.title",
      descKey: "services.systems.description",
      expandKey: "services.systems.expand",
    },
    {
      icon: FileText,
      titleKey: "services.documentation.title",
      descKey: "services.documentation.description",
      expandKey: "services.documentation.expand",
    },
    {
      icon: GraduationCap,
      titleKey: "services.workshops.title",
      descKey: "services.workshops.description",
      expandKey: "services.workshops.expand",
    },
  ];

  return (
    <section id="servicos" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="section-title mb-4">
            {t("services.title1")} <span className="gradient-text">{t("services.title2")}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {t("services.intro")}
          </p>
        </motion.div>

        {/* Service cards - top row 3, bottom row 3 */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.titleKey} service={service} index={index} t={t} />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(3).map((service, index) => (
              <ServiceCard key={service.titleKey} service={service} index={index + 3} t={t} />
            ))}
          </div>
        </div>

        {/* Method block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-12"
        >
          <ExpandableCard
            className="glass-card rounded-xl p-6"
            expandedContent={t("services.method.expand")}
          >
            <div>
              <h3 className="font-semibold mb-2">{t("services.method.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("services.method.text")}
              </p>
            </div>
          </ExpandableCard>
        </motion.div>

        {/* Closing + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t("services.closing")}
          </p>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t("services.cta")}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, t }: { service: any; index: number; t: (key: string) => string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="glass-card rounded-xl p-6 group"
  >
    <ExpandableCard
      expandedContent={t(service.expandKey)}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <service.icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{t(service.titleKey)}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {t(service.descKey)}
      </p>
    </ExpandableCard>
  </motion.div>
);

export default Services;
