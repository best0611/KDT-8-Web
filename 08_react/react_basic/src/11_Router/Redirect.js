import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Redirect() {
  const navi = useNavigate();
  useEffect(() => {
    // '/'를 앞에 써주면 절대경로(localhost:3000/user), 안쓰면 계속 이어서 경로 설정됨(localhost:3000/redirect/user)
    navi("/user");
  }, []);
  return <div>Redirect</div>;
}
