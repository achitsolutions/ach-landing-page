import { motion } from "framer-motion";

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "AWS", "Azure", 
  "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis",
  "Next.js", "TensorFlow", "OpenAI", "GraphQL", "Terraform"
];

const TechStack = () => {
  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Utilizamos as tecnologias mais modernas do mercado
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="tech-badge font-mono"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
