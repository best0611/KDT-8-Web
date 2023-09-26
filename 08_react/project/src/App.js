/*
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Test from "./test";
import TestSecond from "./test2";
import FoodComponent from "./food";
import BookComponent from "./Book";
*/
import { Outlet } from "react-router-dom";

function App() {
  /*
  return (
    <>
      <h1>컴포넌트</h1>
      <ClassComponent></ClassComponent>
      <FunctionComponent />
      <Test />
      <TestSecond />
      <ClassComponent name="jekyoung" />
      <ClassComponent />
      <FunctionComponent name="kdt8" age={12}>
        안녕
      </FunctionComponent>
      <FunctionComponent />
      <FoodComponent food="떡볶이" />
      <FoodComponent />
      <BookComponent
        title="나의 하루는 4시 30분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      />
    </>
  );
  */
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
