import Image from "next/image"
import { CyberCard } from "@/components/cyber-card"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Carlos Silva",
      role: "CEO & Fundador",
      bio: "Com mais de 20 anos de experiência em TI, Carlos fundou a Infra com a visão de transformar a maneira como as empresas gerenciam sua infraestrutura tecnológica.",
      image: "/placeholder.svg?height=300&width=300&text=CS",
      color: "purple",
    },
    {
      name: "Ana Oliveira",
      role: "CTO",
      bio: "Especialista em cloud computing e arquitetura de sistemas, Ana lidera nossa equipe técnica e garante a excelência em todas as soluções implementadas.",
      image: "/placeholder.svg?height=300&width=300&text=AO",
      color: "blue",
    },
    {
      name: "Roberto Martins",
      role: "Diretor de Operações",
      bio: "Roberto supervisiona todas as operações da empresa, garantindo que nossos processos sejam eficientes e que os projetos sejam entregues no prazo e dentro do orçamento.",
      image: "/placeholder.svg?height=300&width=300&text=RM",
      color: "pink",
    },
    {
      name: "Juliana Costa",
      role: "Diretora Comercial",
      bio: "Com vasta experiência em vendas B2B, Juliana lidera nossa equipe comercial e desenvolve estratégias para expandir nossa presença no mercado.",
      image: "/placeholder.svg?height=300&width=300&text=JC",
      color: "green",
    },
    {
      name: "Marcos Pereira",
      role: "Gerente de Projetos",
      bio: "Certificado PMP, Marcos coordena nossos projetos mais complexos, garantindo que todas as etapas sejam executadas com precisão e qualidade.",
      image: "/placeholder.svg?height=300&width=300&text=MP",
      color: "yellow",
    },
    {
      name: "Fernanda Lima",
      role: "Especialista em Segurança",
      bio: "Com certificações CISSP e CEH, Fernanda lidera nossa área de segurança da informação, implementando soluções robustas para proteger os dados de nossos clientes.",
      image: "/placeholder.svg?height=300&width=300&text=FL",
      color: "purple",
    },
    {
      name: "Ricardo Gomes",
      role: "Arquiteto de Soluções Cloud",
      bio: "Especialista certificado em AWS, Azure e Google Cloud, Ricardo projeta arquiteturas em nuvem escaláveis e seguras para nossos clientes.",
      image: "/placeholder.svg?height=300&width=300&text=RG",
      color: "blue",
    },
    {
      name: "Patrícia Santos",
      role: "Gerente de Suporte",
      bio: "Patrícia lidera nossa equipe de suporte técnico, garantindo atendimento rápido e eficiente para todos os nossos clientes.",
      image: "/placeholder.svg?height=300&width=300&text=PS",
      color: "pink",
    },
  ]

  return (
    <div className="container mx-auto py-12 cyberpunk-grid">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-cyber-purple neon-text cyber-glitch" data-text="NOSSA EQUIPE">
          NOSSA EQUIPE
        </h1>
        <p className="text-xl text-cyber-blue max-w-3xl mx-auto">
          Conheça os profissionais dedicados que fazem da CYBERTECH uma empresa de excelência em soluções de TI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <CyberCard key={index} className="overflow-hidden" glowColor={member.color as any}>
            <div className="relative h-64 w-full mb-4 border-2 border-cyber-purple rounded-md overflow-hidden">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <h3 className={`text-xl font-bold text-cyber-${member.color}`}>{member.name}</h3>
            <p className="text-cyber-blue mb-3">{member.role}</p>
            <p className="text-gray-300">{member.bio}</p>
          </CyberCard>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-cyber-green neon-text">Junte-se à Nossa Equipe</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Estamos sempre em busca de talentos que compartilham nossa paixão por tecnologia e inovação.
        </p>
        <a
          href="/careers"
          className="relative inline-flex items-center justify-center font-bold uppercase tracking-wider border-2 transition-all duration-300 overflow-hidden bg-transparent border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black h-12 px-6 text-base before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-2 after:h-[2px] after:bg-white after:shadow-[0_0_10px_2px_rgba(162,0,255,0.8)] after:animate-cyber-pulse"
        >
          Ver Vagas Disponíveis
        </a>
      </div>
    </div>
  )
}

