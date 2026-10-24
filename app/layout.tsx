import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gym Management System',
  description: 'Gym management dashboard for members, classes, and attendance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
