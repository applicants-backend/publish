import { Link, useSearchParams } from "react-router-dom";

export const users = [
  {
    id: 1,
    name: "홍길동",
    comments: [{ text: "안녕하세요." }],
  },
  {
    id: 2,
    name: "이춘향",
    comments: [{ text: "반갑습니다." }, { text: "어서오세요." }],
  },
  {
    id: 3,
    name: "임꺽정",
    comments: [{ text: "좋은 아침이에유." }, { text: "어후." }],
  },
];

export default function User() {
  // searchParams 는 쿼리스트링 값을 가져오는것
  // setSearchParams 는 쿼리 스트링 값을 할당하는 것
  //   const [serachParams, setSearchParams] = useSearchParams();
  //   console.log(serachParams.get("mode"));
  //   console.log(serachParams.get("name"));
  //   setTimeout(() => {
  //     setSearchParams({ mode: "Light", name: "Gildong" }, 30000);
  //   });

  return (
    <>
      <div>User</div>
      <div>
        <ul>
          {users.map((value) => {
            return (
              <li key={value.id}>
                <Link to={`/user/${value.id}`}> {value.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
