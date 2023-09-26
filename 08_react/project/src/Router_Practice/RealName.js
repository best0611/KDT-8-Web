import { useOutletContext } from "react-router-dom";

export default function RealName() {
  const realName = useOutletContext();
  //   console.log(realName);
  return <div>실제 이름은 {realName}입니다.</div>;
}
