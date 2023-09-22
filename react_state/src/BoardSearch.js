import { Component } from "react";
import "./App.css";

class BoardAns extends Component {
  constructor(props) {
    super(props);

    // 초기화해주는 작업
    this.state = {
      inputWriter: "", // 작성자
      inputTitle: "", // 제목
      comments: [], // 내용

      inputSearch: "", // 검색내용
      searchType: "",
      result: [],
    };
    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.searchComment = this.searchComment.bind(this);
  }

  onChange(event) {
    this.setState(() => ({
      inputWriter: event.target.value,
    }));
  }

  // 변하는 갓을 갖고있기 떄문에 객체로 만들어서 다시 보내기만 하면 된다.

  addComment() {
    const newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };
    console.log(this.state.inputWriter);
    console.log(this.state.inputTitle);
    this.setState(() => ({
      comments: [...this.state.comments, newComment],
      inputTitle: "",
      inputWriter: "",
    }));
  }

  searchComment() {
    const searchResult = this.state.comments.filter((value) => {
      //   console.log(value);
      //   value[this.state.searchType];
      console.log(value[this.state.searchType]);
      const type = value[this.state.searchType];
      const include = type.includes(this.state.inputSearch);
      if (!include) {
        return false;
      }
      return true;
    });
    this.setState({ result: searchResult });
  }

  render() {
    const {
      inputWriter,
      inputTitle,
      comments,
      inputSearch,
      searchType,
      result,
    } = this.state;

    return (
      <>
        <form>
          <label htmlFor="userInput">작성자 : </label>
          <input
            id="userInput"
            type="text"
            value={inputWriter}
            onChange={(e) => this.onChange(e)}
          />
          <label htmlFor="titleInput"> 제목 : </label>
          <input
            id="titleInput"
            type="text"
            value={inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button onClick={this.addComment} type="button">
            {" "}
            작성
          </button>
        </form>
        <form>
          {/*   onchange => input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}

          <select
            value={searchType}
            onChange={(e) => this.setState({ searchType: e.target.value })}
          >
            <option value="writer">작성자</option>
            <option value="title">제목</option>
          </select>
          <input
            type="text"
            value={inputSearch}
            onChange={(e) => this.setState({ inputSearch: e.target.value })}
          ></input>
          <button type="button" onClick={this.searchComment}>
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
                  <td>{value.writer}</td>
                  <td>{value.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default BoardAns;
