import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import ScrollTop from '../components/ScrollTop.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Timeline from '../components/Timeline.jsx';
import { experiences } from '../data/portfolio.js';

export default function ExperiencePage() {
  return (
    <>
      <section className="page-hero section-shell">
        <Link className="text-link" to="/#experience"><ArrowLeft size={16} /> Back to Home</Link>
        <SectionHeading eyebrow="Experience" title="Full Timeline" />
        <p className="page-intro">
          Every experience in your life teaches you something you need to know to move forward.
        </p>
        <Timeline items={experiences} />
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
