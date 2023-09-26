import { useOutletContext } from "react-router-dom";

export default function Comment() {
  const { comment } = useOutletContext();
  console.log(comment);
  return (
    <div>
      {comment.map((value, index) => {
        return <div key={index}>{value.text}</div>;
      })}
    </div>
  );
}
