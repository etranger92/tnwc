const objectToArray = (entry: any) =>
  Object.entries(entry).map(([key, value]) => ({ key, value }));

const inputsToArray = (entry: any) => {
  const datas: any[] = [];
  entry.map((element: any) => {
    datas.push({ [element.name]: element.value });
    return element;
  });
  return datas;
};

export { objectToArray, inputsToArray };
