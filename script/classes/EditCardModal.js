import Modal from "./Modal.js";
import {
  editCardCardiologist,
  editCardDentist,
  editCardTherapist,
} from "../api/editCardsVisitApi.js";

class EditCardModal extends Modal {
  constructor(
    id,
    purposeTitle,
    fullName,
    description,
    priority,
    VisitStatus,
    doctor,
    presure,
    massIndex,
    cardiovascular,
    ageUserCardio,
    dataLastVisit,
    ageUser,
    fnEditCardVisitCardio,
    fnEditCardVisitDentist,
    fnEditCardVisitTherapist
  ) {
    super();

    this.id = id;
    this.purposeTitle = purposeTitle;
    this.fullName = fullName;
    this.description = description;
    this.priority = priority;
    this.VisitStatus = VisitStatus;
    this.doctor = doctor;
    this.presure = presure;
    this.massIndex = massIndex;
    this.cardiovascular = cardiovascular;
    this.ageUserCardio = ageUserCardio;
    this.dataLastVisit = dataLastVisit;
    this.ageUser = ageUser;

    this.fnEditCardVisitCardio = fnEditCardVisitCardio;
    this.fnEditCardVisitDentist = fnEditCardVisitDentist;
    this.fnEditCardVisitTherapist = fnEditCardVisitTherapist;

    this.formVisit = document.createElement("form");
    this.inputPurpose = document.createElement("input");
    this.inputFullName = document.createElement("input");
    this.textareaDesc = document.createElement("textarea");
    this.selectUrgency = document.createElement("select");
    this.optionsChoose = document.createElement("option");
    this.optionsRegular = document.createElement("option");
    this.optionsPriority = document.createElement("option");
    this.optionsEmergency = document.createElement("option");

    this.selectDoctor = document.createElement("select");
    this.optionsSelected = document.createElement("option");
    this.optionElCardiol = document.createElement("option");
    this.optionElDentist = document.createElement("option");
    this.optionElTherapist = document.createElement("option");

    this.divContainerForDopSection = document.createElement("div");
    this.inputPressure = document.createElement("input");
    this.inputMassIndex = document.createElement("input");
    this.inputCardiovascular = document.createElement("input");
    this.inputAgeForSectionCardio = document.createElement("input");

    this.inputdateLastVisit = document.createElement("input");
    this.inputTherapistAge = document.createElement("input");

    this.selectStatus = document.createElement("select");
    this.optionsOpen = document.createElement("option");
    this.optionDone = document.createElement("option");

    this.butEditCardsVisitCardio = document.createElement("button");
    this.butEditCardsVisitDantist = document.createElement("button");
    this.butEditCardsVisitTherapist = document.createElement("button");

    this.validPurpose = "";
    this.validFullName = "";
    this.validDescription = "";
    this.validSelect = "";
  }

