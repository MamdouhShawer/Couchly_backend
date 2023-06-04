// dashboardController.js

import Users from '../models/user.js';

export async function showDashboard(req, res) {
  try {
    const userCount = await Users.countDocuments();
    res.render('pages/dashboard', { title:"Couchly | dashboard",showDashboard:userCount });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}