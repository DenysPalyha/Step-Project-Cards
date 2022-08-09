import Header from "./classes/Header.js";
import { showAllCards } from "./function/showAllCards.js";
import { removeBtnLogIngAndAddCreatVisitBtn } from "./function/removeBtnLogingAndAddCreatVisitBtn.js";

const token = localStorage.getItem("token");

new Header().render();

if (token) {
  removeBtnLogIngAndAddCreatVisitBtn();
  showAllCards();
}
