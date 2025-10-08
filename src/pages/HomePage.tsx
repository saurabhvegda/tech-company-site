import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ServicesOverview from '../components/ServicesOverview';
import ServicesNav from '../components/ServicesNav';
import Cybersecurity from '../components/cybersecurity';
import DatabaseIntegration from '../components/database-integration';
import DigitalTransformation from '../components/digital-transformation';
import AIAutomation from '../components/ai-automation';
import CloudSolutions from '../components/cloud-solutions';
import MobileAppDevelopment from '../components/mobile-app-development';
import StaffAugmentation from '../components/staff-augmentation';
import ProjectManagement from '../components/project-management';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="home">
        <Hero />
        <Stats />
      </div>
      <div id="all-services">
        <ServicesOverview />
      </div>
      <ServicesNav />
      <div id="ai-automation">
        <AIAutomation />
      </div>
      <div id="cybersecurity">
        <Cybersecurity />
      </div>
      <div id="database-integration">
        <DatabaseIntegration />
      </div>
      <div id="digital-transformation">
        <DigitalTransformation />
      </div>
      <div id="cloud-solutions">
        <CloudSolutions />
      </div>
      <div id="mobile-app">
        <MobileAppDevelopment />
      </div>
      <div id="staff-augmentation">
        <StaffAugmentation />
      </div>
      <div id="project-management">
        <ProjectManagement />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
