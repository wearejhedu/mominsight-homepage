import CTAButton from '../components/CTAButton';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const services = [
  ['학생부 컨설팅', '생활기록부의 강점/약점을 진단하고 실제 학교 활동과 연결된 개선 전략을 제시합니다.'],
  ['고교 선택 컨설팅', '중학생 학부모를 위해 지역 일반고 특성과 학생 성향을 함께 분석해 적합한 고교 선택을 돕습니다.'],
  ['진로·탐구 주제 설계', '학생의 흥미와 전공 연계성을 반영해 자기주도 탐구 활동의 방향을 설계합니다.'],
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">신뢰 중심 입시 컨설팅</p>
          <h1>학부모가 안심하고 맡길 수 있는, 차분하고 정확한 교육 컨설팅</h1>
          <p>
            과장된 약속 대신, 학생의 현재를 정확히 읽고 다음 단계를 구체적으로 설계합니다.
            지방 일반고/중학생 학부모에게 꼭 맞춘 실질적인 전략을 제공합니다.
          </p>
          <CTAButton />
        </div>
      </section>

      <section className="section container">
        <SectionTitle
          eyebrow="핵심 메시지"
          title="입시는 정보전이 아니라, 방향 설계입니다"
          description="학생부종합전형, 고입, 대입의 흐름을 한눈에 정리하고 가정에서 실행 가능한 계획으로 전환합니다."
        />
        <CTAButton label="핵심 전략 상담받기" />
      </section>

      <section className="section container">
        <SectionTitle eyebrow="서비스 소개" title="가정과 학교를 연결하는 컨설팅" />
        <div className="grid cols-3">
          {services.map(([title, description]) => (
            <ServiceCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="왜 필요한가"
            title="같은 성적이라도, 설계에 따라 결과는 달라집니다"
            description="학생부의 맥락, 진로 일관성, 학년별 우선순위를 점검하면 불필요한 불안과 시행착오를 줄일 수 있습니다."
          />
          <ul className="check-list">
            <li>학년별로 무엇을 먼저 준비해야 하는지 명확해집니다.</li>
            <li>학생부 기록과 실제 활동의 연결이 자연스러워집니다.</li>
            <li>학부모가 가정에서 도울 수 있는 역할이 분명해집니다.</li>
          </ul>
          <CTAButton label="우리 아이 상황 점검하기" />
        </div>
      </section>

      <section className="section container">
        <SectionTitle eyebrow="상담 프로그램" title="상황별 맞춤 프로그램" />
        <div className="grid cols-2">
          <article className="card"><h3>진단 상담 (60분)</h3><p>현재 학생부 및 진로 상태를 진단하고 우선순위를 제시합니다.</p></article>
          <article className="card"><h3>집중 설계 (4주)</h3><p>입시 로드맵, 활동 설계, 학부모 코칭을 통합 제공합니다.</p></article>
        </div>
        <CTAButton label="프로그램 문의하기" />
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle eyebrow="신뢰 요소" title="학부모의 실제 변화" />
          <div className="grid cols-2">
            <blockquote className="quote">“막연했던 불안이 계획으로 바뀌었습니다. 무엇을 해야 할지 명확해졌어요.”</blockquote>
            <blockquote className="quote">“과장 없이 현실적인 피드백을 받아서 오히려 더 믿음이 갔습니다.”</blockquote>
          </div>
          <CTAButton label="상담 일정 확인하기" />
        </div>
      </section>
    </>
  );
}
