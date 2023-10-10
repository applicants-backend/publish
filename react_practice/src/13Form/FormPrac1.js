import { useForm } from "react-hook-form";

export default function FormPrac1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();
  console.log(register);

  // handleSubmit() : 두개의 함수를 받는데 하나는 유효할때 실행되는 함수(필수), 하나는 유효하지 않을때 실행되는 함수 (선택)

  const onVaild = (data) => {
    console.log("onValid", data);
  };

  //   const onInVaild = (err) => {
  //     console.log("onInValid", err);
  //   };

  console.log("errors", errors);
  //   console.log("watch", watch("username"));

  return (
    <>
      <form onSubmit={handleSubmit(onVaild)}>
        <label>이름 : </label>
        <input
          type="text"
          {...register("name", {
            required: "이름은 필수 항목입니다.",
            minLength: { message: "최소 2글자 이상을 입력하시오", value: 2 },
          })}
          placeholder="name"
        />
        {errors.name?.message}
        <br />
        <label>나이 : </label>
        <input
          type="number"
          {...register("age", {
            required: "나이를 입력하세요.",
            validate: {
              useAge: (v) =>
                Number(v) > 0 || "0 이상의 숫자만 입력 가능합니다.",
            },
          })}
          placeholder="age"
        />
        {errors.age?.message}

        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
