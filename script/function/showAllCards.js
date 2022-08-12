import { getAllCards } from "../api/getAllCards.js";
import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";
import { deleteCardVisit } from "./deleteCardVisit.js";
import { editCardVisitFn } from "./editCardVisit.js";
import { removeBtnLogIngAndAddCreatVisitBtn } from "./removeBtnLogingAndAddCreatVisitBtn.js";
import { containerCards } from "../layout/cardVisitContainer.js";

export async function showAllCards() {
  const { status, data } = await getAllCards();
  if (status === 200) {
    if (data.length !== 0) {
      data.forEach((elem) => {
        if (elem.doctor.toLowerCase() === "cardiologist") {
          new VisitCardiologist(
            deleteCardVisit,
            editCardVisitFn,
            elem.visitStatus,
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
        if (elem.doctor.toLowerCase() === "dentist") {
          new VisitDentist(
            deleteCardVisit,
            editCardVisitFn,
            elem.visitStatus,
            elem.id,
            elem.purposeTitle,
            elem.fullName,
            elem.doctor,
            elem.priority,
            elem.description,
            elem.dataLastVisit
          ).render(containerCards);
        }
        if (elem.doctor.toLowerCase() === "therapist") {
          new VisitTherapist(
            deleteCardVisit,
            editCardVisitFn,
            elem.visitStatus,
            elem.id,
            elem.purposeTitle,
            elem.fullName,
            elem.doctor,
            elem.priority,
            elem.description,
            elem.ageUser
          ).render(containerCards);
        }
      });
    } else {
      containerCards.innerHTML =
        "<div class='info__string'><h2 class='info__string-heading'>No items have been added</h2></div>";
    }
  }
}
