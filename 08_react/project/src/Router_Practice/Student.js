import { Outlet, useNavigate } from "react-router-dom";

export default function Student() {
  const navi = useNavigate();
  return (
    <>
      <Outlet />
      <button onClick={() => navi(-1)}>이전 페이지로</button>
    </>
  );
}
