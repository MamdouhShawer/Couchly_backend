import Users from "../models/user.js";

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    await Users.findByIdAndDelete(id);

    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user." });
  }
};

const paging = async (req, res) => {
  console.log("removeUser.js: GET /removeUser");
  const page = req.query.page || 1;
  const limit = 5;

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
};

const collectFunctions = { paging, deleteUser };
export default collectFunctions;
