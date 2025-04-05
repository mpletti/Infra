import Image from "next/image"
import { CyberCard } from "@/components/cyber-card"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 cyberpunk-grid">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-cyber-purple neon-text cyber-glitch" data-text="SOBRE A CYBERTECH">
          SOBRE A CYBERTECH
        </h1>
        <p className="text-xl text-cyber-blue max-w-3xl mx-auto">
          Somos especialistas em infraestrutura de TI, dedicados a fornecer soluções inovadoras e confiáveis para
          empresas de todos os tamanhos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-cyber-green neon-text">Nossa História</h2>
          <p className="text-gray-300 mb-4">
            Fundada em 2010, a CYBERTECH nasceu da visão de um grupo de profissionais de TI que identificaram a
            necessidade de soluções de infraestrutura mais eficientes e personalizadas no mercado brasileiro.
          </p>
          <p className="text-gray-300 mb-4">
            Ao longo dos anos, expandimos nossa atuação e hoje somos referência em soluções de infraestrutura de TI,
            cloud computing e segurança da informação, atendendo clientes em todo o Brasil.
          </p>
          <p className="text-gray-300">
            Nossa trajetória é marcada por inovação constante, compromisso com a excelência e foco nas necessidades
            específicas de cada cliente.
          </p>
        </div>
        <div className="relative h-80 w-full rounded-md overflow-hidden border-2 border-cyber-purple neon-border">
          <Image
            src="/placeholder.svg?height=400&width=600&text=CYBER TEAM"
            alt="Nossa equipe"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyber-pink neon-text">Nossos Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CyberCard glowColor="purple">
            <h3 className="text-xl font-bold mb-3 text-cyber-purple">Inovação</h3>
            <p className="text-gray-300">
              Buscamos constantemente novas tecnologias e abordagens para oferecer as melhores soluções aos nossos
              clientes.
            </p>
          </CyberCard>
          <CyberCard glowColor="blue">
            <h3 className="text-xl font-bold mb-3 text-cyber-blue">Excelência</h3>
            <p className="text-gray-300">
              Comprometemo-nos com a qualidade em tudo o que fazemos, desde o atendimento ao cliente até a implementação
              técnica.
            </p>
          </CyberCard>
          <CyberCard glowColor="pink">
            <h3 className="text-xl font-bold mb-3 text-cyber-pink">Confiabilidade</h3>
            <p className="text-gray-300">
              Construímos relacionamentos duradouros baseados em confiança, transparência e resultados consistentes.
            </p>
          </CyberCard>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyber-blue neon-text">Nossos Números</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-black/50 border-2 border-cyber-purple rounded-md neon-border">
            <div className="text-4xl font-bold text-cyber-purple mb-2 neon-text">+500</div>
            <div className="text-gray-300">Clientes Atendidos</div>
          </div>
          <div className="p-6 bg-black/50 border-2 border-cyber-blue rounded-md neon-border">
            <div className="text-4xl font-bold text-cyber-blue mb-2 neon-text">+1000</div>
            <div className="text-gray-300">Projetos Concluídos</div>
          </div>
          <div className="p-6 bg-black/50 border-2 border-cyber-pink rounded-md neon-border">
            <div className="text-4xl font-bold text-cyber-pink mb-2 neon-text">50+</div>
            <div className="text-gray-300">Especialistas</div>
          </div>
          <div className="p-6 bg-black/50 border-2 border-cyber-green rounded-md neon-border">
            <div className="text-4xl font-bold text-cyber-green mb-2 neon-text">13</div>
            <div className="text-gray-300">Anos de Experiência</div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-center text-cyber-green neon-text">Nossos Parceiros</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-center">
              <div className="relative w-[160px] h-[80px] border-2 border-cyber-purple rounded-md overflow-hidden neon-border">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=CYBER PARTNER ${i}`}
                  alt={`Parceiro ${i}`}
                  width={160}
                  height={80}
                  className="invert"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

