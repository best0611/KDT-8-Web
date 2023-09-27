import { useForm } from "react-hook-form";
export default function FormPrac() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const canSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(canSubmit)}>
        <input
          type="text"
          placeholder="이름"
          {...register("name", { required: "이름은 필수 항목입니다." })}
        />
        {errors.name?.message}
        <br />
        <input
          type="text"
          placeholder="나이"
          {...register("age", {
            validate: {
              minAge: (value) => {
                return value > 0 || "0이상의 숫자만 입력 가능합니다.";
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
