import prod from "../models/products.js";


const deleteProd = async (req, res) => {
  try {
    const id = req.params.id;

    await prod.findByIdAndDelete(id);

    res.status(200).json({ message: "product deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product." });
  }
};

export default deleteProd;