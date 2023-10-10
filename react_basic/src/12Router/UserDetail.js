import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "./User";
// import Comment from "./Comment";

export default function UserDetail() {
  // Route에 /user/:userId
  const { userId } = useParams();
  //   console.log(params);

  return (
    <>
      <div>UserDetail</div>
      <div>
        사용자 {userId}은/는 {users[Number(userId) - 1].name} 입니다.
      </div>
      <Link to="cooment">Comment</Link>
      <Outlet />
    </>
  );
}
