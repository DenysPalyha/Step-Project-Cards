import EditCardModal from "../classes/EditCardModal.js";

export function editCardVisitFn(id) {
  const fnEditCardVisitCardio = (
    newtitlePurpose,
    newfullName,
    newDescription,
    newPriority,
    newVisitStatus,
    newDoctor,
    newPressure,
    newMassIndex,
    newCardiovascular,
    newAgeCardio
  ) => {
    this.cardTitleVisit.innerText = newtitlePurpose;
    this.fullNameElem.innerText = newfullName;
    this.cardDescription.innerText = newDescription;
    this.statusCardPriority.innerText = newPriority;
    this.visitStatusElem.innerText = newVisitStatus;
    this.cardDoctorElem.innerText = newDoctor;
    this.elemPressure.innerText = newPressure;
    this.elemMassIndex.innerText = newMassIndex;
    this.elemCardioSystam.innerText = newCardiovascular;
    this.elemAge.innerText = newAgeCardio;

    this.title = newtitlePurpose;
    this.fullName = newfullName;
    this.description = newDescription;
    this.priority = newPriority;
    this.visitStatus = newVisitStatus;
    this.doctor = newDoctor;
    this.normalPressure = newPressure;
    this.bodyMassIndex = newMassIndex;
    this.cardiovascularSystem = newCardiovascular;
    this.age = newAgeCardio;
  };

  const fnEditCardVisitDentist = (
    newtitlePurpose,
    newfullName,
    newDescription,
    newPriority,
    newVisitStatus,
    newDoctor,
    newDateLastVisit
  ) => {
    this.cardTitleVisit.innerText = newtitlePurpose;
    this.fullNameElem.innerText = newfullName;
    this.cardDescription.innerText = newDescription;
    this.statusCardPriority.innerText = newPriority;
    this.visitStatusElem.innerText = newVisitStatus;
    this.cardDoctorElem.innerText = newDoctor;
    this.visitDentist.innerText = newDateLastVisit;

    this.title = newtitlePurpose;
    this.fullName = newfullName;
    this.description = newDescription;
    this.priority = newPriority;
    this.visitStatus = newVisitStatus;
    this.doctor = newDoctor;
    this.dataLastVisit = newDateLastVisit;
  };

  const fnEditCardVisitTherapist = (
    newtitlePurpose,
    newfullName,
    newDescription,
    newPriority,
    newVisitStatus,
    newDoctor,
    newAge
  ) => {
    this.cardTitleVisit.innerText = newtitlePurpose;
    this.fullNameElem.innerText = newfullName;
    this.cardDescription.innerText = newDescription;
    this.statusCardPriority.innerText = newPriority;
    this.visitStatusElem.innerText = newVisitStatus;
    this.cardDoctorElem.innerText = newDoctor;
    this.ageUserElement.innerText = newAge;

    this.title = newtitlePurpose;
    this.fullName = newfullName;
    this.description = newDescription;
    this.priority = newPriority;
    this.visitStatus = newVisitStatus;
    this.doctor = newDoctor;
    this.ageUser = newAge;
  };

  new EditCardModal(
    id,
    this.title,
    this.fullName,
    this.description,
    this.priority,
    this.visitStatus,
    this.doctor,
    this.normalPressure,
    this.bodyMassIndex,
    this.cardiovascularSystem,
    this.age,
    this.dataLastVisit,
    this.ageUser,
    fnEditCardVisitCardio,
    fnEditCardVisitDentist,
    fnEditCardVisitTherapist
  ).render();
}
