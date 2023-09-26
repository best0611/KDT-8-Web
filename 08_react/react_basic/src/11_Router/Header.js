import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  // useNavigate(): Link 컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능
  const navi = useNavigate();
  const onClick = () => {
    // navi(-1);
    // 이전 페이지로 이동
    navi("redirect");
  };

  //Link: 유저가 클릭
  return (
    <div>
      <ul>
        <li>
          {/* a 태그 이용 시, 페이지가 새로고침하면서 이동 */}
          {/* 동적 웹페이지를 제공하는 리액트에서, 새로고침으로 이동하는 것이 올바른 방법은 아님 */}
          {/* <a href="/about">About</a> */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* Link를 이용하면, 새로고침 없이 컴포넌트만 이동함. 이것이 리액트의 핵심. */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <button onClick={onClick}>Redirect</button>
        </li>
      </ul>
    </div>
  );
}
