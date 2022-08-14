import instance from "./instance.js";

const createCard = async (body) => {
  try {
    const { status, data } = await instance.post("", body);
    if (status === 200) {
      return data;
    } else {
      console.warn(status, data);
    }
  } catch (err) {
    console.error(err);
  }
};

export default createCard;
