import instance from "./instance.js";

export const deleteCardVisitApi = async (id) => {
  try {
    const resultCardDelete = await instance.delete(`${id}`);
    return resultCardDelete;
  } catch (err) {
    console.warn(err);
  }
};
