import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/AppShell';

export const metadata: Metadata = {
  title: 'NXT AI Workspace',
  description: 'Unified AI developer workspace for models, prompts, agents, pipelines, and cost tracking.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0D1315] text-[#F0F4F5] min-h-screen">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
