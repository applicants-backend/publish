import { useState, useEffect } from "react";
import axios from "axios";

export default function LifePrac2() {
  const [users, setUsers] = useState([]);

  // 실무에서 사용하는 방법
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // useEffect는 비동기함수를 직접적으로 지원하지 않음.
    // 비동기함수를 사용하려면 낸부에 비동기함수를 정희하고 바로 호출

    const axiosUser = async () => {
      const result = await axios({
        method: "GET",
        url: "http://jsonplaceholder.typicode.com/users",
      });

      setUsers(result.data);
      // 데이터를 다 갖고오게되면 그때서야 true
      setLoading(true);
    };

    axiosUser();

    return () => {
      console.log("연결 해제 되었습니다.");
    };
  }, []);

  useEffect(() => {
    console.log("유저 정보 업데이트", users.length);
  }, [users]);

  return (
    <>
      <div>
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
          <div>. . . 로딩중</div>
        )}
      </div>
    </>
  );
}
