import instance from "./instance.js";

const token = localStorage.getItem("token");

const getAllCards = async () => {
  try {
    const result = await instance.get("");
    return result;
  } catch (err) {
    console.log(err);
  }
};

export { getAllCards };
