// const User = require("../model/User");
import * as User from "../model/User.js";

export const main = (req, res) => {
  res.render("index");
};
// exports.main = (req, res) => {
//   res.render("index");
// };
export const getsignup = (req, res) => {
  res.render("signup");
};
// exports.getsignup = (req, res) => {
//   res.render("signup");
// };
export const postsignup = async (req, res) => {
  try {
    await User.postsignup(req.body);
    res.send({ result: true });
  } catch {
    console.log(error);
    res.send({ result: false });
  }
};

// exports.postsignup = (req, res) => {
//   console.log(req.body);
//   User.signup(req.body, () => {
//     res.send({ result: true });
//   });
// };

export const getsignin = (req, res) => {
  res.render("signin");
};

export const postsignin = async (req, res) => {
  try {
    const result = await User.signin(req.body);
    if (result.length > 0) {
      res.send({ result: true, data: result[0] });
    } else {
      res.send({ result: false, data: null });
    }
  } catch (error) {
    console.log(error);
  }
};

export const postprofile = async (req, res) => {
  try {
    const result = await User.postprofile(req.body.profile);
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    } else {
      res.redirect("/user/signin");
    }
  } catch (error) {
    console.log(error);
  }
};

export const editprofile = async (req, res) => {
  try {
    const result = await User.editprofile(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

export const delprofile = async (req, res) => {
  try {
    const result = await User.delprofile(req.query.indexId);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};
