import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { EventsCalendar } from './components/EventsCalendar';
import { CitizenRequests } from './components/CitizenRequests';
import { NewsUpdates } from './components/NewsUpdates';
import { SocialEngagement } from './components/SocialEngagement';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <EventsCalendar />
        <CitizenRequests />
        <NewsUpdates />
        <SocialEngagement />
      </main>
      <Footer />
    </div>
  );
}
