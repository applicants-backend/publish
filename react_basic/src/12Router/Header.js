import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  // useNavigate : Link 컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능
  const navi = useNavigate();
  const onClick = () => {
    navi("redirect");
  };
  return (
    <>
      <div>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            <Link to="/user">User</Link>
          </li>
          <li>
            <button onClick={onClick}>Redirect</button>
          </li>
        </ul>
      </div>
    </>
  );
}
