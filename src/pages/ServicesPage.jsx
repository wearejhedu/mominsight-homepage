import CTAButton from '../components/CTAButton';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const allServices = [
  ['학생부 컨설팅', '기록 점검, 강점 발굴, 학년별 개선 계획 수립'],
  ['고교 선택 컨설팅', '중학생 대상 학교 유형 분석 및 선택 전략 제안'],
  ['진로·탐구 주제 설계', '전공 연계 탐구 활동과 자기소개서 방향성 사전 설계'],
  ['학부모 상담', '가정 내 학습/정서 지원 방식 코칭'],
  ['강의 및 특강', '학교/학부모 대상 입시 흐름 특강 및 학생부 전략 강의'],
];

export default function ServicesPage() {
  return (
    <section className="section container">
      <SectionTitle eyebrow="서비스" title="상황에 맞춘 맞춤형 컨설팅" />
      <div className="grid cols-2">
        {allServices.map(([title, description]) => (
          <ServiceCard key={title} title={title} description={description} />
        ))}
      </div>
      <CTAButton label="서비스 조합 상담" />
    </section>
  );
}
