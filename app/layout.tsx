import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/site.config';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Massage Therapy in ${site.address.city}, ${site.address.state}`,
  description: `${site.tagline} ${site.serviceArea}`,
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.url,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
