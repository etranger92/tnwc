// serverPost
import axios from 'axios';
import { serverGet, serverPost } from "../../functions/sql/requestServe.ts";
jest.mock('axios');

describe("Check Axios get and post request", () => {
      const data = ["one","two"];     
    it('should be true as axios.get return an object', async () => {
        let params = {
            name: "hello",
        };
         axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(serverGet("/someRoute", params)).resolves.toEqual(data);
    });
    it('should be true as axios.post return an object', async () => {
        let data = {
            name: "hello",
        };
 axios.post.mockImplementationOnce(() => Promise.resolve(data));
        await expect(serverPost("/someRoute", data)).resolves.toEqual(data);
    });
});