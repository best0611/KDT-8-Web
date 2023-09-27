import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // handleSubmit: 두개의 함수를 받는다. (하나는 유효할 때 실행되는 함수(필수), 나머지 하나는 유효하지 않을 때 실행되는 함수(선택))
  const onValid = (data) => {
    console.log(data);
  };
  //   const onInvalid = (err) => {
  //     console.log(err);
  //   };
  //   console.log(watch("password"));
  console.log("error", errors);
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register("username", {
            required: "이름을 입력하세요",
            minLength: { message: "최소 두글자 이상 작성하세요.", value: 2 },
          })}
          placeholder="username"
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          {...register("email", {
            required: "이메일을 입력하세요",
            validate: {
              useGmail: (value) => {
                return (
                  value.includes("gmail.com") || "gmail로만 가입 가능합니다."
                );
              },
            },
          })}
          placeholder="email"
        />
        {errors.email?.message}
        <br />
        <input
          type="password"
          {...register("password")}
          placeholder="password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
