import { Link } from 'react-router-dom';

export default function CTAButton({ label = '상담 신청하기' }) {
  return (
    <Link className="btn" to="/contact">
      {label}
    </Link>
  );
}
