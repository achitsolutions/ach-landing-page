import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { language, t } = useLanguage();
  
  const contactSchema = z.object({
    name: z.string().trim().min(1, language === "pt" ? "Nome é obrigatório" : "Name is required").max(100, language === "pt" ? "Nome muito longo" : "Name too long"),
    email: z.string().trim().email(language === "pt" ? "Email inválido" : "Invalid email").max(255, language === "pt" ? "Email muito longo" : "Email too long"),
    message: z.string().trim().min(1, language === "pt" ? "Mensagem é obrigatória" : "Message is required").max(1000, language === "pt" ? "Mensagem muito longa" : "Message too long")
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(t("contact.form.success"), {
      description: t("contact.form.success.description")
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            {t("contact.title1")} <span className="gradient-text">{t("contact.title2")}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{t("contact.email.label")}</h3>
                <a 
                  href="mailto:achitsolutions.co@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  achitsolutions.co@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/carolinahonorio/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  /in/carolinahonorio
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{t("contact.location.label")}</h3>
                <p className="text-sm text-muted-foreground">{t("contact.location.value")}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-4">
              <div>
                <Input
                  placeholder={t("contact.form.name.placeholder")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary/50"
                  maxLength={100}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t("contact.form.email.placeholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary/50"
                  maxLength={255}
                />
              </div>
              <div>
                <Textarea
                  placeholder={t("contact.form.message.placeholder")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary/50 min-h-[120px] resize-none"
                  maxLength={1000}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (language === "pt" ? "Enviando..." : "Sending...") 
                  : t("contact.form.submit")}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
