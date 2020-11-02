/* eslint-disable @typescript-eslint/no-var-requires */
import Router = require('express');
import { Request, Response } from 'express';
const router = Router();

router.get('/google-place', (_req: Request, res: Response) => {
    res.send(process.env.API);
});
export { router as googlePlace };
