import instance from "./instance.js";

const getAllCards = async () => {
  try {
    const result = await instance.get("");
    return result;
  } catch (err) {
    console.warn(err);
  }
};

export { getAllCards };
