import { useRef, useState } from "react";

export default function RefFuncP1() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comments, setComments] = useState([]);
  const [searchType, setSearchType] = useState("writer");
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allTable, setAllTable] = useState(true);
  const writerRef = useRef();
  const titleRef = useRef();
  const checkValue = () => {
    if (inputWriter.trim().length === 0) {
      writerRef.current.focus();
      return false;
    }
    if (inputTitle.trim().length === 0) {
      titleRef.current.focus();
      return false;
    }
    return true;
  };
  const addComment = () => {
    if (!checkValue()) return;
    setComments([...comments, { writer: inputWriter, title: inputTitle }]);
    setInputTitle("");
    setInputWriter("");
  };
  const searchComment = () => {
    const results = comments.filter((value) => {
      if (value[searchType].includes(searchWord)) {
        return true;
      } else {
        return false;
      }
    });
    setSearchResults(results);
    setAllTable(false);
  };
  const showAll = () => {
    setAllTable(true);
  };
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          placeholder="작성자"
          onChange={(e) => setInputWriter(e.target.value)}
          ref={writerRef}
        />
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          placeholder="제목"
          onChange={(e) => setInputTitle(e.target.value)}
          ref={titleRef}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <br />
      <form>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
        <button type="button" onClick={showAll}>
          전체
        </button>
      </form>
      <br />
      {allTable && (
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
      )}
      {!allTable && (
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.length > 0 ? (
              searchResults.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.title}</td>
                    <td>{value.writer}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3}>검색결과가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
