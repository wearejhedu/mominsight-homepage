import CTAButton from '../components/CTAButton';
import SectionTitle from '../components/SectionTitle';

export default function AboutPage() {
  return (
    <section className="section container">
      <SectionTitle eyebrow="소개" title="컨설턴트 소개" description="12년간 중·고등 진로진학 지도 및 학생부 컨설팅을 진행한 전문 컨설턴트가 직접 상담합니다." />
      <div className="grid cols-2">
        <article className="card">
          <h3>교육 철학</h3>
          <p>학생의 속도와 맥락을 존중하며, 부모의 불안보다 아이의 성장 가능성에 초점을 둡니다.</p>
        </article>
        <article className="card">
          <h3>학생부와 입시를 바라보는 관점</h3>
          <p>학생부는 스펙 나열이 아닌 학습과 성장을 보여주는 기록입니다. 일관된 진로 설계를 통해 설득력을 만듭니다.</p>
        </article>
      </div>
      <CTAButton />
    </section>
  );
}
