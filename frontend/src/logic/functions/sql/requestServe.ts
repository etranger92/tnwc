import axios from "axios";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const serverGet = async (url: string, params?: any): Promise<any> => {
  try {
    const result = await axios.get(url, {
      params,
    });
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const serverPost = async (url: string, body: any): Promise<any> => {
  try {
    const result = await axios.post(url, body);
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export { serverGet, serverPost };
/*    const result = await axios.post(url, body, {
      headers: { "content-type": "text/json" },
    });*/
