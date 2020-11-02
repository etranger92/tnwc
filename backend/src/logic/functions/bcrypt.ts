/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
/****************************BCRYPTS ******************/
import * as bcrypt from 'bcryptjs';

const bcryptHash = async (password: string) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err, +'Bcrypt error');
    }
};

const bcryptCompare = async (password: string, hash: string) => {
    const isEqual: boolean = await bcrypt.compare(password, hash);
    return isEqual;
};

export { bcryptCompare, bcryptHash };
