import { Component } from "react";

class ClassState3 extends Component {
  constructor(props) {
    super(props);
    // state 초기화
    this.state = {
      inputWriter: "", //작성자
      inputTitle: "", //제목
      comments: [], //입력한 내용
    };
    //바인딩
    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  onChange(e) {
    // console.log(e.target);
    this.setState({ inputWriter: e.target.value });
  }
  addComment() {
    // state는 변화된 값을 계속 갖고 있는 것. 이것을 활용하자. (기존의 document.get~~ 방법말고)
    const newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };
    // spread 연산자를 이용하여 배열 추가
    // const a = []
    // const b = {name:'홍길동', title: '안녕하세요'}
    // const c = [...a, b]
    // console.log(c) // [{name: '홍길동', title: '안녕하세요'}]
    this.setState({
      comments: [...this.state.comments, newComment],
      inputWriter: "",
      inputTitle: "",
    });
    // concat 이용해서도 가능.
  }

  render() {
    const { inputWriter, inputTitle, comments } = this.state;
    return (
      <>
        <form>
          {/* JS에서 사용하던 for는 htmlFor으로 바뀜 */}
          <label htmlFor="writer">작성자: </label>
          {/* JSX에서 id 사용한 경우, 해당 컴포넌트 사용에 주의 */}
          {/* onChange: input, textarea, select 값이 변경될 때마다 발생하는 이벤트 핸들러 */}
          <input
            type="text"
            id="writer"
            value={inputWriter}
            onChange={(e) => this.onChange(e)}
          />
          <label htmlFor="title">제목: </label>
          <input
            type="text"
            id="title"
            value={inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>
        <table border={1} cellSpacing={0}>
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

export default ClassState3;
