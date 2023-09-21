import { Component } from "react";
import "./App.css";

class BoardAns extends Component {
  constructor(props) {
    super(props);

    // 초기화해주는 작업
    this.state = {
      inputWriter: "",
      inputTitle: "",
      comments: [],
    };
    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
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
  render() {
    return (
      <>
        <form>
          <label htmlFor="userInput">작성자 : </label>
          <input
            id="userInput"
            type="text"
            value={this.state.inputWriter}
            onChange={(e) => this.onChange(e)}
          />
          <label htmlFor="titleInput"> 제목 : </label>
          <input
            id="titleInput"
            type="text"
            value={this.state.inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button onClick={this.addComment} type="button">
            {" "}
            작성
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
            {this.state.comments.map((value, index) => {
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
