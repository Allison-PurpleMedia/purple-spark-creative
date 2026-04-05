import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Purple Spark Creative | Branding, Logo & Social Media Design',
  description: 'Brand kits for small businesses, social media graphics, logo design. Created for you.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
