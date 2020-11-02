/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Request, Response, NextFunction } from 'express';
//import { check, validationResult } from '../config/expressValidator.js';
import { TESTS } from '../logic/functions/test/test';

type TMessage = {
    text: string;
    name: string;
    password: string;
    email: string;
};
const messageError: { [key: string]: string } = {
    text: 'Error text',
    name: 'Error text',
    password: 'Error password',
    email: 'Error email',
};

const checkInputSyntax = (req: Request, res: Response, next: NextFunction) => {
    const errors: unknown[] = [];
    let indice;
    //Object to Array
    const inputs = req.body;
    for (const key in inputs) {
        if (inputs.hasOwnProperty(key)) {
            indice = TESTS.isEntryValid(key, inputs[key]);
        }
        if (!indice) {
            errors.push({ [key]: `${messageError[key]}` });
        }
    }
    /*    indice = TESTS.isEntryValid(item[keyObject], keyObject);
        if (!indice) {
            errors.push({ [type]: `${messageError[type]}` });
        }
    });
    if (errors.length) {
        console.log(errors);
        return res.send(errors);
    }*/
    //Check

    next();
};
/*
Does not work (with axios) if you are not using the traditional form.submit() 
//Will define "validationResult"
const validatorRules = () => {
    return [
        // check('name', 'error my friend').matches(/^[a-zA-Z0-9.-\/@\s]+$/),
        check('data.name', 'error my friend').isLength(2),
        check('password', 'hello my dear').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[#?!@$%^&*-]).{8,45}/),
        check('surname', 'error my friend').matches(/^[a-zA-Z0-9.-\/@\s]+$/),
        check('email', 'error my friend').isEmail(),
    ];
};
const validator = (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body, 'YOUR BODY VALID');
    console.log(errors, 'your errors');

    //console.log(req.body,"hi")
    // eslint-disable-next-line no-console

    if (errors.isEmpty()) {
        return next();
    }
    next();
    // res.send(errors);
};
*/
export {
    //  validatorRules,
    // validator,
    checkInputSyntax,
};
