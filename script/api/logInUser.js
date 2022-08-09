import instance from "./instance.js";
import { removeBtnLogIngAndAddCreatVisitBtn } from "../function/removeBtnLogingAndAddCreatVisitBtn.js";
import { showAllCards } from "../function/showAllCards.js";

export const logInUser = async (email, password) => {
  try {
    const { status, data } = await instance.post("login", {
      email: email,
      password: password,
    });
    if (status === 200) {
      localStorage.setItem("token", data);

      removeBtnLogIngAndAddCreatVisitBtn();
      showAllCards();
    }
  } catch (err) {
    console.warn(err);
  }
};
