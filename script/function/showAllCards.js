import { getAllCards } from "../api/getAllCards.js";
import VisitCardiologist from "../classes/VisitCardiologist.js";
import { deleteCardVisit } from "./deleteCardVisit.js";
import { editCardVisitFn } from "./editCardVisit.js";
import { removeBtnLogIngAndAddCreatVisitBtn } from "./removeBtnLogingAndAddCreatVisitBtn.js";
import { containerCards } from "../layout/cardVisitContainer.js";

export async function showAllCards() {
  const { status, data } = await getAllCards();
  if (status === 200) {
    if (data.length !== 0) {
      data.forEach((elem) => {
        if (elem.doctor === "cardiologist") {
          new VisitCardiologist(
            deleteCardVisit,
            editCardVisitFn,
            elem.id,
            elem.purposeTitle,
            elem.fullName,
            elem.doctor,
            elem.priority,
            elem.description,
            elem.normalPressure,
            elem.bodyMassIndex,
            elem.cardiovascularSystem,
            elem.age
          ).render(containerCards);
        }
      });
    } else {
      containerCards.innerHTML =
        "<div class='info__string'><h2 class='info__string-heading'>No items have been added</h2></div>";
    }
  }
}
