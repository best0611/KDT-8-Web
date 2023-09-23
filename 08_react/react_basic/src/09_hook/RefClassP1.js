import { Component, createRef } from "react";

class RefClassP1 extends Component {
  writerRef = createRef();
  titleRef = createRef();
  constructor(props) {
    super(props);
    // state 초기화
    this.state = {
      inputWriter: "", //작성자
      inputTitle: "", //제목
      comments: [], //입력한 내용
    };
    //바인딩
    this.addComment = this.addComment.bind(this);
  }
  addComment() {
    if (this.state.inputWriter === "") {
      this.writerRef.current.focus();
    } else if (this.state.inputTitle === "") {
      this.titleRef.current.focus();
    } else {
      const newComment = {
        writer: this.state.inputWriter,
        title: this.state.inputTitle,
      };
      this.setState({
        comments: [...this.state.comments, newComment],
        inputWriter: "",
        inputTitle: "",
      });
    }
  }

  render() {
    const { inputWriter, inputTitle, comments } = this.state;
    return (
      <>
        <form>
          <label htmlFor="writer">작성자: </label>
          <input
            type="text"
            id="writer"
            value={inputWriter}
            onChange={(e) => this.setState({ inputWriter: e.target.value })}
            ref={this.writerRef}
          />
          <label htmlFor="title">제목: </label>
          <input
            type="text"
            id="title"
            value={inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
            ref={this.titleRef}
          />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>
        <br />
        <table border={1} cellSpacing={0} cellPadding={10}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((value, index) => {
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
      </>
    );
  }
}

export default RefClassP1;
