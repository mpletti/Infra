import { CyberButton } from "@/components/cyber-button"
import { CyberCard } from "@/components/cyber-card"
import { Badge } from "@/components/ui/badge"

export default function CareersPage() {
  const openings = [
    {
      title: "Especialista em Cloud Computing",
      department: "Tecnologia",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description:
        "Estamos buscando um especialista em Cloud Computing com experiência em AWS, Azure e/ou Google Cloud para projetar e implementar soluções em nuvem para nossos clientes.",
      color: "purple",
    },
    {
      title: "Analista de Segurança da Informação",
      department: "Segurança",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description:
        "Procuramos um analista de segurança da informação para identificar vulnerabilidades, implementar controles de segurança e garantir a proteção dos dados de nossos clientes.",
      color: "blue",
    },
    {
      title: "Gerente de Projetos de TI",
      department: "Projetos",
      location: "Rio de Janeiro, RJ",
      type: "Tempo Integral",
      description:
        "Buscamos um gerente de projetos experiente para liderar implementações de infraestrutura de TI, garantindo que os projetos sejam entregues no prazo e dentro do orçamento.",
      color: "pink",
    },
    {
      title: "Engenheiro de Redes",
      department: "Infraestrutura",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description:
        "Estamos contratando um engenheiro de redes para projetar, implementar e manter infraestruturas de rede para nossos clientes corporativos.",
      color: "green",
    },
    {
      title: "Especialista em DevOps",
      department: "Tecnologia",
      location: "Remoto",
      type: "Tempo Integral",
      description:
        "Procuramos um especialista em DevOps com experiência em automação, CI/CD, containers e orquestração para melhorar nossos processos de desenvolvimento e implantação.",
      color: "yellow",
    },
    {
      title: "Consultor de TI",
      department: "Consultoria",
      location: "Belo Horizonte, MG",
      type: "Tempo Integral",
      description:
        "Buscamos um consultor de TI para assessorar nossos clientes em decisões estratégicas relacionadas à infraestrutura tecnológica e transformação digital.",
      color: "purple",
    },
  ]

  const benefits = [
    "Plano de saúde e odontológico",
    "Vale refeição e alimentação",
    "Seguro de vida",
    "Auxílio creche",
    "Gympass",
    "Horário flexível",
    "Home office parcial",
    "Programa de participação nos lucros",
    "Plano de carreira estruturado",
    "Cursos e certificações",
  ]

  return (
    <div className="container mx-auto py-12 cyberpunk-grid">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-cyber-purple neon-text cyber-glitch" data-text="CARREIRAS">
          CARREIRAS
        </h1>
        <p className="text-xl text-cyber-blue max-w-3xl mx-auto">
          Junte-se à nossa equipe e faça parte de uma empresa inovadora e em constante crescimento.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-cyber-green neon-text">Por que trabalhar na CYBERTECH?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CyberCard glowColor="purple">
            <h3 className="text-xl font-bold mb-3 text-cyber-purple">Inovação Constante</h3>
            <p className="text-gray-300">
              Trabalhamos com as tecnologias mais recentes e incentivamos a inovação em todos os níveis da empresa.
            </p>
          </CyberCard>
          <CyberCard glowColor="blue">
            <h3 className="text-xl font-bold mb-3 text-cyber-blue">Desenvolvimento Profissional</h3>
            <p className="text-gray-300">
              Oferecemos oportunidades de crescimento, treinamentos e certificações para nossos colaboradores.
            </p>
          </CyberCard>
          <CyberCard glowColor="pink">
            <h3 className="text-xl font-bold mb-3 text-cyber-pink">Ambiente Colaborativo</h3>
            <p className="text-gray-300">
              Valorizamos o trabalho em equipe e mantemos um ambiente de trabalho positivo e colaborativo.
            </p>
          </CyberCard>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-cyber-blue neon-text">Benefícios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-black/50 p-4 rounded-md border-2 border-cyber-purple text-center">
              <p className="font-medium text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-cyber-pink neon-text">Vagas Disponíveis</h2>
        <div className="space-y-6">
          {openings.map((job, index) => (
            <CyberCard key={index} glowColor={job.color as any}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`text-2xl font-bold mb-1 text-cyber-${job.color}`}>{job.title}</h3>
                  <p className="text-cyber-blue">{job.department}</p>
                </div>
                <Badge className={`bg-cyber-${job.color} text-black`}>{job.type}</Badge>
              </div>
              <p className="text-gray-300 my-4">{job.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-gray-400">Localização: {job.location}</p>
                <CyberButton variant={index % 3 === 0 ? "default" : index % 3 === 1 ? "outline" : "destructive"}>
                  Candidatar-se
                </CyberButton>
              </div>
            </CyberCard>
          ))}
        </div>
      </div>
    </div>
  )
}

