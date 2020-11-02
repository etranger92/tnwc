/* eslint-disable @typescript-eslint/no-var-requires */
import Router from 'express';
const router = Router();

router.get('*', (_req, res) => {
    res.render('contain/errors/error404.hbs', {
        layout: 'error',
    });
});

export const error404 = router;
