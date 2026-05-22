import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Ecosystem Dependency Explorer',
  description: 'Interactive dependency map of models, labs, frameworks, compute providers, and hardware.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans noise">{children}</body>
    </html>
  );
}
