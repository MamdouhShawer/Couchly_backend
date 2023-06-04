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

export default deleteUser;
