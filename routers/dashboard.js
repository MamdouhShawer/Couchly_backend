import { Router } from "express";
import { showDashboard } from "../controller/dash.js";

const router = Router();

router.get('/',function(req,res){
    if (req.session.user !== undefined && req.session.user.type === 'admin') {
        console.log('dashboard.js: GET /dashboard');

        res.render("pages/dashboard",{ user: (req.session.user === undefined ? "" : req.session.user) });
    }
    else {
        res.render('pages/err', { err: "You are not an admin ,  you can't access this page ", user: (req.session.user === undefined ? "" : req.session.user) })
    }
});

export default router;
