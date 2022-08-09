import instance from "./instance.js";

export const deleteCardVisitApi = async (id) => {
  const resultCardDelete = await instance.delete(`${id}`);
  return resultCardDelete;
};
