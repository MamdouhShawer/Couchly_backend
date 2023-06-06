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
    if (req.session.user !== undefined && req.session.user.type === "admin") {
      console.log("dashboard.js: GET /dashboard");
      const userCount = await Users.countDocuments();
      const checkCount = await check.countDocuments();
      const Prices = await TotalPrice;
      const recentOrder = await check.find();
      res.render("pages/dashboard", {
        title: "Couchly | dashboard",
        showDashboard: userCount,
        OrdersCount: checkCount,
        TotalPrice: Prices,
        recentOrder,
        user: req.session.user === undefined ? "" : req.session.user,
      });
    } else {
      res.render("pages/err", {
        err: "You are not an admin ,  you can't access this page ",
        user: req.session.user === undefined ? "" : req.session.user,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

export default TotalPrice;
