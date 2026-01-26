import { motion } from "framer-motion";
import { Sparkles, Tag, FileText, PenTool, Zap } from "lucide-react";

const aiFeatures = [
  {
    icon: Tag,
    title: "Classificação & Priorização",
    description: "Triagem inteligente de tickets, leads e demandas operacionais"
  },
  {
    icon: FileText,
    title: "Sumarização de Dados",
    description: "Síntese de feedbacks, relatórios e informações operacionais"
  },
  {
    icon: PenTool,
    title: "Apoio à Escrita Técnica",
    description: "Suporte na criação de respostas, documentação e comunicações"
  },
  {
    icon: Zap,
    title: "Automação com LLMs",
    description: "Integração de modelos prontos a processos e fluxos existentes"
  }
];

const AISection = () => {
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
            <span className="text-sm font-medium text-primary">IA como Ferramenta</span>
          </div>
          <h2 className="section-title mb-4">
            IA na <span className="gradient-text">Prática</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Utilização de inteligência artificial como apoio operacional e eficiência,
            integrada a processos existentes
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
