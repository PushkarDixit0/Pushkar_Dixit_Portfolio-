import {
  ArrowRight,
  Award,
  Code2,
  Download,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ScrollTop from "../components/ScrollTop.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Timeline from "../components/Timeline.jsx";
import { useTyping } from "../hooks/useTyping.js";
import {
  achievements,
  education,
  experiences,
  portfolio,
  projects,
  skills,
  stats,
  testimonials,
} from "../data/portfolio.js";

export default function HomePage() {
  const typed = useTyping([
    "frontend development",
    "backend development",
    "web development",
    "full-stack products",
  ]);
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero section-shell" id="home">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              <Sparkles size={16} /> Available for full-stack opportunities
            </p>
            <p className="hero-kicker">
              {portfolio.role} based in {portfolio.location}
            </p>
            <h1>
              Building polished web products with practical full-stack
              engineering
            </h1>
            <p className="hero-subtitle">
              Hi, I am {portfolio.name}. I create reliable interfaces,
              thoughtful backend flows, and complete products across{" "}
              <span>{typed}</span>
              <span className="cursor" aria-hidden="true" />.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                View Work <ArrowRight size={18} />
              </a>
              <a
                className="button secondary"
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Resume <Download size={18} />
              </a>
            </div>
            <div className="social-row" aria-label="Social links">
              <span className="social-label">Connect</span>
              {portfolio.socials.map((social) => (
                <a
                  href={social.href}
                  key={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="portrait-wrap">
              <img
                src="/assets/images/hero.png"
                alt="Pushkar Dixit portrait illustration"
              />
            </div>
            <div className="floating-note top">
              <Code2 size={18} /> MERN / MEVN / PERN
            </div>
            <div className="floating-note bottom">
              <MapPin size={18} /> Pune, India
            </div>
          </div>
        </div>
        <div className="stats-grid" aria-label="Portfolio highlights">
          {stats.map((stat, index) => (
            <div
              className="stat-card reveal"
              key={stat.label}
              style={{ "--delay": `${index * 45}ms` }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell about-section" id="about">
        <SectionHeading
          eyebrow="About"
          title="Developer With A Builder's Mindset"
          align="left"
        />
        <div className="about-grid">
          <div className="about-image reveal">
            <img
              src="/assets/images/profile.png"
              alt="Pushkar Dixit profile"
              loading="lazy"
            />
          </div>
          <div className="about-copy reveal">
            <p>
              I am a full-stack developer based in India with a Bachelor of
              Engineering degree from Sipna College of Engineering and
              Technology, Amravati. I enjoy improving my coding skills by
              building applications, websites, clones, and practical data
              science experiments.
            </p>
            <div className="info-list">
              <span>
                <Mail size={17} /> {portfolio.email}
              </span>
              <span>
                <MapPin size={17} /> {portfolio.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell skills-section" id="skills">
        <SectionHeading eyebrow="Skills" title="Core Stack And Tools" />
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article
              className="skill-card reveal"
              key={skill.name}
              style={{ "--delay": `${index * 25}ms` }}
            >
              <img src={skill.icon} alt="" loading="lazy" />
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.group}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell experience-section" id="experience">
        <div className="section-split">
          <SectionHeading
            eyebrow="Experience"
            title="Experience, Internships And Applied Learning"
            align="left"
          />
          <Link className="button secondary" to="/experience">
            View All <ArrowRight size={17} />
          </Link>
        </div>
        <Timeline items={experiences.slice(0, 4)} compact />
      </section>

      <section className="section-shell projects-section" id="projects">
        <div className="section-split">
          <SectionHeading
            eyebrow="Projects"
            title="Selected Work"
            align="left"
          />
          <Link className="button secondary" to="/projects">
            All Projects <ArrowRight size={17} />
          </Link>
        </div>
        <div className="projects-grid">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>

      <section className="section-shell education-section" id="education">
        <SectionHeading eyebrow="Education" title="Academic Foundation" />
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card reveal" key={item.title}>
              <img src={item.image} alt="" loading="lazy" />
              <div>
                <p>{item.period}</p>
                <h3>{item.title}</h3>
                <span>{item.place}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell achievements-section" id="achievements">
        <SectionHeading eyebrow="Achievements" title="Signals Of Consistency" />
        <div className="achievement-grid">
          {achievements.map((item) => (
            <article className="achievement-card reveal" key={item}>
              <Award size={20} />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell testimonials-section" id="testimonials">
        <SectionHeading eyebrow="Testimonials" title="Feedback Snapshot" />
        <div className="testimonial-card reveal">
          <p>"{testimonials[0].quote}"</p>
          <span>
            {testimonials[0].name} - {testimonials[0].role}
          </span>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <ScrollTop />
    </>
  );
}

function ContactSection() {
  const [status, setStatus] = useState("idle");
  const mailto = useMemo(() => `mailto:${portfolio.email}`, []);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone") || "N/A"}\n\n${form.get("message")}`,
    );
    setStatus("loading");
    window.location.href = `${mailto}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setStatus("sent"), 500);
  }

  return (
    <section className="section-shell contact-section" id="contact">
      <SectionHeading eyebrow="Contact" title="Let's Build Something Useful" />
      <div className="contact-card reveal">
        <div className="contact-art">
          <img src="/assets/images/contact1.png" alt="" loading="lazy" />
          <p>
            Submit an innovative project concept, competitive hackathon
            opportunity, lucrative freelancing proposal, or strategic
            collaboration note
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button
            className="button"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Preparing..." : "Send Message"}{" "}
            <Send size={17} />
          </button>
          {status === "sent" && (
            <p className="form-status">
              Your email app should be ready with the message.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
