import {Router} from 'express';

const router=Router();

router.get('/', function(req, res, next) {
    res.render("pages/index",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;
