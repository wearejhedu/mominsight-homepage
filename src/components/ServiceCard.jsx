import CTAButton from './CTAButton';

export default function ServiceCard({ title, description }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <CTAButton label="해당 서비스 상담" />
    </article>
  );
}
