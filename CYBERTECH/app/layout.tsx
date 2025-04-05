import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "CYBERTECH - Soluções de Infraestrutura de TI",
  description: "Soluções completas de infraestrutura de TI para empresas de todos os tamanhos",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />

        <main className="flex-grow">{children}</main>

        <footer className="bg-black border-t border-cyber-purple py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-cyber-purple neon-text">CYBERTECH</h3>
                <p className="text-gray-300">
                  Soluções completas de infraestrutura de TI para empresas de todos os tamanhos.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-cyber-blue neon-text">Serviços</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services" className="text-gray-300 hover:text-cyber-purple">
                      Infraestrutura de Rede
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-300 hover:text-cyber-purple">
                      Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-300 hover:text-cyber-purple">
                      Segurança da Informação
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-300 hover:text-cyber-purple">
                      Consultoria em TI
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-cyber-pink neon-text">Empresa</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-cyber-purple">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="text-gray-300 hover:text-cyber-purple">
                      Equipe
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-300 hover:text-cyber-purple">
                      Carreiras
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-cyber-purple">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-cyber-green neon-text">Contato</h3>
                <address className="not-italic text-gray-300">
                  Av. Paulista, 1000
                  <br />
                  Bela Vista, São Paulo - SP
                  <br />
                  CEP: 01310-100
                  <br />
                  <br />
                  <a href="tel:+551134567890" className="hover:text-cyber-purple">
                    +55 (11) 3456-7890
                  </a>
                  <br />
                  <a href="mailto:contato@infra.com.br" className="hover:text-cyber-purple">
                    contato@cybertech.com.br
                  </a>
                </address>
              </div>
            </div>
            <div className="border-t border-cyber-purple mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} CYBERTECH. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'