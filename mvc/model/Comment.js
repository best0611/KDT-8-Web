// 데이터베이스 선택하는 부분
// (우선은 DB 없이 진행했음)

exports.commentInfos = () => {
  // sql문 실행되었다고 가정하고 반환
  return [
    {
      id: 1,
      userId: "hello",
      date: "2023-08-01",
      comment: "안녕하세요~~",
    },
    {
      id: 2,
      userId: "helloWorld",
      date: "2023-08-03",
      comment: "반가워요~~",
    },
    {
      id: 3,
      userId: "coding",
      date: "2023-08-04",
      comment: "안녕하세요~~",
    },
    {
      id: 4,
      userId: "codingon",
      date: "2023-08-05",
      comment: "반가워요~~",
    },
  ];
};
