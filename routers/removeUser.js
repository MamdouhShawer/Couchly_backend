import { Router } from "express";
import Users from "../models/user.js";
import deleteUser from "../controller/Removeuser.js";
import display from "../controller/Removeuser.js";

const router = Router();

router.get("/", (req, res) => {
  console.log("removeUser.js: GET /removeUser");
  const page = req.query.page || 1;
  const limit = 10; 

  Users.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .then((result) => {
      Users.estimatedDocumentCount().then((count) => {
        res.render("pages/removeUser", {
          Users: result,
          title: "Couchly | removeUser",
          currentPage: parseInt(page),
          totalPages: Math.ceil(count / limit),
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Add the route for deleteUser
router.delete("/delete/:id", deleteUser);

export default router;
