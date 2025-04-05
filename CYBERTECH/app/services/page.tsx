import { CyberButton } from "@/components/cyber-button"
import { CyberCard } from "@/components/cyber-card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  const services = [
    {
      title: "Infraestrutura de Rede",
      description: "Implementação e gerenciamento de redes corporativas",
      details:
        "Oferecemos serviços completos de infraestrutura de rede, incluindo projeto, implementação, monitoramento e manutenção. Nossas soluções garantem alta disponibilidade, segurança e desempenho para sua empresa.",
      badge: "Popular",
      color: "purple",
    },
    {
      title: "Cloud Computing",
      description: "Migração e gerenciamento de ambientes em nuvem",
      details:
        "Ajudamos sua empresa a migrar para a nuvem ou otimizar seu ambiente atual. Trabalhamos com os principais provedores como AWS, Azure e Google Cloud para oferecer a melhor solução para seu negócio.",
      badge: "Recomendado",
      color: "blue",
    },
    {
      title: "Segurança da Informação",
      description: "Proteção de dados e sistemas contra ameaças",
      details:
        "Nossa equipe de especialistas em segurança implementa soluções robustas para proteger seus dados e sistemas contra ameaças cibernéticas, garantindo a continuidade dos negócios e a conformidade com regulamentações.",
      badge: "Essencial",
      color: "pink",
    },
    {
      title: "Consultoria em TI",
      description: "Assessoria estratégica para decisões tecnológicas",
      details:
        "Oferecemos consultoria especializada para ajudar sua empresa a tomar as melhores decisões tecnológicas, alinhadas aos objetivos de negócio e com foco em resultados.",
      badge: "Estratégico",
      color: "green",
    },
    {
      title: "Suporte Técnico",
      description: "Atendimento especializado para resolução de problemas",
      details:
        "Nossa equipe de suporte técnico está disponível 24/7 para resolver problemas e garantir o funcionamento adequado da sua infraestrutura de TI.",
      badge: "24/7",
      color: "yellow",
    },
    {
      title: "Virtualização",
      description: "Otimização de recursos através de ambientes virtuais",
      details:
        "Implementamos soluções de virtualização que permitem otimizar recursos, reduzir custos e aumentar a flexibilidade da sua infraestrutura de TI.",
      badge: "Eficiência",
      color: "purple",
    },
  ]

  return (
    <div className="container mx-auto py-12 cyberpunk-grid">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-cyber-purple neon-text cyber-glitch" data-text="NOSSOS SERVIÇOS">
          NOSSOS SERVIÇOS
        </h1>
        <p className="text-xl text-cyber-blue max-w-3xl mx-auto">
          Oferecemos uma ampla gama de serviços de infraestrutura de TI para empresas que buscam o próximo nível
          tecnológico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <CyberCard key={index} className="h-full flex flex-col" glowColor={service.color as any}>
            <div className="flex justify-between items-start">
              <h2 className={`text-2xl font-bold mb-2 text-cyber-${service.color}`}>{service.title}</h2>
              <Badge className={`bg-cyber-${service.color} text-black`}>{service.badge}</Badge>
            </div>
            <p className="text-gray-400 mb-2">{service.description}</p>
            <p className="text-gray-300 mb-6 flex-grow">{service.details}</p>
            <CyberButton variant={index % 3 === 0 ? "default" : index % 3 === 1 ? "outline" : "destructive"}>
              Solicitar Orçamento
            </CyberButton>
          </CyberCard>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyber-blue neon-text">Precisa de uma solução personalizada?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Entre em contato conosco para discutirmos como podemos atender às necessidades específicas da sua empresa.
        </p>
        <CyberButton size="lg" href="/contact">
          Fale Conosco
        </CyberButton>
      </div>
    </div>
  )
}

