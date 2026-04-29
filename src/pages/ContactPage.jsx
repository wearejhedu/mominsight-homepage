import SectionTitle from '../components/SectionTitle';

export default function ContactPage() {
  return (
    <section className="section container">
      <SectionTitle eyebrow="상담 신청" title="첫 상담 예약" description="아래 정보를 남겨주시면 확인 후 순차적으로 연락드립니다." />
      <form className="card form-grid">
        <label>이름<input type="text" name="name" required /></label>
        <label>연락처<input type="tel" name="phone" required /></label>
        <label>자녀 학년<select name="grade"><option>중1</option><option>중2</option><option>중3</option><option>고1</option><option>고2</option><option>고3</option></select></label>
        <label>상담 희망 분야<select name="focus"><option>학생부 컨설팅</option><option>고교 선택 컨설팅</option><option>진로·탐구 주제 설계</option><option>학부모 상담</option><option>강의 및 특강</option></select></label>
        <label className="full">문의 내용<textarea name="message" rows="5" placeholder="궁금한 점, 현재 고민을 자유롭게 작성해주세요." /></label>
        <button className="btn" type="submit">상담 신청 보내기</button>
      </form>
    </section>
  );
}
