import { PostList } from "./UseEffectPractice";

export default function UseEffectPractice() {
  return (
    <>
      <div>
        <div>Post List</div>
        <form>
          <div>id</div>
          <div>title</div>
          <div>body</div>
          <PostList />
        </form>
      </div>
    </>
  );
}
