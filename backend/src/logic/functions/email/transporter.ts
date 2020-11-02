/* eslint-disable @typescript-eslint/no-explicit-any */
import { transport } from '../../../config/nodemail';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const receiveMail = async (body: any) => {
    try {
        const notif = await transport.sendMail({
            from: process.env.USER_MAIL,
            to: process.env.USER_MAIL,
            subject: 'New demand', // Subject line
            //text: "Hello world?", // plain text body
            html: `<div>
            <h3> You have received the following message </h3>
            <ul> 
            <li> name: ${body.name} </li>
            <li> surname: ${body.surname} </li>
            <li> email: ${body.email} </li>
            <li> interest: ${body.interest} </li>
            <li> textarea: ${body.txtarea} </li>
            </ul>
         </div>`,
        });
        return notif;
    } catch (e) {
        return e;
    }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const sendAnMail = async (email: string) => {
    try {
        await transport.sendMail({
            from: 'admin@thenorthwestcollege.co.uk', // sender address
            to: email, // list of receivers
            subject: 'Received ✔', // Subject line
            //text: "Hello world?", // plain text body
            html:
                "<div><div class=header; style='padding:0; margin:0;margin:2rem; display:flex; position:relative;'><h1 style='margin:auto; color:#454545; border-bottom: 2px solid #9b8a3c'> The North West College </h1> </div> <p style='color:#454545;'>Dear Student, </p><p style='color:#454545;'> Thank you for reaching out to us. We have received your email, and our support team will be in touch within 48 hours.</p><p style='color:#454545;'>Please note that our working hours are 9am to 6pm from Monday to Friday. We regret the delay in reply over the non-working hours. </p><p style='color:#454545;'>Thank you for your understanding.</p><p style='color:#454545;'>Best regards,</p><ul style='list-style:none; padding-left:0px;text-weight:bold;color:#454545;'><li><span style='color:#454545; font-weight:600;'> Support Team </span></li><li></li></ul></div>",
        });
    } catch (e) {
        return e;
    }
};

export { receiveMail, sendAnMail };
