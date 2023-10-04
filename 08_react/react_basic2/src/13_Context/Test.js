import MyContext from "./store/lang-context";

export default function Test() {
  return (
    <>
      <MyContext.Consumer>
        {(value) => {
          return <div>현재 선택: {value.language}</div>;
        }}
      </MyContext.Consumer>
    </>
  );
}
