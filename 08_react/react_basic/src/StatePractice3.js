import { Component } from "react";

// let list = [];
class StatePractice3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      list: [],
      search: "writer",
      searchlist: [],
    };
    this.submit = this.submit.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.search = this.search.bind(this);
    this.showAll = this.showAll.bind(this);
  }
  submit() {
    const formdata = document.forms["writeForm"];
    console.log(formdata);
    const data = {
      number: this.state.number,
      writer: formdata.writer.value,
      title: formdata.title.value,
    };
    const newList = this.state.list;
    newList.push(data);
    this.setState((prevState) => ({
      number: prevState.number + 1,
      list: newList,
      searchlist: newList,
    }));
  }
  onSubmit = (e) => {
    e.preventDefault();
  };
  selectChange() {
    const search = document.getElementById("search").value;
    if (search === "title") {
      this.setState((prevState) => ({ search: "title" }));
    } else {
      this.setState((prevState) => ({ search: "writer" }));
    }
  }
  search() {
    const keyword = document.forms["searchForm"].keyword.value;
    // console.log(this.state);
    const lists = this.state.list;
    const search = this.state.search;
    let newList = [];
    if (search === "title") {
      newList = lists.filter((elem) => elem.title.includes(keyword));
    } else {
      newList = lists.filter((elem) => elem.writer.includes(keyword));
    }
    this.setState((prevState) => ({ searchlist: newList }));
  }
  showAll() {
    this.setState((prevState) => ({ searchlist: prevState.list }));
  }
  render() {
    return (
      <>
        <form name="writeForm" onSubmit={this.onSubmit}>
          작성자: <input type="text" placeholder="작성자" name="writer" />
          제목: <input type="text" placeholder="제목" name="title" />
          <button onClick={this.submit}>작성</button>
        </form>
        <br />
        <div>
          <form name="searchForm">
            <select onChange={this.selectChange} id="search">
              <option name="serach" value="writer">
                작성자
              </option>
              <option name="serach" value="title">
                제목
              </option>
            </select>
            <input type="text" placeholder="검색어" name="keyword" />
            <button type="button" onClick={this.search}>
              검색
            </button>
            <button type="button" onClick={this.showAll}>
              전체
            </button>
          </form>
        </div>
        <br />
        <table
          cellSpacing={"0"}
          border={"1px"}
          cellPadding={"20"}
          style={{ width: "80%", textAlign: "center" }}
        >
          <thead>
            <tr>
              <td>번호</td>
              <td>제목</td>
              <td>작성자</td>
            </tr>
          </thead>
          <tbody>
            {this.state.searchlist.length > 0 ? (
              this.state.searchlist.map((value) => {
                return (
                  <tr key={value.number}>
                    <td>{value.number}</td>
                    <td>{value.title}</td>
                    <td>{value.writer}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={"3"}>검색 결과가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  }
}

export default StatePractice3;
