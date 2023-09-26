import "./Book.css";
import bookImage from "./bookexample.jpeg";
function BookComponent({ title, author, price, type }) {
  return (
    <div className="contentBox">
      <div className="headerBox">
        <h3 className="header">이번주 베스트셀러</h3>
        <img src={bookImage} alt="book" />
      </div>
      <div className="bookInfo">
        <div className="bookTitle">{title}</div>
        <div>저자: {author}</div>
        <div>판매가: {price}원</div>
        <div>구분: {type}</div>
      </div>
    </div>
  );
}

BookComponent.defaultProps = {
  title: "책 제목",
  author: "저자명",
  price: "0000",
  type: "책 종류",
};
export default BookComponent;
