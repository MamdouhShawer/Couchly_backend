import prod from "../models/products.js";

const deleteproduct= async (req, res) => {
  try {
    const id = req.params.id;

    await prod.findByIdAndDelete(id);

    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user." });
  }
};

export default deleteproduct;