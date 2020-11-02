/* eslint-disable @typescript-eslint/no-var-requires */
import Router = require('express');
import { Request, Response } from 'express';
const router = Router();

router.get('/', (_req: Request, res: Response) => {
    res.sendFile('index.html');
});
export { router as home };
