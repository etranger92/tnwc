import { mysql, config } from '../../config/sql';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const queryDataBase = async (sql: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let promisePool: any;
    try {
        //Get connected to database
        const pool = mysql.createPool(config);
        promisePool = pool.promise();
        //Query
        const dataReceived = await promisePool.query(sql);
        //Data received
        return dataReceived;
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err, 'this is your error');
    } finally {
        // promisePool.release();
    }
};

export { queryDataBase };