  createModal() {
    super.createModal();

    const lablePurpose = document.createElement("label");
    const lableFullName = document.createElement("label");
    const lableTextarea = document.createElement("label");
    const divSelectUrgency = document.createElement("div");
    const labelSelectUrgency = document.createElement("label");
    const labelSelectStatus = document.createElement("label");
    const divConteinerSelect = document.createElement("div");
    const divSelectStatus = document.createElement("div");

    this.modalContainer.classList.add("modal__main-container-newbg");
    this.modalHeader.classList.add("modal__edit-card-visit");
    this.modalContainer.classList.add("modal__edit-card-visit-container");
    this.formVisit.classList.add("form-create-visit");
    lablePurpose.classList.add("form-create-visit__lable");
    this.inputPurpose.classList.add("form-control");
    this.inputPurpose.classList.add("form-create-visit__input");
    lableFullName.classList.add("form-create-visit__lable");
    this.inputFullName.classList.add("form-control");
    this.inputFullName.classList.add("form-create-visit__input");
    lableTextarea.classList.add("form-create-visit__lable");
    this.textareaDesc.classList.add("form-control");
    this.textareaDesc.classList.add("form-create-visit__textarea");
    divSelectUrgency.classList.add("input-group");
    divSelectUrgency.classList.add("form-create-visit__options-urgency");
    this.selectUrgency.classList.add("form-select");
    this.selectUrgency.classList.add("form-create-visit__select-ungency");
    labelSelectUrgency.classList.add("input-group-text");
    labelSelectUrgency.classList.add("form-create-visit__lable");
    divSelectStatus.classList.add("input-group");
    divSelectStatus.classList.add("form-create-visit__options-urgency");
    this.selectStatus.classList.add("form-select");
    this.selectStatus.classList.add("form-create-visit__lable");
    labelSelectStatus.classList.add("input-group-text");
    labelSelectStatus.classList.add("form-create-visit__lable");
    divConteinerSelect.classList.add("position__select");
    this.butEditCardsVisitCardio.classList.add("btn");
    this.butEditCardsVisitCardio.classList.add("btn-success");
    this.butEditCardsVisitCardio.classList.add("btn-modal__edit-card");
    this.butEditCardsVisitDantist.classList.add("btn");
    this.butEditCardsVisitDantist.classList.add("btn-success");
    this.butEditCardsVisitDantist.classList.add("btn-modal__edit-card");
    this.butEditCardsVisitTherapist.classList.add("btn");
    this.butEditCardsVisitTherapist.classList.add("btn-success");
    this.butEditCardsVisitTherapist.classList.add("btn-modal__edit-card");

    this.selectDoctor.classList.add("form-select");
    this.selectDoctor.classList.add("form-create-visit__select-doctor");

    this.inputPurpose.setAttribute("type", "text");
    this.inputFullName.setAttribute("type", "text");
    this.textareaDesc.setAttribute("cols", "30");
    this.textareaDesc.setAttribute("rows", "2");
    this.textareaDesc.setAttribute("placeholder", "Leave a comment here");

    this.selectDoctor.setAttribute("aria-label", "Default select example");
    this.optionsSelected.setAttribute("selected", "selected");

    this.optionElCardiol.setAttribute("value", "Cardiologist");
    this.optionElDentist.setAttribute("value", "Dentist");
    this.optionElTherapist.setAttribute("value", "Therapist");

    this.optionsRegular.setAttribute("value", "Low");
    this.optionsPriority.setAttribute("value", "Normal");
    this.optionsEmergency.setAttribute("value", "High");

    this.optionsOpen.setAttribute("value", "open");
    this.optionDone.setAttribute("value", "done");

    this.butEditCardsVisitCardio.setAttribute("type", "submit");
    this.butEditCardsVisitDantist.setAttribute("type", "submit");
    this.butEditCardsVisitTherapist.setAttribute("type", "submit");

    this.modalTitle.innerText = "Edit Card Visit";
    this.optionsSelected.innerText = "Choose a doctor";
    this.optionElCardiol.innerText = "Cardiologist";
    this.optionElDentist.innerText = "Dentist";
    this.optionElTherapist.innerText = "Therapist";

    lablePurpose.innerText = "Purpose of the visit *";
    lableFullName.innerText = "Full Name *";
    lableTextarea.innerText = "Description of the visit *";
    this.optionsChoose.innerText = "Choose... *";
    this.optionsRegular.innerText = "Low";
    this.optionsPriority.innerText = "Normal";
    this.optionsEmergency.innerText = "High";
    labelSelectUrgency.innerText = "Urgency";
    this.optionsOpen.innerText = "Open";
    this.optionDone.innerText = "Done";
    labelSelectStatus.innerText = "Status";
    this.butEditCardsVisitCardio.innerText = "Edit Card";
    this.butEditCardsVisitDantist.innerText = "Edit Card";
    this.butEditCardsVisitTherapist.innerText = "Edit Card";

    this.modalBody.append(this.formVisit);
    this.formVisit.append(
      lablePurpose,
      lableFullName,
      lableTextarea,
      divConteinerSelect,
      this.selectDoctor
    );
    lablePurpose.append(this.inputPurpose);
    lableFullName.append(this.inputFullName);
    lableTextarea.append(this.textareaDesc);

    divConteinerSelect.append(divSelectUrgency, divSelectStatus);

    divSelectStatus.append(this.selectStatus, labelSelectStatus);
    this.selectStatus.append(this.optionsOpen, this.optionDone);

    divSelectUrgency.append(this.selectUrgency, labelSelectUrgency);
    this.selectUrgency.append(
      this.optionsChoose,
      this.optionsRegular,
      this.optionsPriority,
      this.optionsEmergency
    );

    this.selectDoctor.append(
      this.optionsSelected,
      this.optionElCardiol,
      this.optionElDentist,
      this.optionElTherapist
    );
  }

  warnNotEmail(container = document.body) {
    const divWarn = document.createElement("div");
    divWarn.classList.add("alert");
    divWarn.classList.add("alert-danger");
    divWarn.classList.add("alert__dangers-email");
    divWarn.setAttribute("role", "alert");
    divWarn.innerText = "Please fill in the required fields!!!";
    container.append(divWarn);

    setTimeout(() => {
      divWarn.remove();
    }, 2000);
  }

