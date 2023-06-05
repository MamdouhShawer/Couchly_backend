// dashboardController.js

import Users from "../models/user.js";
import check from "../models/chckout.js";
import Prod from "../models/products.js";

export async function showDashboard(req, res) {
  try {
    const userCount = await Users.countDocuments();
    const checkCount = await check.countDocuments();
    const Prices = await Prod.TotalPrice;
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
