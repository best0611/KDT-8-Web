function Event() {
  const handleClick = () => {
    alert("클릭했습니다.");
  };

  const handleClick2 = (e, str) => {
    console.log(e);
    alert(str);
  };
  return (
    <>
      <button onClick={handleClick}>클릭</button>
      {/* 함수에 인자를 넣고 싶을 때는, 화살표함수 사용 */}
      {/* <button onClick={() => handleClick2("클릭2 클릭")}>클릭2</button> */}
      <button onClick={(e) => handleClick2(e, "클릭2 클릭")}>클릭2</button>
    </>
  );
}

export default Event;
