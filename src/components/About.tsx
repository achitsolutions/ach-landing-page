import { motion } from "framer-motion";
import { CheckCircle2, Linkedin } from "lucide-react";

const highlights = [
  "Mais de 10 anos de experiência em tecnologia",
  "Vivência em empresas de grande escala e alta complexidade",
  "Foco em integrações, automação e eficiência operacional",
  "Abordagem técnica, direta e orientada a resultados"
];

const About = () => {
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
              Sobre a <span className="gradient-text">ACH IT</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A ACH IT Solutions consolida a experiência profissional de Carolina Honorio 
              como especialista em tecnologia, integrações, automação e operações digitais.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ao longo de mais de uma década, atuei como profissional de tecnologia e 
              operações em empresas de grande escala e produtos digitais complexos, 
              incluindo QuintoAndar, iFood, Uber e 99. Essa vivência em ambientes de 
              alta complexidade técnica e operacional fundamenta o trabalho realizado 
              hoje pela ACH IT Solutions.
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
              <span>Ver perfil no LinkedIn</span>
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
                <h3 className="text-lg font-semibold mb-6 text-center">Experiência Profissional</h3>
                <div className="space-y-4">
                  {[
                    { company: "QuintoAndar", role: "Tecnologia & Operações" },
                    { company: "iFood", role: "Suporte Técnico & Integrações" },
                    { company: "Uber", role: "Operações & Processos" },
                    { company: "99", role: "Tecnologia & Automação" }
                  ].map((exp, index) => (
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
