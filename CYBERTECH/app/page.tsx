import { CyberButton } from "@/components/cyber-button"
import { CyberCard } from "@/components/cyber-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 cyberpunk-grid">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-cyber-purple bg-black/80 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Bem-vindo ao&nbsp;
          <code className="font-mono font-bold text-cyber-purple neon-text cyber-glitch" data-text="CYBERTECH">
            CYBERTECH
          </code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/* Espaço reservado para manter o layout */}
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-cyber-purple/20 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-cyber-blue after:via-cyber-purple after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-cyber-blue/10 before:dark:opacity-10 after:dark:from-cyber-purple after:dark:via-cyber-blue/40 after:dark:opacity-40 before:lg:h-[360px]">
        <div className="relative">
          <h1 className="text-6xl font-bold text-center mb-4 cyber-glitch neon-text" data-text="CYBERTECH">
            CYBERTECH
          </h1>
          <p className="text-xl text-center text-cyber-blue">Soluções de infraestrutura para o futuro digital</p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-8">
        <CyberCard glowColor="purple">
          <h2 className="text-2xl font-bold mb-2 text-cyber-purple">Infraestrutura</h2>
          <p className="text-gray-300 mb-6">
            Soluções avançadas de infraestrutura de TI para empresas que buscam o próximo nível tecnológico.
          </p>
          <CyberButton href="/services">Saiba mais</CyberButton>
        </CyberCard>

        <CyberCard glowColor="blue">
          <h2 className="text-2xl font-bold mb-2 text-cyber-blue">Cloud Computing</h2>
          <p className="text-gray-300 mb-6">
            Serviços em nuvem de alta performance com tecnologia de ponta para sua empresa do futuro.
          </p>
          <CyberButton variant="outline" href="/services">
            Explorar
          </CyberButton>
        </CyberCard>

        <CyberCard glowColor="pink">
          <h2 className="text-2xl font-bold mb-2 text-cyber-pink">Consultoria</h2>
          <p className="text-gray-300 mb-6">
            Consultoria especializada em TI com foco em inovação e transformação digital para o mundo cyberpunk.
          </p>
          <CyberButton variant="destructive" href="/services">
            Contratar
          </CyberButton>
        </CyberCard>
      </div>
    </main>
  )
}

