'use client';

import Navbar from '@/components/Navbar';
import Ticker from '@/components/Ticker';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Features from '@/components/Features';
import MSTChain from '@/components/MSTChain';
import HowItWorks from '@/components/HowItWorks';
import Security from '@/components/Security';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <CursorGlow />
      <ParticleNetwork />
      <Navbar />
      <Ticker />
      <Hero />
      <Showcase />
      <Features />
      <MSTChain />
      <HowItWorks />
      <Security />
      <CTABand />
      <Footer />
      <ScrollReveal />
    </main>
  );
}
