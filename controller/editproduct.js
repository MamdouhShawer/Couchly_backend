import prod from "../models/products.js";

const editProduct = async (req, res) => {
  const id = req.params.id;

  prod
    .findByIdAndUpdate(id, {
      name: req.body.ProductName,
      quantity: req.body.quantity,
      price: req.body.price,
      description: req.body.description,
    })
    .then((result) => {
      req.session.user.name = req.body.ProductName;
      req.session.user.quantity = req.body.quantity;
      req.session.user.price = req.body.price;
      req.session.user.description = req.body.description;
      res.render("editProduct", { id: id });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default editProduct;
