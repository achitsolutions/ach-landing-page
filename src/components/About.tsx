import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Mais de 10 anos de experiência em tecnologia",
  "Equipe certificada em cloud e segurança",
  "Metodologias ágeis e entregas contínuas",
  "Suporte técnico especializado 24/7"
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
              A ACH IT Solutions é uma empresa especializada em soluções 
              tecnológicas inovadoras. Combinamos expertise técnica com 
              visão estratégica para entregar projetos que fazem a diferença.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa missão é simplificar a tecnologia e torná-la acessível, 
              ajudando empresas de todos os portes a alcançarem seus objetivos 
              através de soluções digitais inteligentes e eficientes.
            </p>
            
            <div className="space-y-3">
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
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "50+", label: "Projetos Entregues" },
                    { value: "98%", label: "Satisfação dos Clientes" },
                    { value: "24/7", label: "Suporte Disponível" },
                    { value: "10+", label: "Anos de Experiência" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
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
