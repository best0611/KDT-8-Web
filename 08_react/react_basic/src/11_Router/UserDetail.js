import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "./User";

export default function UserDetail() {
  //   const params = useParams();
  //   console.log(params); // Route에서 설정한 path의 :userId를 읽어옴
  const { userId } = useParams(); // 객체 구조분해 할당으로 바로 userId 값 받아옴
  return (
    <>
      <div>
        사용자{userId}은/는 {users[Number(userId) - 1].name}입니다.
      </div>
      <Link to="comment">Comment</Link>
      <Outlet context={{ comment: users[Number(userId) - 1].comment }} />
    </>
  );
}
