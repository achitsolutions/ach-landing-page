import { motion } from "framer-motion";
import { ArrowRight, Terminal, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackEvent } from "@/lib/gtag";

const Hero = () => {
  const { t } = useLanguage();

  const practiceItems = [
    t("hero.practice.items.1"),
    t("hero.practice.items.2"),
    t("hero.practice.items.3"),
    t("hero.practice.items.4"),
    t("hero.practice.items.5"),
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Grid pattern - hidden on mobile for perf */}
      <div 
        className="absolute inset-0 opacity-[0.03] hidden sm:block"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating glow orb - simplified on mobile (no animation, less blur) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-primary/10 blur-[60px] sm:blur-[120px] opacity-30 sm:hidden"
      />
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] hidden sm:block"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main hero area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="section-container pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm mb-8"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem] font-bold tracking-tight leading-[1.15] mb-6">
              {t("hero.headline1")}{" "}
              <span className="gradient-text">{t("hero.headline2")}</span>{" "}
              {t("hero.headline3")}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              {t("hero.subheadline")}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box group"
                onClick={() => {
                  trackEvent('contact_cta_click', { event_category: 'CTA', event_label: 'hero' });
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("hero.cta.secondary")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-border/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Context blocks below hero */}
      <div className="relative z-10 pb-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mt-8">
            {/* Context / Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-sm font-mono text-primary mb-3 uppercase tracking-wider">{t("hero.context.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("hero.context.text")}
              </p>
            </motion.div>

            {/* Positioning / Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-sm font-mono text-primary mb-3 uppercase tracking-wider">{t("hero.positioning.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("hero.positioning.text")}
              </p>
            </motion.div>
          </div>

          {/* In practice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mt-6"
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">{t("hero.practice.title")}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {practiceItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
