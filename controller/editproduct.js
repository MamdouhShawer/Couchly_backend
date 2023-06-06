import prod from "../models/products.js";


const editProduct = async (req, res) => {
    const { id } = req.params;
    //const { name, quantity, price, description } = req.body;
    const { name, quantity, price, description } = req.body;
    try {
        const product = await prod.findByIdAndUpdate(
            id,
            { name, quantity, price, description },
            { new: true }
          );
      
          if (!product) {
            return res.status(404).json({ message: "Product not found" });
          }
      
          res.status(200).json({ message: "Product updated successfully", product });
        } catch (error) {
          res.status(500).json({ message: "Failed to update product" });
        }
  };
  
  export default editProduct;