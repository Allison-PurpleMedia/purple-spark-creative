'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Instagram, Facebook, Sun, Moon } from 'lucide-react';

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

const steps = [
  { num: 1, title: 'Choose Your Template', desc: 'Browse our 3 professionally designed templates and pick the style that suits your brand' },
  { num: 2, title: 'Pay Your Deposit', desc: 'A 50% deposit of $748.50 secures your spot and kicks off the project' },
  { num: 3, title: 'Fill Out Your Brief', desc: "Once your deposit is confirmed, you'll get access to our website brief form to tell us all about your business" },
  { num: 4, title: 'We Build & Present', desc: 'We design your website based on your chosen template and brief, then present it to you for review' },
  { num: 5, title: 'Review & Refine', desc: 'You get up to 3 rounds of edits to make sure everything is perfect' },
  { num: 6, title: 'Pay Balance & Go Live', desc: "Once you approve the final design and pay the remaining 50% ($748.50), we deploy your site on Cloudflare and send you your login details" },
];

export default function GetStarted() {
  const [isDark, setIsDark] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') setIsDark(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div style={{ minHeight: '100vh', background: isDark ? '#1A0A2E' : '#F5F0FF', transition: 'background 0.3s' }}>
      {/* Header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: isDark ? 'rgba(26, 10, 46, 0.9)' : 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', borderBottom: isDark ? '1px solid rgba(123, 47, 190, 0.3)' : '1px solid rgba(123, 47, 190, 0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isDark ? 80 : 64 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Image
                src="/logo.png"
                alt="Purple Spark Creative"
                width={40}
                height={40}
                style={{ height: 40, width: 'auto' }}
              />
            </Link>
            
            <nav style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Link href={isHome ? '#services' : '/#services'} style={{ color: isDark ? '#7B2FBE' : '#475569', transition: 'color 0.2s' }}>Services</Link>
              <Link href={isHome ? '#pricing' : '/#pricing'} style={{ color: isDark ? '#7B2FBE' : '#475569', transition: 'color 0.2s' }}>Pricing</Link>
              <Link href={isHome ? '#portfolio' : '/#portfolio'} style={{ color: isDark ? '#7B2FBE' : '#475569', transition: 'color 0.2s' }}>Portfolio</Link>
              <Link href="/get-started" style={{ color: isDark ? '#7B2FBE' : '#475569', fontWeight: 500, transition: 'color 0.2s' }}>Get Started</Link>
              <button
                onClick={() => { setIsDark(!isDark); localStorage.setItem('darkMode', (!isDark).toString()); }}
                style={{ padding: 8, borderRadius: 8, background: isDark ? '#7B2FBE' : '#f1f5f9', color: isDark ? 'white' : '#475569', border: 'none', cursor: 'pointer' }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link href={isHome ? '#contact' : '/#contact'} style={{ padding: '10px 20px', background: '#7B2FBE', color: 'white', fontWeight: 500, borderRadius: 12, textDecoration: 'none' }}>
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: 80 }}>
        {/* Hero Section */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: isDark ? '#1A0A2E' : 'linear-gradient(135deg, #f5f0ff 0%, #ffffff 100%)' }}>
          <div style={{ position: 'absolute', inset: 0, background: isDark ? 'linear-gradient(135deg, #2D1B4E 0%, #1A0A2E 100%)' : 'linear-gradient(135deg, #f5f0ff 0%, #ffffff 100%)' }} />
          <div style={{ position: 'absolute', top: 80, left: -80, width: 320, height: 320, background: 'rgba(123, 47, 190, 0.2)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.5 }} />
          <div style={{ position: 'absolute', bottom: 80, right: -80, width: 384, height: 384, background: 'rgba(0, 212, 255, 0.2)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.5 }} />
          
          <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, color: isDark ? 'white' : '#1e293b', marginBottom: 24, lineHeight: 1.2 }}>
              Start Your Website Journey
            </h1>
            <p style={{ fontSize: '1.125rem', color: isDark ? '#cbd5e1' : '#64748b', maxWidth: 600, margin: '0 auto' }}>
              Simple, transparent process — from template to live website
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ padding: '80px 0', background: isDark ? '#1A0A2E' : 'white' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: isDark ? 'white' : '#1e293b', textAlign: 'center', marginBottom: 48 }}>How It Works</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {steps.map((step) => (
                <div key={step.num} style={{ padding: 32, background: isDark ? '#2D1B4E' : '#f5f0ff', borderRadius: 16, border: '1px solid rgba(123, 47, 190, 0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: isDark ? 'white' : '#1e293b' }}>{step.title}</h3>
                  </div>
                  <p style={{ color: isDark ? '#cbd5e1' : '#64748b', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            
            <p style={{ textAlign: 'center', marginTop: 32, color: isDark ? '#94a3b8' : '#64748b', fontSize: '0.875rem' }}>
              After launch, you receive 7 days of support. After that, your website is fully yours to manage.
            </p>
          </div>
        </section>

        {/* Template Selection */}
        <section style={{ padding: '80px 0', background: isDark ? '#1A0A2E' : 'linear-gradient(135deg, #f5f0ff 0%, #ffffff 100%)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: isDark ? 'white' : '#1e293b', textAlign: 'center', marginBottom: 48 }}>
              Choose Your Website Template
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
              {templates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  style={{ 
                    borderRadius: 16, 
                    overflow: 'hidden', 
                    cursor: 'pointer',
                    border: selectedTemplate === template.id ? '3px solid #7c3aed' : '1px solid rgba(123, 47, 190, 0.2)',
                    boxShadow: selectedTemplate === template.id ? '0 20px 60px rgba(124, 58, 237, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
                    transform: selectedTemplate === template.id ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    background: isDark ? '#2D1B4E' : '#f5f0ff'
                  }}
                >
                  <div style={{ height: 200, background: `linear-gradient(135deg, ${template.thumbnail.split(' ')[1]} 0%, ${template.thumbnail.split(' ')[3]} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '3rem', fontWeight: 700 }}>{template.id}</span>
                  </div>
                  
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: isDark ? 'white' : '#1e293b', marginBottom: 8 }}>{template.name}</h3>
                    <p style={{ color: isDark ? '#cbd5e1' : '#64748b', fontSize: '0.875rem', marginBottom: 16 }}>{template.description}</p>
                    <button
                      style={{
                        width: '100%',
                        padding: '12px 24px',
                        borderRadius: 12,
                        fontWeight: 600,
                        border: selectedTemplate === template.id ? 'none' : '2px solid #7c3aed',
                        background: selectedTemplate === template.id ? '#7c3aed' : 'transparent',
                        color: selectedTemplate === template.id ? 'white' : '#7c3aed',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {selectedTemplate === template.id ? 'Selected' : 'Select This Template'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deposit & Form Section */}
        <section style={{ padding: '80px 0', background: isDark ? '#1A0A2E' : 'white' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ background: isDark ? '#2D1B4E' : 'white', borderRadius: 24, padding: 48, boxShadow: '0 20px 60px rgba(124, 58, 237, 0.15)', border: '2px solid #7c3aed', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: isDark ? 'white' : '#1e293b', marginBottom: 16 }}>Ready to Get Started?</h2>
              <p style={{ color: isDark ? '#cbd5e1' : '#64748b', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
                Select your template above, then pay your deposit below to unlock the website brief form.
              </p>
              
              <a href="#" style={{ display: 'inline-block', padding: '16px 32px', background: '#7c3aed', color: 'white', fontWeight: 600, borderRadius: 12, textDecoration: 'none', marginBottom: 32 }}>
                {/* TODO: Stripe deposit link goes here */}
                Pay Deposit - $748.50
              </a>
            </div>
            
            <div style={{ position: 'relative', marginTop: 48, borderRadius: 16, overflow: 'hidden' }}>
              <iframe
                src="https://purplemediagroup.aidaform.com/purple-media-group-ai-website-design"
                width="100%"
                style={{ border: 'none', minHeight: '900px', filter: 'blur(4px)', pointerEvents: 'none', opacity: 0.5 }}
                title="Website Design Form"
              />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', padding: 32 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: 600, textAlign: 'center', maxWidth: 400 }}>
                  Complete your deposit payment above to unlock the brief form
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ background: '#1A0A2E', padding: '48px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <Image
                  src="/logo.png"
                  alt="Purple Spark Creative"
                  width={40}
                  height={40}
                  style={{ height: 40, width: 'auto' }}
                />
              </div>
              <p style={{ color: '#94a3b8', marginBottom: 16 }}>
                Creating beautiful brands for small businesses across Australia, New Zealand & USA.
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <a href="https://facebook.com/purplesparkcreative" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, background: '#334155', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com/purplesparkcreative" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, background: '#334155', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 style={{ fontWeight: 600, color: 'white', marginBottom: 16 }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: 8 }}><a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Branding Kits</a></li>
                <li style={{ marginBottom: 8 }}><a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Logo Design</a></li>
                <li style={{ marginBottom: 8 }}><a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Social Media</a></li>
                <li style={{ marginBottom: 8 }}><a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Websites</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontWeight: 600, color: 'white', marginBottom: 16 }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#94a3b8' }}>allison@purplesparkcreative.com</li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #334155', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
            <p>&copy; 2026 Purple Spark Creative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
