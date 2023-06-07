import { Router } from 'express';
var router = Router();

/* GET /about page. */
router.get('/', function(req, res,  ) {
    req.session.wishlist.destroy();
    res.redirect('pages/shop',{ user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;