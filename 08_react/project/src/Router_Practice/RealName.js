import { useOutletContext } from "react-router-dom";

export default function RealName() {
  const realName = useOutletContext();
  console.log(realName);
  return (
    <>
      {realName == null ? (
        <div></div>
      ) : (
        <div>
          실제 이름은 <span style={{ color: "red" }}>{realName}</span>입니다.
        </div>
      )}
    </>
  );
}
