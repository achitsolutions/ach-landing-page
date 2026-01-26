import { motion } from "framer-motion";
import { Sparkles, Zap, TrendingUp, MessageSquare, FileSearch } from "lucide-react";

const aiFeatures = [
  {
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    description: "Atendimento automatizado 24/7 com processamento de linguagem natural"
  },
  {
    icon: FileSearch,
    title: "Análise de Documentos",
    description: "Extração e processamento inteligente de informações de documentos"
  },
  {
    icon: TrendingUp,
    title: "Previsões & Analytics",
    description: "Modelos preditivos para tomada de decisão baseada em dados"
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description: "Workflows inteligentes que aprendem e se adaptam"
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
            <span className="text-sm font-medium text-primary">Powered by AI</span>
          </div>
          <h2 className="section-title mb-4">
            IA na <span className="gradient-text">Prática</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Implementamos soluções de inteligência artificial que geram valor real
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
