"use client"

import { useState } from "react"
import Link from "next/link"
import { CyberButton } from "@/components/cyber-button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-cyber-purple bg-black/80 backdrop-blur-md">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyber-purple neon-text cyber-glitch" data-text="CYBERTECH">
          CYBERTECH
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-300 hover:text-cyber-purple transition-colors">
            Início
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-cyber-purple transition-colors">
            Serviços
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-cyber-purple transition-colors">
            Sobre
          </Link>
          <Link href="/team" className="text-gray-300 hover:text-cyber-purple transition-colors">
            Equipe
          </Link>
          <Link href="/careers" className="text-gray-300 hover:text-cyber-purple transition-colors">
            Carreiras
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-cyber-purple transition-colors">
            Contato
          </Link>
        </nav>

        <div className="hidden md:block">
          <CyberButton href="/contact">Fale Conosco</CyberButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyber-purple"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-cyber-purple bg-black/90">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-cyber-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-cyber-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-cyber-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/team"
              className="text-gray-300 hover:text-cyber-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Equipe
            </Link>
            <Link
              href="/careers"
              className="text-gray-300 hover:text-cyber-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Carreiras
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-cyber-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <CyberButton href="/contact" onClick={() => setIsMenuOpen(false)}>
              Fale Conosco
            </CyberButton>
          </nav>
        </div>
      )}
    </header>
  )
}

