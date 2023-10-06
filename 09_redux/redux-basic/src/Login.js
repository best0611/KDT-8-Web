import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "./store/login";

export default function Login() {
  const login = useSelector((state) => state.login.isLogin);
  console.log(login);
  const dispatch = useDispatch();
  const loginFunc = () => {
    dispatch(loginAction.login());
  };
  const logoutFunc = () => {
    dispatch(loginAction.logout());
  };
  return (
    <>
      <br />
      {login ? (
        <>
          <div>로그인하셨습니다.</div>
          <button>로그아웃</button>
        </>
      ) : (
        <>
          <div>로그아웃 중...</div>
          <button>로그인</button>
        </>
      )}
    </>
  );
}