  validateInput() {
    const reg_pusto = new RegExp(/^[\s\S]{1,10}/);
    this.validPurpose = reg_pusto.test(this.inputPurpose.value);
    this.validFullName = reg_pusto.test(this.inputFullName.value);
    this.validDescription = reg_pusto.test(this.textareaDesc.value);
    this.validSelect = this.selectUrgency.value.includes("Choose... *");

    if (this.validPurpose === false) {
      this.inputPurpose.classList.add("is-invalid");
      this.warnNotEmail();
    }
    if (this.validFullName === false) {
      this.inputFullName.classList.add("is-invalid");
      this.warnNotEmail();
    }
    if (this.validDescription === false) {
      this.textareaDesc.classList.add("is-invalid");
      this.warnNotEmail();
    }
    if (!this.validSelect === false) {
      this.selectUrgency.classList.add("is-invalid");
      this.warnNotEmail();
    }

    if (this.validPurpose) {
      this.inputPurpose.classList.remove("is-invalid");
    }
    if (this.validFullName) {
      this.inputFullName.classList.remove("is-invalid");
    }
    if (this.validDescription) {
      this.textareaDesc.classList.remove("is-invalid");
    }
    if (!this.validSelect) {
      this.selectUrgency.classList.remove("is-invalid");
    }
  }

  writingAndCheckingVroperties() {
    this.inputPurpose.value = this.purposeTitle;
    this.inputFullName.value = this.fullName;
    this.textareaDesc.value = this.description;

    if (this.priority.toLowerCase() === "low") {
      this.optionsRegular.setAttribute("selected", "selected");
    }

    if (this.priority.toLowerCase() === "normal") {
      this.optionsPriority.setAttribute("selected", "selected");
    }
    if (this.priority.toLowerCase() === "high") {
      this.optionsEmergency.setAttribute("selected", "selected");
    }
    this.optionsOpen.setAttribute("value", "Open");
    this.optionDone.setAttribute("value", "Done");

    if (this.VisitStatus.toLowerCase() === "open") {
      this.optionsOpen.setAttribute("selected", "selected");
    }
    if (this.VisitStatus.toLowerCase() === "done") {
      this.optionDone.setAttribute("selected", "selected");
    }

    if (this.doctor.toLowerCase() === "cardiologist") {
      this.optionElCardiol.setAttribute("selected", "selected");
      this.selectDoctor.setAttribute("disabled", "disabled");
    }
    if (this.doctor.toLowerCase() === "dentist") {
      this.optionElDentist.setAttribute("selected", "selected");
      this.selectDoctor.setAttribute("disabled", "disabled");
    }
    if (this.doctor.toLowerCase() === "therapist") {
      this.optionElTherapist.setAttribute("selected", "selected");
      this.selectDoctor.setAttribute("disabled", "disabled");
    }
  }

  createFormCardiologist() {
    this.writingAndCheckingVroperties();
    const lablePressure = document.createElement("label");
    const lableMassIndex = document.createElement("label");
    const lableCardiovascular = document.createElement("label");
    const lableAgeCardio = document.createElement("label");

    lablePressure.classList.add("form-create-visit__lable");
    this.inputPressure.classList.add("form-control");
    this.inputPressure.classList.add("form-create-visit__input");
    lableMassIndex.classList.add("form-create-visit__lable");
    this.inputMassIndex.classList.add("form-control");
    this.inputMassIndex.classList.add("form-create-visit__input");
    lableCardiovascular.classList.add("form-create-visit__lable");
    this.inputCardiovascular.classList.add("form-control");
    this.inputCardiovascular.classList.add("form-create-visit__input");
    lableAgeCardio.classList.add("form-create-visit__lable");
    this.inputAgeForSectionCardio.classList.add("form-control");
    this.inputAgeForSectionCardio.classList.add("form-create-visit__input");

    this.inputPressure.setAttribute("type", "text");
    this.inputMassIndex.setAttribute("type", "text");
    this.inputCardiovascular.setAttribute("type", "text");
    this.inputAgeForSectionCardio.setAttribute("type", "text");

    lablePressure.innerText = "Normal pressure";
    lableMassIndex.innerText = "Mass Index";
    lableCardiovascular.innerText = "Diseases of the cardiovascular system";
    lableAgeCardio.innerText = "Your age";

    this.inputPressure.value = this.presure;
    this.inputMassIndex.value = this.massIndex;
    this.inputCardiovascular.value = this.cardiovascular;
    this.inputAgeForSectionCardio.value = this.ageUserCardio;

    this.divContainerForDopSection.innerHTML = "";

    this.formVisit.append(this.divContainerForDopSection);
    this.divContainerForDopSection.append(
      lablePressure,
      lableMassIndex,
      lableCardiovascular,
      lableAgeCardio
    );
    lablePressure.append(this.inputPressure);
    lableMassIndex.append(this.inputMassIndex);
    lableCardiovascular.append(this.inputCardiovascular);
    lableAgeCardio.append(this.inputAgeForSectionCardio);
    this.modalFooter.append(this.butEditCardsVisitCardio);

    this.butEditCardsVisitCardio.addEventListener("click", async (e) => {
      e.preventDefault();
      this.validateInput();

      if (
        this.validPurpose &&
        this.validFullName &&
        this.validDescription &&
        !this.validSelect
      ) {
        const { status, data } = await editCardCardiologist(this.id, {
          id: this.id,
          visitStatus: this.selectStatus.value,
          fullName: this.inputFullName.value,
          doctor: this.selectDoctor.value,
          purposeTitle: this.inputPurpose.value,
          description: this.textareaDesc.value,
          priority: this.selectUrgency.value,
          normalPressure: this.inputPressure.value,
          bodyMassIndex: this.inputMassIndex.value,
          cardiovascularSystem: this.inputCardiovascular.value,
          age: this.inputAgeForSectionCardio.value,
        });
        if (status === 200) {
          this.fnEditCardVisitCardio(
            data.purposeTitle,
            data.fullName,
            data.description,
            data.priority,
            data.visitStatus,
            data.doctor,
            data.normalPressure,
            data.bodyMassIndex,
            data.cardiovascularSystem,
            data.age
          );
          this.closeModal();
        }
      }
    });
  }

