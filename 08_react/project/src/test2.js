function TestSecond() {
  const style = {
    color: "orange",
    fontSize: "40px",
    marginTop: "20px",
  };
  const imgSize = {
    width: "300px",
    height: "100px",
  };
  return (
    <>
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src="grass.png" alt="grass" style={imgSize} />
      </div>
    </>
  );
}

export default TestSecond;
