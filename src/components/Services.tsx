import { motion } from "framer-motion";
import { Database, Workflow, Settings, FileText, GraduationCap, ArrowRight, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Database,
      titleKey: "services.data.title",
      descKey: "services.data.description",
      hoverKey: "services.data.hover",
    },
    {
      icon: Workflow,
      titleKey: "services.automation.title",
      descKey: "services.automation.description",
      hoverKey: "services.automation.hover",
    },
    {
      icon: Settings,
      titleKey: "services.systems.title",
      descKey: "services.systems.description",
      hoverKey: "services.systems.hover",
    },
    {
      icon: FileText,
      titleKey: "services.documentation.title",
      descKey: "services.documentation.description",
      hoverKey: "services.documentation.hover",
    },
    {
      icon: GraduationCap,
      titleKey: "services.workshops.title",
      descKey: "services.workshops.description",
      hoverKey: "services.workshops.hover",
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
            {t("services.subtitle")}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        >
          {t("services.intro")}
        </motion.p>

        {/* Service cards - top row 3, bottom row 2 centered */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.titleKey} service={service} index={index} t={t} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold mb-2">{t("services.method.title")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("services.method.text")}
                </p>
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 mt-1">
                    <Info className="w-4 h-4" />
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-72 text-sm">
                  {t("services.method.hover")}
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
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
    className="glass-card rounded-xl p-6 group cursor-default"
  >
    <div className="flex items-start justify-between gap-3 mb-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <service.icon className="w-6 h-6 text-primary" />
      </div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="text-muted-foreground/50 hover:text-primary transition-colors mt-1">
            <Info className="w-4 h-4" />
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-72 text-sm">
          {t(service.hoverKey)}
        </HoverCardContent>
      </HoverCard>
    </div>
    <h3 className="text-xl font-semibold mb-2">{t(service.titleKey)}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {t(service.descKey)}
    </p>
  </motion.div>
);

export default Services;
