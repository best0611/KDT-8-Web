import { useState } from "react";

export default function ToggleFunc() {
  const [status, setStatus] = useState(false);

  function handleToggle() {
    // setStatus(!status);
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }

  return (
    <div>
      <p>{status && "보여라"}</p>
      <button onClick={handleToggle}>토글</button>
    </div>
  );
}
