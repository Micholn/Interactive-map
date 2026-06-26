import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Ecosystem Explorer',
  description: 'Interactive dependency map of AI models, labs, frameworks, compute providers and hardware choke points.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
