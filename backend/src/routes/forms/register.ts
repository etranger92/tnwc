/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
//ADD USER IN THE DATABASE (DB) AFTER CHECKING SECURITY.
const Router = require('express');
const router = Router();
import { Request, Response } from 'express';
import { receiveMail, sendAnMail } from '../../logic/functions/email/transporter';
//import { Email } from '../../config/nodemaisl';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { checkInputSyntax } from '../../middleware/security';
/*
validator does not work with 
const { validatorRules, validator, checkInputSyntax } = require('../../middleware/security');
router.post('/accountNew', checkInputSyntax, validatorRules(), validator, async (req, res)
*/
router.post(
    '/inscription',
    /*checkInputSyntax,*/ async (req: Request, res: Response) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        try {
            const result = await receiveMail(req.body);
            await sendAnMail(req.body.email);
            const finalResult = result.messageId ? true : false;
            res.send(finalResult);
        } catch (err) {
            console.log('REGISTERED FAILED: ', err);
            res.send(false);
        }
    },
);

export { router as register };
