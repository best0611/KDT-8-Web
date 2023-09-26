import { useSearchParams } from "react-router-dom";

export default function Params() {
  const [params, setParams] = useSearchParams();
  const name = params.get("name");
  return (
    <>
      <div>실제 이름은 {name}</div>
    </>
  );
}
