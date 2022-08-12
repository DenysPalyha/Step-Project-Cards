import { getAllCards } from "../api/getAllCards.js";
import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";
import { containerCards } from "../layout/cardVisitContainer.js";
import { deleteCardVisit } from "./deleteCardVisit.js";
import { editCardVisitFn } from "./editCardVisit.js";

const filterTitleField = document.querySelector("#filter-title");
const filterStatusField = document.querySelector("#filter-status");
const filterPriorField = document.querySelector("#filter-priority");

const renderFiltered = function (elem) {
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
};

function filter() {
  containerCards.innerHTML = "";

  getAllCards().then(({ data }) => {
    data.forEach((elem) => {
      let tValue = filterTitleField.value;
      let sVlaue = filterStatusField.value;
      let pValue = filterPriorField.value;

      if (
        (tValue === "" ||
          elem.purposeTitle.toLowerCase().includes(tValue.toLowerCase()) ||
          elem.description.toLowerCase().includes(tValue.toLowerCase())) &&
        (sVlaue === "ALL" || elem.visitStatus === sVlaue) &&
        (pValue == "ALL" || elem.priority === pValue)
      ) {
        renderFiltered(elem);
      } else return;
    });
  });
}

const filterCards = function () {
  filterPriorField.addEventListener("change", () => {
    filter();
  });
  filterTitleField.addEventListener("input", () => {
    filter();
  });
  filterStatusField.addEventListener("change", () => {
    filter();
  });
};

export default filterCards;
