import "./SassPractice1.scss";
import grass from "./grass.png";
export default function SassPractice1() {
  return (
    <div className="parent">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="circle circle5"></div>
      <div className="circle circle6"></div>
      <div className="circle circle7"></div>
      <div className="grass">
        <img src={grass} alt="grass" className="grassImage" />
      </div>
    </div>
  );
}
