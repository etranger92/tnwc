/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { queryDataBase } from '../datas/sql/queryDB';
//: Promise<boolean>
// eslint-disable-next-line no-unused-vars
const accountCreation = async (value: any) => {
    const sqlNewUser = `INSERT INTO user VALUES(NULL,"2046-09-22")`;
    const isUserSaved = await queryDataBase(sqlNewUser);
    const result = isUserSaved[0].affectedRows === 1 ? true : false;
    return result;
};
export { accountCreation };
