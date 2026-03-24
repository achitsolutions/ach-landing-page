import { useLanguage } from "@/contexts/LanguageContext";
import { Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="section-container py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">ACH IT Solutions</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => setLanguage("pt")}
                className={`px-2 py-1 rounded transition-colors ${
                  language === "pt"
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                PT
              </button>
              <span className="text-border">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded transition-colors ${
                  language === "en"
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {language === "pt" ? "← Voltar" : "← Back"}
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="section-container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-title mb-2">
            {language === "pt" ? "Política de Privacidade" : "Privacy Policy"}
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            {language === "pt"
              ? "Última atualização: Março de 2026"
              : "Last updated: March 2026"}
          </p>

          {language === "pt" ? <ContentPT /> : <ContentEN />}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-semibold">ACH IT Solutions</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ACH IT Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold mt-10 mb-4">{children}</h2>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-1 pl-2">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const ContentPT = () => (
  <>
    <Paragraph>
      A ACH IT Solutions ("nós") valoriza a privacidade dos visitantes deste site. Esta política descreve de forma clara e objetiva quais dados são coletados, por que são coletados e como são utilizados.
    </Paragraph>
    <Paragraph>
      Este site não possui área de login, contas de usuário, rastreamento publicitário ou compartilhamento de dados para fins de marketing. O tratamento de dados pessoais segue os princípios da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
    </Paragraph>

    <SectionHeading>1. Dados coletados</SectionHeading>

    <h3 className="text-base font-medium mt-6 mb-2">1.1 Dados de navegação (Analytics)</h3>
    <Paragraph>
      Utilizamos o Google Analytics (GA4) para coletar dados anônimos de navegação, incluindo:
    </Paragraph>
    <List
      items={[
        "Páginas visitadas",
        "Tipo de dispositivo e navegador",
        "Localização aproximada (país/região)",
        "Tempo de permanência e padrões de navegação",
      ]}
    />
    <Paragraph>
      Esses dados são anonimizados e utilizados exclusivamente para compreender o uso do site e melhorar sua estrutura e conteúdo.
    </Paragraph>

    <h3 className="text-base font-medium mt-6 mb-2">1.2 Dados do formulário de contato</h3>
    <Paragraph>
      Ao preencher o formulário de contato, coletamos:
    </Paragraph>
    <List items={["Nome", "Endereço de e-mail", "Conteúdo da mensagem"]} />
    <Paragraph>
      Esses dados são utilizados exclusivamente para responder à sua solicitação e estabelecer contato profissional.
    </Paragraph>

    <SectionHeading>2. Finalidade do uso dos dados</SectionHeading>
    <List
      items={[
        "Dados de navegação: análise de uso do site, melhoria de estrutura e conteúdo",
        "Dados de contato: responder a solicitações e viabilizar comunicação profissional",
      ]}
    />
    <Paragraph>
      Não utilizamos dados para fins publicitários, de marketing ou de venda a terceiros.
    </Paragraph>

    <SectionHeading>3. Compartilhamento de dados</SectionHeading>
    <Paragraph>
      Os dados coletados não são vendidos, alugados ou compartilhados com terceiros, exceto com o provedor de analytics (Google Analytics), que processa dados de navegação de forma anonimizada conforme suas próprias políticas de privacidade.
    </Paragraph>

    <SectionHeading>4. Retenção de dados</SectionHeading>
    <Paragraph>
      Os dados do formulário de contato são mantidos pelo período necessário para atender à solicitação, sendo excluídos após um prazo razoável ou mediante solicitação do titular. Os dados de analytics são retidos conforme as configurações padrão do Google Analytics.
    </Paragraph>

    <SectionHeading>5. Direitos do titular dos dados</SectionHeading>
    <Paragraph>
      De acordo com a LGPD, você tem direito a:
    </Paragraph>
    <List
      items={[
        "Solicitar acesso aos seus dados pessoais",
        "Solicitar a correção de dados incompletos ou incorretos",
        "Solicitar a exclusão dos seus dados pessoais",
        "Revogar o consentimento para o uso dos dados",
        "Solicitar informações sobre o tratamento dos seus dados",
      ]}
    />
    <Paragraph>
      Para exercer qualquer um desses direitos, entre em contato pelo e-mail indicado abaixo.
    </Paragraph>

    <SectionHeading>6. Cookies</SectionHeading>
    <Paragraph>
      Este site utiliza cookies do Google Analytics para fins de análise de uso. Não utilizamos cookies para fins de publicidade, remarketing ou rastreamento comportamental.
    </Paragraph>

    <SectionHeading>7. Contato</SectionHeading>
    <Paragraph>
      Para dúvidas, solicitações ou exercício dos seus direitos relacionados a dados pessoais:
    </Paragraph>
    <div className="glass-card rounded-lg p-6 mt-2 mb-4">
      <p className="text-foreground font-medium">ACH IT Solutions</p>
      <p className="text-muted-foreground text-sm mt-1">CNPJ: 56.202.848/0001-58</p>
      <p className="text-muted-foreground text-sm">
        E-mail:{" "}
        <a href="mailto:achitsolutions.co@gmail.com" className="text-primary hover:underline">
          achitsolutions.co@gmail.com
        </a>
      </p>
    </div>
  </>
);

const ContentEN = () => (
  <>
    <Paragraph>
      ACH IT Solutions ("we") values the privacy of visitors to this website. This policy describes clearly and objectively what data is collected, why it is collected, and how it is used.
    </Paragraph>
    <Paragraph>
      This website does not have login areas, user accounts, advertising tracking, or data sharing for marketing purposes. Personal data processing follows the principles of Brazil's General Data Protection Law (LGPD — Law No. 13,709/2018).
    </Paragraph>

    <SectionHeading>1. Data collected</SectionHeading>

    <h3 className="text-base font-medium mt-6 mb-2">1.1 Browsing data (Analytics)</h3>
    <Paragraph>
      We use Google Analytics (GA4) to collect anonymous browsing data, including:
    </Paragraph>
    <List
      items={[
        "Pages visited",
        "Device type and browser",
        "Approximate location (country/region)",
        "Time spent and browsing patterns",
      ]}
    />
    <Paragraph>
      This data is anonymized and used exclusively to understand site usage and improve its structure and content.
    </Paragraph>

    <h3 className="text-base font-medium mt-6 mb-2">1.2 Contact form data</h3>
    <Paragraph>
      When you fill out the contact form, we collect:
    </Paragraph>
    <List items={["Name", "Email address", "Message content"]} />
    <Paragraph>
      This data is used exclusively to respond to your inquiry and establish professional contact.
    </Paragraph>

    <SectionHeading>2. Purpose of data use</SectionHeading>
    <List
      items={[
        "Browsing data: site usage analysis, structure and content improvement",
        "Contact data: responding to inquiries and enabling professional communication",
      ]}
    />
    <Paragraph>
      We do not use data for advertising, marketing, or sale to third parties.
    </Paragraph>

    <SectionHeading>3. Data sharing</SectionHeading>
    <Paragraph>
      Collected data is not sold, rented, or shared with third parties, except with the analytics provider (Google Analytics), which processes browsing data in anonymized form according to its own privacy policies.
    </Paragraph>

    <SectionHeading>4. Data retention</SectionHeading>
    <Paragraph>
      Contact form data is retained for the period necessary to fulfill the request and deleted after a reasonable timeframe or upon the data subject's request. Analytics data is retained according to Google Analytics' default settings.
    </Paragraph>

    <SectionHeading>5. Data subject rights</SectionHeading>
    <Paragraph>
      In accordance with the LGPD, you have the right to:
    </Paragraph>
    <List
      items={[
        "Request access to your personal data",
        "Request correction of incomplete or inaccurate data",
        "Request deletion of your personal data",
        "Revoke consent for data use",
        "Request information about how your data is processed",
      ]}
    />
    <Paragraph>
      To exercise any of these rights, please contact us at the email address below.
    </Paragraph>

    <SectionHeading>6. Cookies</SectionHeading>
    <Paragraph>
      This website uses Google Analytics cookies for usage analysis purposes. We do not use cookies for advertising, remarketing, or behavioral tracking.
    </Paragraph>

    <SectionHeading>7. Contact</SectionHeading>
    <Paragraph>
      For questions, requests, or to exercise your rights regarding personal data:
    </Paragraph>
    <div className="glass-card rounded-lg p-6 mt-2 mb-4">
      <p className="text-foreground font-medium">ACH IT Solutions</p>
      <p className="text-muted-foreground text-sm mt-1">CNPJ: 56.202.848/0001-58</p>
      <p className="text-muted-foreground text-sm">
        Email:{" "}
        <a href="mailto:achitsolutions.co@gmail.com" className="text-primary hover:underline">
          achitsolutions.co@gmail.com
        </a>
      </p>
    </div>
  </>
);

export default PrivacyPolicy;
