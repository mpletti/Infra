'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Database, Lock, Zap, Server, Network } from 'lucide-react'

export default function ServicesPage() {
  const cloudProducts = [
    { icon: Database, title: "Cloud Storage", desc: "Secure and scalable storage solutions for your data" },
    { icon: Server, title: "Cloud Compute", desc: "High-performance computing resources on demand" },
    { icon: Network, title: "Cloud Networking", desc: "Advanced networking capabilities for your cloud infrastructure" },
    { icon: Lock, title: "Cloud Security", desc: "Robust security measures to protect your cloud assets" },
    { icon: Zap, title: "Serverless Computing", desc: "Run code without managing servers" },
    { icon: Cloud, title: "Multi-Cloud Solutions", desc: "Seamlessly integrate multiple cloud platforms" },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="border-b border-purple-900/50 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            >
              CYBER<span className="animate-pulse">TECH</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              {["Home", "Services", "Solutions", "About Us", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-500 hover:bg-purple-500/20"
            >
              Connect
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient text-center">
            Our Cloud Services
          </h1>
          <p className="text-gray-400 text-lg mb-12 text-center max-w-3xl mx-auto">
            Empower your business with our cutting-edge cloud solutions. We offer a comprehensive suite of cloud products designed to enhance your digital infrastructure and drive innovation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudProducts.map((product, index) => (
              <Card 
                key={index}
                className="p-6 bg-black/40 border-purple-900/50 hover:border-purple-500/50 transition-colors group"
              >
                <product.icon className="w-12 h-12 text-purple-500 mb-4 group-hover:text-purple-400 transition-colors" />
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-400 mb-4">{product.desc}</p>
                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors">
                  Learn More
                </Badge>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Why Choose Our Cloud Services?
            </h2>
            <ul className="inline-block text-left text-gray-400 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                Unparalleled scalability and flexibility
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                Advanced security measures and compliance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                24/7 expert support and monitoring
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                Cost-effective solutions tailored to your needs
              </li>
            </ul>
          </div>

          <div className="mt-16 text-center">
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/30 animate-pulse-slow"
            >
              Get Started with Cloud Services
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-black/90 border-t border-purple-900/50">
        <div className="container mx-auto px-4 py-8">
          <p className="text-gray-400 text-sm text-center">
            © 2024 CyberTech. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .7;
          }
        }
      `}</style>
    </div>
  )
}

