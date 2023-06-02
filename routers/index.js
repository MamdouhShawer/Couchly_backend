import {Router} from 'express';

const router=Router();  

router.get('/', function(req, res, next) {
    const user = (req.session && req.session.user) ? req.session.user : '';
    res.render('pages/index', { user: user });
});

export default router;
