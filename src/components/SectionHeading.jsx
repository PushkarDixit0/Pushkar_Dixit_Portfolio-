export default function SectionHeading({ eyebrow, title, align = 'center' }) {
  return (
    <div className={`section-heading align-${align}`}>
      {eyebrow && <p>{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
  );
}
