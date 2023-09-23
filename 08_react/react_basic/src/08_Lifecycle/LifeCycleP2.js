import { useState, useEffect } from "react";
import axios from "axios";

export default function LifeCycleP2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // useEffect는 비동기함수를 직접적으로 지원하지 않음
    // 비동기함수를 사용하려면, 내부에 비동기 함수를 정의하고 바로 호출
    const axiosUser = async () => {
      const result = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
      });
      setUsers(result.data);
      setLoading(true);
    };
    axiosUser();
  }, []);

  useEffect(() => {
    console.log("유저 정보 업데이트", users.length);
    return console.log("연결해제 완료");
  }, [users]);

  return (
    <div>
      {/* loading이라는 state 추가하여, 경우에 따라 div, ul 구분할 수 있음 */}
      {loading ? (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
