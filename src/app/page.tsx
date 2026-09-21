import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TimSection } from '@/components/TimSection';
import { MateriSection } from '@/components/MateriSection';
import { TimelineSection } from '@/components/TimelineSection';
import { VideoSection } from '@/components/VideoSection';
import { KuisSection } from '@/components/KuisSection';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <div id="tim">
        <TimSection />
      </div>

      <div id="materi">
        <MateriSection />
      </div>

      <div id="sejarah">
        <TimelineSection />
      </div>

      <div id="video">
        <VideoSection />
      </div>

      <div id="kuis">
        <KuisSection />
      </div>

      <Footer />
    </main>
  );
}