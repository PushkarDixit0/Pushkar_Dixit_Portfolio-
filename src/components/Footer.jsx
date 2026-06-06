import { Code2, Mail, Network } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const icons = { LinkedIn: Network, GitHub: Code2, Email: Mail };

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Pushkar Dixit</h2>
        <p>Full-stack developer focused on clean interfaces, reliable web apps, and steady skill growth.</p>
      </div>
      <div className="footer-links">
        {portfolio.socials.map((social) => {
          const Icon = icons[social.label] || Mail;
          return (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
              <Icon size={18} />
            </a>
          );
        })}
      </div>
      <p className="footer-credit">Designed and developed by Pushkar Dixit.</p>
    </footer>
  );
}
