import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Cloud, Shield, Activity, HeadsetIcon, Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient">
              Smart Infrastructure for Future-Driven Businesses
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Empowering your digital transformation with cutting-edge solutions
            </p>
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/30 animate-pulse-slow"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cloud, title: "Cloud Computing", desc: "Scalable cloud solutions" },
              { icon: Shield, title: "Data Security", desc: "Advanced protection systems" },
              { icon: Activity, title: "24/7 Monitoring", desc: "Real-time system tracking" },
              { icon: HeadsetIcon, title: "Technical Support", desc: "Expert assistance anytime" },
            ].map((service) => (
              <Card 
                key={service.title}
                className="p-6 bg-black/40 border-purple-900/50 hover:border-purple-500/50 transition-colors group"
              >
                <service.icon className="w-12 h-12 text-purple-500 mb-4 group-hover:text-purple-400 transition-colors" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { label: "System Performance", value: 92 },
                { label: "Customer Satisfaction", value: 88 },
                { label: "Security Score", value: 95 },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{stat.label}</span>
                    <Badge variant="outline" className="border-purple-500 text-purple-500">
                      {stat.value}%
                    </Badge>
                  </div>
                  <Progress 
                    value={stat.value} 
                    className="h-2 bg-purple-950"
                  />
                </div>
              ))}
            </div>
            <div className="bg-black/40 border border-purple-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  Advanced AI-powered solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  99.9% uptime guarantee
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  24/7 expert support team
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  Flexible scaling options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-400 mb-8">
              We are a team of forward-thinking technologists dedicated to bringing cutting-edge solutions to businesses worldwide. Our mission is to transform traditional infrastructure into smart, efficient, and future-ready systems.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i}
                  className="aspect-square rounded-lg bg-black/40 border border-purple-900/50 p-4 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 border-t border-purple-900/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                CYBERTECH
              </h3>
              <p className="text-gray-400">
                Building the infrastructure of tomorrow
              </p>
            </div>
            {["Products", "Company", "Resources"].map((section) => (
              <div key={section}>
                <h4 className="font-bold mb-4">{section}</h4>
                <ul className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <li key={i}>
                      <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        Link {i + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-purple-900/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 CyberTech. All rights reserved.
              </p>
              <div className="flex gap-4">
                {[Github, Linkedin].map((Icon, i) => (
                  <Link
                    key={i}
                    href={i === 0 ? "https://github.com/mpletti" : "https://www.linkedin.com/in/matheus-pasqualetti-966a4b189/"}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">Social Link</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
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

