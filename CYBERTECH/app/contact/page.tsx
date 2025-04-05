import { CyberButton } from "@/components/cyber-button"
import { CyberCard } from "@/components/cyber-card"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 cyberpunk-grid">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-cyber-purple neon-text cyber-glitch" data-text="ENTRE EM CONTATO">
          ENTRE EM CONTATO
        </h1>
        <p className="text-xl text-cyber-blue max-w-3xl mx-auto">
          Estamos prontos para ajudar sua empresa a alcançar o próximo nível em infraestrutura de TI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <CyberCard glowColor="purple">
          <h2 className="text-2xl font-bold mb-4 text-cyber-purple">Formulário de Contato</h2>
          <p className="text-gray-300 mb-6">Preencha o formulário abaixo e entraremos em contato em até 24 horas.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Nome
                </label>
                <input
                  id="name"
                  className="w-full p-2 bg-black/50 border-2 border-cyber-purple text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-purple"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 bg-black/50 border-2 border-cyber-purple text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-purple"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-gray-300">
                Empresa
              </label>
              <input
                id="company"
                className="w-full p-2 bg-black/50 border-2 border-cyber-purple text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-purple"
                placeholder="Nome da sua empresa"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                Assunto
              </label>
              <input
                id="subject"
                className="w-full p-2 bg-black/50 border-2 border-cyber-purple text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-purple"
                placeholder="Assunto da mensagem"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 bg-black/50 border-2 border-cyber-purple text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-purple"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
          </form>
          <div className="mt-6">
            <CyberButton className="w-full">Enviar Mensagem</CyberButton>
          </div>
        </CyberCard>

        <CyberCard glowColor="blue">
          <h2 className="text-2xl font-bold mb-4 text-cyber-blue">Informações de Contato</h2>
          <p className="text-gray-300 mb-6">Outras formas de entrar em contato conosco.</p>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-2 text-cyber-green">Endereço</h3>
              <p className="text-gray-300">
                Av. Paulista, 1000
                <br />
                Bela Vista, São Paulo - SP
                <br />
                CEP: 01310-100
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2 text-cyber-green">Telefone</h3>
              <p className="text-gray-300">
                +55 (11) 3456-7890
                <br />
                +55 (11) 98765-4321
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2 text-cyber-green">Email</h3>
              <p className="text-gray-300">
                contato@infra.com.br
                <br />
                suporte@infra.com.br
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2 text-cyber-green">Horário de Atendimento</h3>
              <p className="text-gray-300">
                Segunda a Sexta: 8h às 18h
                <br />
                Suporte 24/7 para clientes
              </p>
            </div>
          </div>
        </CyberCard>
      </div>
    </div>
  )
}

