import Users from "../models/user.js";

const userForm = async (req, res) => {
    console.log("UserForm AddU.js")
  const reg = new Users({
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Username: req.body.Username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmpassword,
    type: req.body.type,
  });

  console.log(req.body);
  reg
    .save()
    .then((result) => {
      res.redirect("/removeUser");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default userForm;
