import styled from "styled-components";

// 순수 css 라 이벤트를 사용할수없다. 하지만 컴포넌트기 때문에
// props 를 이용할수있다.
// SASS , SCSS

// const _Boxtwo = styled.div`
//   background-color: ${(props) => props.color};
//   width: 150px;
//   height: 150px;
// `;

// 상속받아서 이용하는 방법
// const _Circle = styled(_Boxtwo)`
//   border-radius: 50%;
// `;

// 기존 태그를 이름만 바꿔서 사용하는 방법
const _Btn = styled.button`
  background-color: aqua;
  color: green;
  padding: 10px, 10px;
  border-radius: 4px;
  width: 10px;
  height: 20px;
`;

const _Input = styled.input.attrs({ required: true })`
  background-color: yellow;
`;

// 중첩
const _Boxthree = styled.div`
  width: 200px;
  height: 200px;
  background-color: blueviolet;
  line-height: 200px;
  text-align: center;
  // 다른 컴포넌트를 불러와서 사용가능하다.
  ${_Input} {
    background-color: ivory;
  }

  p {
    color: white;
    font-weight: bold;
    &:hover {
      font-size: 30px;
    }
  }
`;

export default function StyledComponent() {
  return (
    <>
      <div>
        <_Boxthree>
          <p>hello styled</p>
          <_Input />
        </_Boxthree>
        {/* <_Boxone></_Boxone> */}
        {/* <_Boxtwo color={"red"}></_Boxtwo> */}
        {/* <_Btn>클릭</_Btn>
        <_Btn as="a" href="https://www.naver.com">
          a 태그
        </_Btn> */}
        <_Input />
        <br />
        <_Input />
        <br />
        <_Input />
        <br />
        <_Btn onClick={() => alert("안녕하세요")} />
      </div>
    </>
  );
}
