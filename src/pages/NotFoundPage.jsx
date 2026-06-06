import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="not-found section-shell">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you opened is not part of the React portfolio routes.</p>
      <Link className="button" to="/">Go Home</Link>
    </section>
  );
}
