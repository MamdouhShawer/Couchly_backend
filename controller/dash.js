// dashboardController.js

import Users from "../models/user.js";
import check from "../models/chckout.js";

export async function showDashboard(req, res) {
  try {
    const userCount = await Users.countDocuments();
    const checkCount = await check.countDocuments();
    
    res.render("pages/dashboard", {
      title: "Couchly | dashboard",
      showDashboard: userCount,
      OrdersCount:checkCount
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

