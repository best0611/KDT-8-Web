import styled from "styled-components";

const _BoxOne = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

// props를 이용하는 방법
const _BoxTwo = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

// 다른 컴포넌트를 그대로 상속받아 사용하는 방법
const _CircleOne = styled(_BoxTwo)`
  border-radius: 50px;
`;

// 기존 태그를 이름만 변경하여 사용하는 방법 => as 라는 키워드 사용
const _Btn = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`;

// 태그의 옵션은 .attrs({}) 객체 형태로 넣어줌
const _Input = styled.input.attrs({ required: true })``;

// 중첩
const _BoxThree = styled.div`
  width: 200px;
  height: 100px;
  background-color: aqua;
  line-height: 100px;
  text-align: center;

  // 다른 컴포넌트를 불러와서 사용할 때
  ${_Input} {
    background-color: yellow;
  }

  p {
    color: red;
    font-weight: 900;
    &:hover {
      font-size: 32px;
    }
  }
`;

export default function StyledComponent() {
  return (
    <div>
      <_BoxThree>
        <p>Hello Styled</p>
        <_Input />
      </_BoxThree>
      <_BoxOne as="header"></_BoxOne>
      <_BoxTwo color="red" />
      <_BoxTwo color="yellow" />
      <_CircleOne color="green" />
      <_Btn as="a" href="https://naver.com">
        클릭
      </_Btn>
      <_Input />
      <_Input />
    </div>
  );
}

// style-component 사용 시, 클래스명을 알아서 랜덤하게 붙여줌
// 클래스명을 신경써서 사용할 필요가 없다는 장점.
