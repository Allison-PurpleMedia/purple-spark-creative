'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Instagram, Facebook, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isDark, setIsDark] = useState(false);

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
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: isDark ? 'rgba(26, 10, 46, 0.9)' : 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', borderBottom: isDark ? '1px solid rgba(123, 47, 190, 0.3)' : '1px solid rgba(123, 47, 190, 0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isDark ? 80 : 64 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Image src="/logo.png" alt="Purple Spark Creative" width={40} height={40} style={{ height: 40, width: 'auto' }} />
            </Link>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <button onClick={() => { setIsDark(!isDark); localStorage.setItem('darkMode', (!isDark).toString()); }} style={{ padding: 8, borderRadius: 8, background: isDark ? '#7B2FBE' : '#f1f5f9', color: isDark ? 'white' : '#475569', border: 'none', cursor: 'pointer' }}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link href="/get-started" style={{ padding: '10px 20px', background: '#7B2FBE', color: 'white', fontWeight: 500, borderRadius: 12, textDecoration: 'none' }}>
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: 80, padding: '120px 0' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: isDark ? 'white' : '#1e293b', marginBottom: 16 }}>Payment Successful!</h1>
          <p style={{ fontSize: '1.125rem', color: isDark ? '#cbd5e1' : '#64748b', marginBottom: 32 }}>
            Thank you for your deposit. We'll be in touch shortly with the website brief form to learn more about your business.
          </p>
          <Link href="/get-started" style={{ display: 'inline-block', padding: '16px 32px', background: '#7c3aed', color: 'white', fontWeight: 600, borderRadius: 12, textDecoration: 'none' }}>
            Complete Your Brief
          </Link>
        </div>
      </main>

      <footer style={{ background: '#1A0A2E', padding: '48px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <Image src="/logo.png" alt="Purple Spark Creative" width={40} height={40} style={{ height: 40, width: 'auto' }} />
              </div>
              <p style={{ color: '#94a3b8', marginBottom: 16 }}>Creating beautiful brands for small businesses.</p>
              <div style={{ display: 'flex', gap: 16 }}>
                <a href="https://facebook.com/purplesparkcreative" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, background: '#334155', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Facebook size={20} /></a>
                <a href="https://instagram.com/purplesparkcreative" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, background: '#334155', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Instagram size={20} /></a>
              </div>
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
