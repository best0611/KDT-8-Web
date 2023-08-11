const { Student, StudentProfile, Classes } = require("../models");
// index.js에서 불러온 모델이름으로 구조분해 할당한 것.

exports.index = (req, res) => {
  res.render("index");
};

// 학생 생성
exports.post_student = async (req, res) => {
  try {
    const { userid, password, email, name, major, enroll } = req.body;
    const user = await Student.create(
      {
        userid,
        password,
        email,
        StudentProfile: {
          name,
          major,
          enroll,
        },
      },
      {
        // include: 쿼리를 실행할 때 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션
        include: StudentProfile,
      }
    );
    console.log(user);
    res.send(user);
    // res.send({result: true})
  } catch (error) {
    console.log(error);
  }
};
exports.post_class = async (req, res) => {
  try {
    const { name, room, code, teacher_name, StudentId } = req.body;
    const classes = await Classes.create({
      name,
      room,
      code,
      teacher_name,
      StudentId,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.get_student = async (req, res) => {
  try {
    const student = await Student.findAll({
      attribute: ["userid", "email"],
      include: [{ model: StudentProfile, attributes: ["major", "enroll"] }], // 여러개 join 할 수 있으므로, 배열 형태로 넣어줌.
    });
    res.send(student);
  } catch (error) {
    console.log(error);
  }
};