  createFormDentist() {
    this.writingAndCheckingVroperties();
    const lableDentist = document.createElement("label");

    lableDentist.classList.add("form-create-visit__lable");
    this.inputdateLastVisit.classList.add("form-control");
    this.inputdateLastVisit.classList.add("form-create-visit__input");

    lableDentist.innerText = "Date of last visit";

    this.inputdateLastVisit.value = this.dataLastVisit;

    this.divContainerForDopSection.innerHTML = "";

    this.formVisit.append(this.divContainerForDopSection);
    this.divContainerForDopSection.append(lableDentist);
    lableDentist.append(this.inputdateLastVisit);
    this.modalFooter.append(this.butEditCardsVisitDantist);

    this.butEditCardsVisitDantist.addEventListener("click", async (e) => {
      e.preventDefault();

      this.validateInput();

      if (
        this.validPurpose &&
        this.validFullName &&
        this.validDescription &&
        !this.validSelect
      ) {
        const { status, data } = await editCardDentist(this.id, {
          id: this.id,
          visitStatus: this.selectStatus.value,
          fullName: this.inputFullName.value,
          doctor: this.selectDoctor.value,
          purposeTitle: this.inputPurpose.value,
          description: this.textareaDesc.value,
          priority: this.selectUrgency.value,
          dataLastVisit: this.inputdateLastVisit.value,
        });

        if (status === 200) {
          this.fnEditCardVisitDentist(
            data.purposeTitle,
            data.fullName,
            data.description,
            data.priority,
            data.visitStatus,
            data.doctor,
            data.dataLastVisit
          );
          this.closeModal();
        }
      }
    });
  }

  createFormTherapist() {
    this.writingAndCheckingVroperties();
    const lableTherapist = document.createElement("label");

    lableTherapist.classList.add("form-create-visit__lable");
    this.inputTherapistAge.classList.add("form-control");
    this.inputTherapistAge.classList.add("form-create-visit__input");

    lableTherapist.innerText = "Yor age";

    this.inputTherapistAge.value = this.ageUser;

    this.divContainerForDopSection.innerHTML = "";
    this.formVisit.append(this.divContainerForDopSection);
    this.divContainerForDopSection.append(lableTherapist);
    lableTherapist.append(this.inputTherapistAge);

    this.modalFooter.append(this.butEditCardsVisitTherapist);

    this.butEditCardsVisitTherapist.addEventListener("click", async (e) => {
      e.preventDefault();
      this.validateInput();

      if (
        this.validPurpose &&
        this.validFullName &&
        this.validDescription &&
        !this.validSelect
      ) {
        const { status, data } = await editCardTherapist(this.id, {
          id: this.id,
          visitStatus: this.selectStatus.value,
          fullName: this.inputFullName.value,
          doctor: this.selectDoctor.value,
          purposeTitle: this.inputPurpose.value,
          description: this.textareaDesc.value,
          priority: this.selectUrgency.value,
          ageUser: this.inputTherapistAge.value,
        });

        if (status === 200) {
          this.fnEditCardVisitTherapist(
            data.purposeTitle,
            data.fullName,
            data.description,
            data.priority,
            data.visitStatus,
            data.doctor,
            data.ageUser
          );
          this.closeModal();
        }
      }
    });
  }

  render() {
    super.render();
    this.writingAndCheckingVroperties();

    if (this.selectDoctor.value.toLowerCase() === "cardiologist") {
      this.createFormCardiologist();
    }
    if (this.selectDoctor.value.toLowerCase() === "dentist") {
      this.createFormDentist();
    }
    if (this.selectDoctor.value.toLowerCase() === "therapist") {
      this.createFormTherapist();
    }
  }
}

export default EditCardModal;
