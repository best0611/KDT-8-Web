import "./App.css";

function App() {
  // const flag = true;
  // let txt = "";

  // if (flag) txt = "true입니다";
  // else txt = "false입니다";

  // const style = {
  //   backgroundColor: "red",
  // };

  //실습2
  let name = "오름이";
  let animal = "강아지";

  // 실습3
  // const input = {
  //   textAlign: "center",
  //   margin: "10px",
  // };
  // const test = {
  //   textAlign: "center",
  //   backgroundColor: "beige",
  //   color: "orange",
  // };

  // map함수
  const lists = ["k", "d", "t", "w", "e", "b"];

  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];
  let vips = users.filter((user) => user.vip === true);

  const loading = true;
  const userName = null;

  // jsx 최상위 요소에 반드시 부모요소가 필요!
  return (
    // <div>
    //   <h1 style={{ backgroundColor: "black", color: "white" }}>Hello React!</h1>
    //   <div style={style}>리액트 시작</div>
    //   <input type="text" />
    //   <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div>
    //   <div>{txt}</div>
    // </div>

    // 실습1
    // <div>
    //   이것은 div입니다
    //   <h3>이것은 div안에 있는 h3 태그입니다.</h3>
    //   <div>{3 + 5 === 8 ? <div>정답입니다!</div> : <div>오답입니다!</div>}</div>
    // </div>
    // 실습2
    <>
      {loading && (
        <>
          <h2>제 반려동물의 이름은 {name}입니다.</h2>
          <h2>
            {name}는 {animal}입니다.
          </h2>
          {/* 실습3 */}
          <h1 className="test">Hello World</h1>
          <div style={{ textAlign: "center" }}>
            아이디: <input type="text" className="input" /> <br />
            비밀번호: <input type="password" className="input" />
          </div>
          {/* 실습4 */}
          <div className="divBox">
            <div className="red"></div>
            <div className="orange"></div>
            <div className="yellow"></div>
            <div className="green"></div>
            <div className="blue"></div>
            <div className="navy"></div>
            <div className="purple"></div>
          </div>
          {lists.map((value, index) => {
            return <div key={index}>Hello {value}</div>;
          })}
          <ul>
            {vips.map((value) => {
              return <li key={value.id}>{value.name}</li>;
            })}
            {/* return 사용안할 때는 중괄호 말고 그냥 괄호 */}
            {vips.map((value) => (
              <li key={value.id}>{value.name}</li>
            ))}
          </ul>
          {userName || "martin"}
        </>
      )}
    </>
  );
}

export default App;
