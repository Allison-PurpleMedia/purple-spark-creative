'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Palette, PenTool, Layout, Globe, Mail, MapPin, ArrowRight, Instagram, Facebook, Sun, Moon } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Branding Kits',
    description: 'Complete brand identity packages including color palettes, typography, and brand guidelines.',
  },
  {
    icon: PenTool,
    title: 'Logo Design',
    description: 'Unique, memorable logos tailored to your business personality and target audience.',
  },
  {
    icon: Layout,
    title: 'Social Media Graphics',
    description: 'Eye-catching templates and posts that elevate your social media presence.',
  },
  {
    icon: Globe,
    title: 'Websites',
    description: 'Modern, responsive websites that convert visitors into customers.',
  },
];

const portfolio = [
  {
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600',
  },
  {
    title: 'Logo Collection',
    category: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600',
  },
  {
    title: 'Social Campaigns',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
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
        <section className="relative overflow-hidden py-20 md:py-32 bg-[#F5F0FF] dark:bg-[#1A0A2E]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0FF] to-white dark:from-[#2D1B4E] dark:to-[#1A0A2E]" />
          <div className="absolute top-20 -left-20 w-80 h-80 bg-[#7B2FBE]/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-3xl opacity-50" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 shadow-sm bg-white/80 text-[#7B2FBE] dark:bg-[#2D1B4E] dark:text-[#00D4FF]">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse-soft" />
                  Created for you
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  We Create{' '}
                  <span className="bg-gradient-to-r from-[#7B2FBE] to-[#00D4FF] bg-clip-text text-transparent">
                    Beautiful Brands
                  </span>
                  {' '}for Small Businesses
                </h1>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
                  Brand kits, logo design, and social media graphics for small to medium sized business owners in Australia, New Zealand & USA.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contact" className="px-8 py-4 bg-[#7B2FBE] text-white font-semibold rounded-xl hover:bg-[#9B4FDE] hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    Contact Us Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="#portfolio" className="px-8 py-4 bg-white text-[#7B2FBE] font-semibold rounded-xl border-2 border-[#7B2FBE] hover:bg-[#F5F0FF] hover:shadow-lg transition-all flex items-center justify-center dark:bg-[#2D1B4E] dark:text-white dark:border-[#7B2FBE] dark:hover:bg-[#3D2B5E]">
                    View Portfolio
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square max-w-lg mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FBE]/20 to-[#00D4FF]/20 rounded-3xl rotate-3" />
                  <div className="absolute inset-0 bg-white dark:bg-[#2D1B4E] rounded-3xl shadow-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800" 
                      alt="Creative design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#7B2FBE] to-[#00D4FF] rounded-2xl shadow-xl flex items-center justify-center animate-float">
                    <Palette className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white dark:bg-[#1A0A2E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Services</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Everything you need to build a professional brand presence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="group p-6 bg-[#F5F0FF] dark:bg-[#2D1B4E] rounded-2xl border border-[#7B2FBE]/20 dark:border-[#7B2FBE]/30 hover:border-[#7B2FBE] dark:hover:border-[#00D4FF] hover:shadow-xl transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#7B2FBE]/20 to-[#00D4FF]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-[#7B2FBE]" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ background: 'linear-gradient(135deg, #f5f0ff 0%, #ffffff 100%)', padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e293b', marginBottom: 16 }}>Website Design Pricing</h2>
              <p style={{ color: '#64748b', maxWidth: 600, margin: '0 auto' }}>
                Simple, transparent pricing for your new website
              </p>
            </div>
            
            <div style={{ maxWidth: 600, margin: '0 auto' }}>
              <div style={{
                background: 'white',
                borderRadius: 24,
                boxShadow: '0 20px 60px rgba(124, 58, 237, 0.15)',
                border: '2px solid #7c3aed',
                padding: 48
              }}>
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                  <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: 8 }}>Starting at</p>
                  <p style={{ fontSize: 56, fontWeight: 800, color: '#7c3aed' }}>
                    From $<span>{/* TODO: UPDATE PRICE HERE - e.g. 997 */}</span>
                  </p>
                </div>
                
                <ul style={{ marginBottom: 24 }}>
                  {['Custom website design', 'Mobile responsive', 'Up to 5 pages', 'Contact form', 'Social media links', 'Basic SEO setup', '7 day post-launch support'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#475569', marginBottom: 12 }}>
                      <svg style={{ width: 20, height: 20, color: '#7c3aed', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div style={{ background: '#f5f0ff', borderRadius: 12, padding: 20, marginTop: 24 }}>
                  <p style={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500, textAlign: 'center' }}>
                    50% deposit required to commence
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#475569', fontWeight: 500, textAlign: 'center', marginTop: 8 }}>
                    Remaining 50% due on completion
                  </p>
                </div>
                
                <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
                  <a href="#" style={{ flex: 1, background: '#7c3aed', color: 'white', padding: '14px 28px', borderRadius: 8, fontWeight: 600, border: 'none', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', minWidth: 150 }}>
                    {/* TODO: Stripe deposit link goes here */}
                    Pay Deposit Now
                  </a>
                  <Link href="/get-started" style={{ flex: 1, background: 'transparent', color: '#7c3aed', padding: '14px 28px', borderRadius: 8, fontWeight: 600, border: '2px solid #7c3aed', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', minWidth: 150 }}>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-[#F5F0FF] dark:bg-[#1A0A2E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Our Work</h2>
                <p className="text-slate-600 dark:text-slate-300">Recent projects we&apos;ve worked on</p>
              </div>
              <Link href="#" className="hidden md:flex items-center gap-2 text-[#7B2FBE] font-medium hover:gap-3 transition-all dark:text-[#00D4FF]">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolio.map((item) => (
                <div key={item.title} className="group bg-white dark:bg-[#2D1B4E] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#7B2FBE] font-medium mb-1">{item.category}</p>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white dark:bg-[#1A0A2E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  We Help Small Businesses{' '}
                  <span className="text-[#7B2FBE]">Stand Out</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  At Purple Spark Creative, we specialize in creating memorable brand experiences for small to medium sized businesses across Australia, New Zealand, and the USA.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Whether you need a complete brand kit, a distinctive logo, engaging social media graphics, or a modern website - we bring your vision to life with creativity and strategy.
                </p>
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#7B2FBE]">200+</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Clients Served</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#7B2FBE]">500+</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#7B2FBE]">98%</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800" 
                    alt="Logo designs" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-[#7B2FBE] to-[#00D4FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Let&apos;s Create Something Beautiful</h2>
                  <p className="text-slate-600 mb-8">
                    Ready to elevate your brand? Get in touch and we&apos;ll help you create a visual identity that sets you apart.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#7B2FBE]/10 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#7B2FBE]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Email</p>
                        <p className="font-medium text-slate-900">allison@purplesparkcreative.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#00D4FF]/10 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#00D4FF]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Service Area</p>
                        <p className="font-medium text-slate-900">Australia, New Zealand & USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Service Interested In</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] focus:border-transparent">
                      <option>Branding Kit</option>
                      <option>Logo Design</option>
                      <option>Social Media Graphics</option>
                      <option>Website</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] focus:border-transparent resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#7B2FBE] text-white font-semibold rounded-xl hover:bg-[#9B4FDE] hover:shadow-xl transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
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
