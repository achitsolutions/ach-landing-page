import { motion } from "framer-motion";
import { Code2, Cloud, Brain, Shield, Cog } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    description: "Aplicações web e mobile customizadas, APIs robustas e sistemas escaláveis para atender suas necessidades específicas."
  },
  {
    icon: Cloud,
    title: "Infraestrutura Cloud",
    description: "Migração, arquitetura e gerenciamento de ambientes cloud com AWS, Azure e Google Cloud Platform."
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Implementação de soluções de IA, machine learning e automação inteligente para otimizar processos."
  },
  {
    icon: Shield,
    title: "Segurança & Compliance",
    description: "Proteção de dados, auditorias de segurança e adequação a regulamentações como LGPD."
  },
  {
    icon: Cog,
    title: "Consultoria Técnica",
    description: "Análise de arquitetura, revisão de código e mentoria técnica para times de desenvolvimento."
  }
];

const Services = () => {
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
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Soluções completas de tecnologia para transformar sua empresa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
