import { Outlet, useParams, useSearchParams } from "react-router-dom";

export default function User() {
  const [params, setParams] = useSearchParams();
  const realName = params.get("name");
  const { name } = useParams();
  return (
    <>
      <div>학생의 이름은 {name}입니다.</div>
      <Outlet context={realName} />
    </>
  );
}
