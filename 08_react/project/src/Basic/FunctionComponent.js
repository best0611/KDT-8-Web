import PropTypes from "prop-types";
// function 컴포넌트명, const 컴포넌트명 = () => {}
function FunctionComponent(props) {
  // function FunctionComponent({ name, age }) {
  const myClass = "kdt8";
  return (
    <>
      <div>반갑습니다 {myClass}에 오신 것을 환영합니다.</div>
      {/* <div>{name}</div>
      <div>{age}</div> */}
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.children}</div>
    </>
  );
}
FunctionComponent.defaultProps = {
  name: "kdt",
  age: 10,
};
FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
// import "./circles.css";
// function addCircles() {
//   return (
//     <div className="parent">
//       <div className="circle circle1"></div>
//       <div className="circle circle2"></div>
//       <div className="circle circle3"></div>
//       <div className="circle circle4"></div>
//       <div className="circle circle5"></div>
//       <div className="circle circle6"></div>
//       <div className="circle circle7"></div>
//       <div className="grass">
//         <img src="grass.png" alt="grass" className="grassImage" />
//       </div>
//     </div>
//   );
// }

// export default addCircles;
export default FunctionComponent;
