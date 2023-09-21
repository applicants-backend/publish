import { Component } from "react";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      title: "",
      number: 0,
      tableData: [],
      searchField: "user",
      searchText: "",
      filteredData: null,
    };
    this.createContent = this.createContent.bind(this);
  }

  handleInputChange = (e, field) => {
    e.preventDefault();
    this.setState({ [field]: e.target.value });
  };

  handleSearchChange = (e, field) => {
    e.preventDefault();
    this.setState({ [field]: e.target.value });
  };

  createContent = () => {
    this.setState((prevState) => ({
      tableData: [
        ...prevState.tableData,
        {
          user: prevState.user,
          title: prevState.title,
          number: prevState.number + 1,
        },
      ],
      user: "",
      title: "",
      number: prevState.number + 1,
    }));
  };

  performSearch = () => {
    const { searchField, searchText, tableData } = this.state;
    const filteredData = tableData.filter((row) =>
      row[searchField].includes(searchText)
    );
    this.setState({ filteredData });
  };

  render() {
    const { user, title, searchField, searchText, tableData, filteredData } =
      this.state;

    return (
      <>
        <form onSubmit={(e) => e.preventDefault()}>
          <span>
            작성자 :{" "}
            <input
              type="text"
              placeholder="작성자"
              value={user}
              onChange={(e) => this.handleInputChange(e, "user")}
            />
          </span>
          <span>
            제목 :{" "}
            <input
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => this.handleInputChange(e, "title")}
            />
            <button type="button" onClick={this.createContent}>
              제출하기
            </button>
          </span>
        </form>
        <form>
          <select
            value={searchField}
            onChange={(e) => this.handleSearchChange(e, "searchField")}
          >
            <option value="user">작성자</option>
            <option value="title">제목</option>
          </select>
          <input
            type="text"
            placeholder="검색어"
            value={searchText}
            onChange={(e) => this.handleSearchChange(e, "searchText")}
          />
          <button type="button" onClick={this.performSearch}>
            검색
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>작성자</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            {(filteredData || tableData).map((row, index) => (
              <tr key={index}>
                <td>{row.number}</td>
                <td>{row.user}</td>
                <td>{row.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Board;
