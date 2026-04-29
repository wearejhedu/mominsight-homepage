import CTAButton from '../components/CTAButton';
import SectionTitle from '../components/SectionTitle';

const posts = [
  ['2027 대입 트렌드 핵심 요약', '학종 평가 요소 변화와 지방 일반고 학생의 대응 전략'],
  ['학부모 교육 칼럼: 불안 관리', '불안을 줄이는 대화법과 학년별 부모 역할 가이드'],
  ['학생부 관리 전략', '학기 초·중·말 시기별 점검 루틴'],
];

export default function BlogPage() {
  return (
    <section className="section container">
      <SectionTitle eyebrow="칼럼/블로그" title="입시 흐름을 읽고, 가정에서 실행하는 전략" />
      <div className="grid cols-3">
        {posts.map(([title, desc]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <CTAButton label="관련 상담 신청" />
          </article>
        ))}
      </div>
    </section>
  );
}
