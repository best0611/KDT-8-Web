import { useState } from "react";

export default function LoginForm({ state, dispatch }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const userinfo = { realId: "banana", realPw: "4321" };

  const handleLoginForm = (event) => {
    event.preventDefault();
    const { realId, realPw } = userinfo;

    if (id === realId && pw === realPw) dispatch({ type: "LOGIN_SUCCESS" });
    else if (id !== realId && pw === realPw) dispatch({ type: "MISS_ID" });
    else if (id === realId && pw !== realPw) dispatch({ type: "MISS_PW" });
    else if (id !== realId && pw !== realPw)
      dispatch({ type: "LOGIN_FAILURE" });
  };

  return (
    <form action="" onSubmit={handleLoginForm}>
      <label htmlFor="id">ID</label>
      <input id="id" type="text" onChange={(e) => setId(e.target.value)} />
      <br />

      <label htmlFor="pw">PW</label>
      <input id="pw" type="password" onChange={(e) => setPw(e.target.value)} />
      <br />

      <button>Login</button>
      <br />

      <p>{state.message}</p>
    </form>
  );
}
