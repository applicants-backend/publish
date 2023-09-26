import { useState, useEffect } from "react";
import "./App.css";

function PostList() {
  // props 로 사용하고싶다면
  // const {number} = props; 위아래 props 를 작성하고 사용가능
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(() => false), 2000);
    return () => {
      clearTimeout(timer);
    }; // 타이머 클리어
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <form className="container">
            <div className="postList">Post List</div>
            <div>로딩중</div>
          </form>
        ) : (
          <form className="container">
            <div className="postList">Post List</div>
            <div className="title">
              <span>1 : </span>
              sunt aut facere repellat provident occaecati excepturi optio
              reprehenderit
            </div>
            <div className="body">
              quia et suscipit suscipit recusandae consequuntur expedita et cum
              reprehenderit molestiae ut ut quas totam nostrum rerum est autem
              sunt rem eveniet architecto
            </div>

            <div className="title">
              <span>2 : </span>
              qui est esse
            </div>
            <div className="body">
              est rerum tempore vitae sequi sint nihil reprehenderit dolor
              beatae ea dolores neque fugiat blanditiis voluptate porro vel
              nihil molestiae ut reiciendis qui aperiam non debitis possimus qui
              neque nisi nulla
            </div>

            <div className="title">title</div>
            <div className="body">body</div>

            <div className="title">title</div>
            <div className="body">body</div>
          </form>
        )}
      </div>
    </>
  );
}

export default function UseEffectPractice() {
  return (
    <>
      <PostList />
    </>
  );
}
