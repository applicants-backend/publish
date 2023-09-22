import { useState } from "react";

export default function Board() {
  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comments, setComments] = useState([]);

  const [inputSearch, setInputSearch] = useState("");
  const [searchType, setSearchType] = useState("");
  const [result, setResult] = useState([]);

  const onChangeName = (e) => {
    setInputName(e.target.value);
  };
  const onChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const createTable = () => {
    const newComment = {
      user: inputName,
      title: inputTitle,
    };
    setComments(
      (comments) => [...comments, newComment],
      setInputName(""),
      setInputTitle("")
    );
  };

  const searchComment = () => {
    const searchResult = comments.filter((value) => {
      if (!value[searchType].inclueds[inputSearch]) {
        return false;
      }
      return true;
    });
    setResult(searchResult);
  };

  return (
    <div>
      <form>
        <label htmlFor="nameInput">작성자</label>
        <input
          id="nameInput"
          type="text"
          value={inputName}
          onChange={(e) => onChangeName(e)}
        ></input>
        <label htmlFor="titleInput">제목</label>
        <input
          id="titleInput"
          type="text"
          value={inputTitle}
          onChange={(e) => onChangeTitle(e)}
        ></input>
        <button type="button" onClick={createTable}>
          제출하기
        </button>
      </form>

      <form>
        {/*   onchange => input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}

        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        ></input>
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.user}</td>
                <td>{value.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>검색결과</h4>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {result.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
