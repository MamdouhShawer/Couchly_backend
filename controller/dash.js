// dashboardController.js

import Users from "../models/user.js";
import check from "../models/chckout.js";
import prod from "../models/products.js";

const TotalPrice = prod
  .aggregate([{ $group: { _id: null, total: { $sum: "$price" } } }])
  .then((result) => {
    return result[0].total;
  })
  .catch((error) => {
    console.error(error);
  });

export async function showDashboard(req, res) {
  try {
    const userCount = await Users.countDocuments();
    const checkCount = await check.countDocuments();
    const Prices = TotalPrice;
    const id = req.params.id;
    await prod.find(id);
    res.render("pages/dashboard", {
      title: "Couchly | dashboard",
      showDashboard: userCount,
      OrdersCount: checkCount,
      TPrice: Prices,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

export default TotalPrice;
