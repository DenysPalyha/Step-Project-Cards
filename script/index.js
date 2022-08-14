import Header from "./classes/Header.js";
import { showAllCards } from "./function/showAllCards.js";
import { removeBtnLogIngAndAddCreatVisitBtn } from "./function/removeBtnLogingAndAddCreatVisitBtn.js";
import filterForm from "./layout/filterForm.js";
import filterCards from "./function/filterCards.js";

filterForm.classList.add("active");

filterCards();

const token = localStorage.getItem("token");

new Header().render();

if (token) {
  removeBtnLogIngAndAddCreatVisitBtn();
  showAllCards();
}
