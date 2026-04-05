'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Palette, PenTool, Layout, Globe, Mail, MapPin, ArrowRight, Instagram, Facebook, Sun, Moon } from 'lucide-react';

const services = [
  { icon: Palette, title: 'Branding Kits', description: 'Complete brand identity packages including color palettes, typography, and brand guidelines.' },
  { icon: PenTool, title: 'Logo Design', description: 'Unique, memorable logos tailored to your business personality and target audience.' },
  { icon: Layout, title: 'Social Media Graphics', description: 'Eye-catching templates and posts that elevate your social media presence.' },
  { icon: Globe, title: 'Websites', description: 'Modern, responsive websites that convert visitors into customers.' },
];

const portfolio = [
  { title: 'Brand Identity', category: 'Branding', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600' },
  { title: 'Logo Collection', category: 'Logo Design', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600' },
  { title: 'Social Campaigns', category: 'Social Media', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80' },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
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
              <Image src="/logo.png" alt="Purple Spark Creative" width={40} height={40} style={{ height: 40, width: 'auto' }} />
            </Link>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Link href={isHome ? '#services' : '/#services'} style={{ color: isDark ? '#7B2FBE' : '#475569', textDecoration: 'none' }}>Services</Link>
              <Link href={isHome ? '#pricing' : '/#pricing'} style={{ color: isDark ? '#7B2FBE' : '#475569', textDecoration: 'none' }}>Pricing</Link>
              <Link href={isHome ? '#portfolio' : '/#portfolio'} style={{ color: isDark ? '#7B2FBE' : '#475569', textDecoration: 'none' }}>Portfolio</Link>
              <Link href="/get-started" style={{ color: isDark ? '#7B2FBE' : '#475569', fontWeight: 500, textDecoration: 'none' }}>Get Started</Link>
              <button onClick={() => { setIsDark(!isDark); localStorage.setItem('darkMode', (!isDark).toString()); }} style={{ padding: 8, borderRadius: 8, background: isDark ? '#7B2FBE' : '#f1f5f9', color: isDark ? 'white' : '#475569', border: 'none', cursor: 'pointer' }}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link href={isHome ? '#contact' : '/#contact'} style={{ padding: '10px 20px', background: '#7B2FBE', color: 'white', fontWeight: 500, borderRadius: 12, textDecoration: 'none' }}>Contact Us</Link>
            </nav>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: 80 }}>
        {/* Hero Section */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 0', background: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #a855f7 100%)' }}>
          <div style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 48, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 9999, fontSize: '0.875rem', background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: 24 }}>
                  <span style={{ width: 8, height: 8, background: '#00D4FF', borderRadius: '50%' }} />
                  Created for you
                </div>
                <h1 style={{ fontSize: '3rem', fontWeight: 700, color: 'white', marginBottom: 24, lineHeight: 1.2 }}>
                  We Create Beautiful Brands for Small Businesses
                </h1>
                <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: 32, maxWidth: 500 }}>
                  Brand kits, logo design, and social media graphics for small to medium sized business owners in Australia, New Zealand & USA.
                </p>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', background: 'white', color: '#7c3aed', fontWeight: 600, borderRadius: 12, textDecoration: 'none' }}>
                    Contact Us Now <ArrowRight size={20} />
                  </Link>
                  <Link href="#portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 32px', background: 'transparent', color: 'white', fontWeight: 600, borderRadius: 12, border: '2px solid white', textDecoration: 'none' }}>
                    View Portfolio
                  </Link>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative', aspectRatio: '1', maxWidth: 500, margin: '0 auto' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(123,47,190,0.2) 0%, rgba(0,212,255,0.2) 100%)', borderRadius: 32, transform: 'rotate(3deg)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'white', borderRadius: 32, overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800" alt="Creative design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ position: 'absolute', bottom: -16, left: -16, width: 96, height: 96, background: 'linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                    <Palette size={40} color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={{ padding: '80px 0', background: isDark ? '#1f2937' : 'white' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: isDark ? 'white' : '#1e293b', marginBottom: 16 }}>Our Services</h2>
              <p style={{ color: isDark ? '#9ca3af' : '#64748b', maxWidth: 600, margin: '0 auto' }}>Everything you need to build a professional brand presence</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
              {services.map((service) => (
                <div key={service.title} style={{ padding: 24, background: isDark ? '#374151' : '#f5f0ff', borderRadius: 16, border: '1px solid rgba(123, 47, 190, 0.2)' }}>
                  <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg, rgba(123,47,190,0.2) 0%, rgba(0,212,255,0.2) 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <service.icon size={28} color="#7c3aed" />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: isDark ? 'white' : '#1e293b', marginBottom: 8 }}>{service.title}</h3>
                  <p style={{ color: isDark ? '#9ca3af' : '#64748b', fontSize: '0.875rem' }}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ padding: '80px 0', background: isDark ? '#1f2937' : '#f5f0ff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: isDark ? 'white' : '#1e293b', marginBottom: 16 }}>Website Design Pricing</h2>
              <p style={{ color: isDark ? '#9ca3af' : '#64748b', maxWidth: 600, margin: '0 auto' }}>Simple, transparent pricing for your new website</p>
            </div>
            <div style={{ maxWidth: 600, margin: '0 auto' }}>
              <div style={{ background: isDark ? '#374151' : 'white', borderRadius: 24, boxShadow: '0 20px 60px rgba(124, 58, 237, 0.15)', border: '2px solid #7c3aed', padding: 48 }}>
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                  <p style={{ fontSize: '0.875rem', color: isDark ? '#9ca3af' : '#94a3b8', marginBottom: 8 }}>Starting at</p>
                  <p style={{ fontSize: 56, fontWeight: 800, color: '#7c3aed' }}>From $1,497</p>
                </div>
                <ul style={{ marginBottom: 24, listStyle: 'none', padding: 0 }}>
                  {['Custom website design', 'Mobile responsive', 'Up to 5 pages', 'Contact form', 'Social media links', 'Basic SEO setup', '7 day post-launch support'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, color: isDark ? '#e5e7eb' : '#475569', marginBottom: 12 }}>
                      <svg style={{ width: 20, height: 20, color: '#7c3aed', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ background: isDark ? '#1f2937' : '#f5f0ff', borderRadius: 12, padding: 20, marginTop: 24 }}>
                  <p style={{ fontSize: '0.875rem', color: isDark ? '#9ca3af' : '#475569', fontWeight: 500, textAlign: 'center' }}>50% deposit required to commence</p>
                  <p style={{ fontSize: '0.875rem', color: isDark ? '#9ca3af' : '#475569', fontWeight: 500, textAlign: 'center', marginTop: 8 }}>Remaining 50% due on completion</p>
                </div>
                <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
                  <a href="#" style={{ flex: 1, background: '#7c3aed', color: 'white', padding: '14px 28px', borderRadius: 8, fontWeight: 600, border: 'none', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', minWidth: 150 }}>Pay Deposit Now</a>
                  <Link href="/get-started" style={{ flex: 1, background: 'transparent', color: '#7c3aed', padding: '14px 28px', borderRadius: 8, fontWeight: 600, border: '2px solid #7c3aed', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', minWidth: 150 }}>Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" style={{ padding: '80px 0', background: isDark ? '#1f2937' : 'white' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: isDark ? 'white' : '#1e293b', marginBottom: 8 }}>Our Work</h2>
                <p style={{ color: isDark ? '#9ca3af' : '#64748b' }}>Recent projects we've worked on</p>
              </div>
              <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#7c3aed', fontWeight: 500, textDecoration: 'none' }}>
                View All Projects <ArrowRight size={20} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {portfolio.map((item) => (
                <div key={item.title} style={{ background: isDark ? '#374151' : '#f5f0ff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <p style={{ fontSize: '0.875rem', color: '#7c3aed', fontWeight: 500, marginBottom: 4 }}>{item.category}</p>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: isDark ? 'white' : '#1e293b' }}>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About/Stats Section */}
        <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #a855f7 100%)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 48, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: 24 }}>We Help Small Businesses <span style={{ color: '#00D4FF' }}>Stand Out</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 16 }}>At Purple Spark Creative, we specialize in creating memorable brand experiences for small to medium sized businesses across Australia, New Zealand, and the USA.</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 32 }}>Whether you need a complete brand kit, a distinctive logo, engaging social media graphics, or a modern website - we bring your vision to life with creativity and strategy.</p>
                <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>200+</p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Clients Served</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>500+</p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Projects Completed</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>98%</p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Satisfaction Rate</p>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ aspectRatio: '4/3', borderRadius: 24, overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                  <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800" alt="Logo designs" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '80px 0', background: isDark ? '#111827' : 'white' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ background: isDark ? '#1f2937' : 'white', borderRadius: 32, padding: 48, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: isDark ? '1px solid #374151' : '1px solid #e2e8f0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
                <div>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: isDark ? 'white' : '#1e293b', marginBottom: 16 }}>Let's Create Something Beautiful</h2>
                  <p style={{ color: isDark ? '#9ca3af' : '#64748b', marginBottom: 32 }}>Ready to elevate your brand? Get in touch and we'll help you create a visual identity that sets you apart.</p>
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                      <div style={{ width: 48, height: 48, background: 'rgba(123, 47, 190, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Mail size={20} color="#7c3aed" />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.875rem', color: isDark ? '#9ca3af' : '#64748b' }}>Email</p>
                        <p style={{ fontWeight: 500, color: isDark ? 'white' : '#1e293b' }}>allison@purplesparkcreative.com</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <div style={{ width: 48, height: 48, background: 'rgba(0, 212, 255, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MapPin size={20} color="#00D4FF" />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.875rem', color: isDark ? '#9ca3af' : '#64748b' }}>Service Area</p>
                        <p style={{ fontWeight: 500, color: isDark ? 'white' : '#1e293b' }}>Australia, New Zealand & USA</p>
                      </div>
                    </div>
                  </div>
                </div>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: isDark ? '#9ca3af' : '#475569', marginBottom: 8 }}>Name</label>
                      <input type="text" placeholder="Your name" style={{ width: '100%', padding: '12px 16px', background: isDark ? '#374151' : '#f8fafc', border: isDark ? '1px solid #4b5563' : '1px solid #e2e8f0', borderRadius: 12, fontSize: '1rem', color: isDark ? 'white' : '#1e293b' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: isDark ? '#9ca3af' : '#475569', marginBottom: 8 }}>Email</label>
                      <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '12px 16px', background: isDark ? '#374151' : '#f8fafc', border: isDark ? '1px solid #4b5563' : '1px solid #e2e8f0', borderRadius: 12, fontSize: '1rem', color: isDark ? 'white' : '#1e293b' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: isDark ? '#9ca3af' : '#475569', marginBottom: 8 }}>Service Interested In</label>
                    <select style={{ width: '100%', padding: '12px 16px', background: isDark ? '#374151' : '#f8fafc', border: isDark ? '1px solid #4b5563' : '1px solid #e2e8f0', borderRadius: 12, fontSize: '1rem', color: isDark ? 'white' : '#1e293b' }}>
                      <option>Branding Kit</option>
                      <option>Logo Design</option>
                      <option>Social Media Graphics</option>
                      <option>Website</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: isDark ? '#9ca3af' : '#475569', marginBottom: 8 }}>Message</label>
                    <textarea rows={4} placeholder="Tell us about your project..." style={{ width: '100%', padding: '12px 16px', background: isDark ? '#374151' : '#f8fafc', border: isDark ? '1px solid #4b5563' : '1px solid #e2e8f0', borderRadius: 12, fontSize: '1rem', color: isDark ? 'white' : '#1e293b', resize: 'vertical' }} />
                  </div>
                  <button type="submit" style={{ width: '100%', padding: '16px 32px', background: '#7c3aed', color: 'white', fontWeight: 600, borderRadius: 12, border: 'none', cursor: 'pointer', fontSize: '1rem' }}>Send Message</button>
                </form>
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
                <Image src="/logo.png" alt="Purple Spark Creative" width={40} height={40} style={{ height: 40, width: 'auto' }} />
              </div>
              <p style={{ color: '#94a3b8', marginBottom: 16 }}>Creating beautiful brands for small businesses across Australia, New Zealand & USA.</p>
              <div style={{ display: 'flex', gap: 16 }}>
                <a href="https://facebook.com/purplesparkcreative" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, background: '#334155', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Facebook size={20} /></a>
                <a href="https://instagram.com/purplesparkcreative" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, background: '#334155', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Instagram size={20} /></a>
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
