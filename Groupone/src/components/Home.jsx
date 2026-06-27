import React, { useEffect, useState } from "react";
import "./Home.css";

const quotes = [
  "Collaboration turns ideas into impact.",
  "Great teams build great experiences.",
  "Small steps every day create remarkable results.",
  "Innovation grows when creativity meets commitment.",
];

const teamMembers = [
  {
    name: "Jade",
    role: "Team Lead",
    description: "Guides the project vision and keeps the team aligned.",
  },
  {
    name: "Shahul",
    role: "Team Member",
    description:
      "Contributes fresh ideas and brings strong problem-solving energy.",
  },
  {
    name: "Weijie",
    role: "Team Member",
    description:
      "Supports development with careful execution and attention to detail.",
  },
];

function Home() {
  const [activeQuote, setActiveQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveQuote((current) => {
        const index = quotes.indexOf(current);
        return quotes[(index + 1) % quotes.length];
      });
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Group One</p>
          <h1>Welcome to our first collaborative project</h1>
          <p>
            This landing page celebrates our team&apos;s first shared build,
            highlights our mission, and introduces the people behind the work.
          </p>
        </div>

        <div className="quote-banner" aria-label="Inspirational quotes">
          <div className="quote-track">
            {quotes.concat(quotes).map((quote, index) => (
              <span key={`${quote}-${index}`} className="quote-pill">
                “{quote}”
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="info-grid">
        <article className="info-card project-card">
          <h2>About the project</h2>
          <p>
            Our first Group One project is a React-based showcase experience
            designed to bring our team together and present our shared ideas
            with a polished, welcoming interface.
          </p>
          <ul>
            <li>Built as a collaborative learning experience</li>
            <li>Focused on clear communication and simple design</li>
            <li>Created to celebrate teamwork and creativity</li>
          </ul>
        </article>

        <article className="info-card team-card">
          <h2>Meet the team</h2>
          <div className="team-list">
            {teamMembers.map((member) => (
              <div className="team-member" key={member.name}>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="highlight-strip">
        <p>Current inspiration:</p>
        <strong>{activeQuote}</strong>
      </section>
    </main>
  );
}

export default Home;
