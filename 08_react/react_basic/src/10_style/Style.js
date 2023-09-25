// import "./Style.css";
import styled from "./Style.module.css";
export default function Style() {
  return (
    // 객체 형태로 class를 불러옴 (뒤에 random 문자가 붙어 클래스 생성됨)
    <div className={styled.section}>
      <div>1</div>
      <div>2</div>
    </div>
  );
}
