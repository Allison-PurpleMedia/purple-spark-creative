'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, Instagram, Facebook, Sun, Moon } from 'lucide-react';

const templates = [
  {
    id: 1,
    name: 'Template 1 - Classic',
    description: 'Elegant and timeless design perfect for professional services and traditional businesses.',
    thumbnail: 'from-amber-500 to-orange-600',
  },
  {
    id: 2,
    name: 'Template 2 - Modern',
    description: 'Clean, contemporary design with plenty of white space and bold typography.',
    thumbnail: 'from-cyan-500 to-blue-600',
  },
  {
    id: 3,
    name: 'Template 3 - Bold',
    description: 'High-impact design with vibrant colors and dynamic layouts for creative brands.',
    thumbnail: 'from-purple-600 to-pink-600',
  },
];

export default function GetStarted() {
  const [isDark, setIsDark] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#F5F0FF] dark:bg-[#1A0A2E] transition-colors">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass dark:glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Purple Spark Creative"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            <nav className="flex items-center gap-4">
              <Link href={isHome ? '#services' : '/#services'} className="text-slate-600 dark:text-[#7B2FBE] hover:text-[#7B2FBE] dark:hover:text-[#00D4FF] transition-colors">Services</Link>
              <Link href={isHome ? '#pricing' : '/#pricing'} className="text-slate-600 dark:text-[#7B2FBE] hover:text-[#7B2FBE] dark:hover:text-[#00D4FF] transition-colors">Pricing</Link>
              <Link href={isHome ? '#portfolio' : '/#portfolio'} className="text-slate-600 dark:text-[#7B2FBE] hover:text-[#7B2FBE] dark:hover:text-[#00D4FF] transition-colors">Portfolio</Link>
              <Link href="/get-started" className="text-slate-600 dark:text-[#7B2FBE] hover:text-[#7B2FBE] dark:hover:text-[#00D4FF] transition-colors font-medium">Get Started</Link>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-[#7B2FBE] text-slate-700 dark:text-white hover:opacity-80 transition-all"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link href={isHome ? '#contact' : '/#contact'} className="px-5 py-2.5 bg-[#7B2FBE] text-white font-medium rounded-xl hover:bg-[#9B4FDE] hover:shadow-lg transition-all">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-24 bg-[#F5F0FF] dark:bg-[#1A0A2E]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0FF] to-white dark:from-[#2D1B4E] dark:to-[#1A0A2E]" />
          <div className="absolute top-20 -left-20 w-80 h-80 bg-[#7B2FBE]/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-3xl opacity-50" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Start Your Website Journey
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Choose your template and fill out the form below — we&apos;ll take it from there.
            </p>
          </div>
        </section>

        {/* Template Selection */}
        <section className="py-16 bg-white dark:bg-[#1A0A2E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Choose Your Website Template
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {templates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`group rounded-2xl overflow-hidden transition-all cursor-pointer ${
                    selectedTemplate === template.id
                      ? 'ring-4 ring-[#7B2FBE] dark:ring-[#00D4FF] shadow-2xl scale-[1.02]'
                      : 'border border-[#7B2FBE]/20 dark:border-[#7B2FBE]/30 hover:border-[#7B2FBE] dark:hover:border-[#00D4FF] hover:shadow-xl'
                  } bg-[#F5F0FF] dark:bg-[#2D1B4E]`}
                >
                  {/* Placeholder Thumbnail */}
                  <div className={`h-48 bg-gradient-to-br ${template.thumbnail} flex items-center justify-center`}>
                    <span className="text-white/80 text-4xl font-bold">{template.id}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{template.name}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{template.description}</p>
                    <button
                      className={`w-full py-3 rounded-xl font-medium transition-all ${
                        selectedTemplate === template.id
                          ? 'bg-[#7B2FBE] text-white dark:bg-[#00D4FF] dark:text-[#1A0A2E]'
                          : 'bg-white dark:bg-[#1A0A2E] text-[#7B2FBE] border-2 border-[#7B2FBE] dark:border-[#7B2FBE] dark:text-white hover:bg-[#7B2FBE] hover:text-white dark:hover:bg-[#00D4FF] dark:hover:text-[#1A0A2E] dark:hover:border-[#00D4FF]'
                      }`}
                    >
                      {selectedTemplate === template.id ? 'Selected' : 'Select This Template'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aidaform Embed */}
        <section className="py-16 bg-[#F5F0FF] dark:bg-[#1A0A2E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
              Tell Us About Your Website
            </h2>
            
            <div className="bg-white dark:bg-[#2D1B4E] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://purplemediagroup.aidaform.com/purple-media-group-ai-website-design"
                width="100%"
                style={{ border: 'none', minHeight: '900px' }}
                title="Website Design Form"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A0A2E] dark:bg-[#0D0518] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Purple Spark Creative"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-slate-400 mb-4">
                Creating beautiful brands for small businesses across Australia, New Zealand & USA.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com/purplesparkcreative" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 dark:bg-[#7B2FBE] hover:bg-[#7B2FBE] rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/purplesparkcreative" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 dark:bg-[#7B2FBE] hover:bg-[#7B2FBE] rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Branding Kits</a></li>
                <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Logo Design</a></li>
                <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-[#00D4FF] transition-colors">Websites</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>allison@purplesparkcreative.com</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>&copy; 2026 Purple Spark Creative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
