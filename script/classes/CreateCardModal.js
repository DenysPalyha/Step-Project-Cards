import Modal from "./Modal.js";
import { removeBtnLogIngAndAddCreatVisitBtn } from "../function/removeBtnLogingAndAddCreatVisitBtn.js";
import { root } from "./Header.js";
import LogIn from "./LogIn.js";
import createCard from "../api/createCard.js";
import Visit from "./Visit.js";
import VisitCardiologist from "./VisitCardiologist.js";
import VisitDentist from "./VisitDentist.js";
import VisitTherapist from "./VisitTherapist.js";

class CreateCardModal {
    constructor() {
        this.createCardModalDivBg = document.createElement("div");
        this.createCardModalForm = document.createElement("form");
        this.btnCloseCreateCardModal = document.createElement("button")
        this.inputUserFullName = document.createElement("input");
        this.typeDoctors = document.createElement("select");
        this.optionAllDoctors = document.createElement("option");
        this.optionCardiologist = document.createElement("option");
        this.optionDentist = document.createElement("option");
        this.optionTherapist = document.createElement("option");

        this.btnCreateVisiteCardio = document.createElement("button");
        this.btnCreateVisiteDentist = document.createElement("button");
        this.btnCreateVisiteTherapist = document.createElement("button");

        this.doctorsVisitListCardio = document.createElement("div");
        this.doctorsVisitListDentist = document.createElement("div");
        this.doctorsVisitListTherapist = document.createElement("div");

        this.visitPurpose = document.createElement("input");
        this.visitDescription = document.createElement("input");

        this.urgencyPatient = document.createElement("select");
        this.chooseUrgency = document.createElement("option");
        this.emergencyUrgency = document.createElement("option");
        this.priorityUrgency = document.createElement("option");
        this.regularUrgency = document.createElement("option");

        this.cardiologistBloodPressure = document.createElement("input");
        this.cardiologistBodyMassIndex = document.createElement("input");
        this.cardiologistTransferredDiseases = document.createElement("input");
        this.cardiologistPatientAge = document.createElement("input");
        this.therapistPatientAge = document.createElement("input");
        this.dentistdateOfLastVisit = document.createElement("input");
    }

    createCardModal() {
        this.createCardModalDivBg.classList.add("modal_background")
        this.createCardModalForm.classList.add("create_card_modal_form");
        this.createCardModalForm.classList.add("modal--show");
        this.btnCloseCreateCardModal.classList.add("btn-close");
        this.inputUserFullName.classList.add("input_user_full_name");
        this.visitPurpose.classList.add("visit_purpose");
        this.visitDescription.classList.add("visit_description");

        this.visitPurpose.setAttribute("type", "text");
        this.visitPurpose.setAttribute("placeholder", "Visit Purpose");
        this.visitDescription.setAttribute("type", "text");
        this.visitDescription.setAttribute("placeholder", "Visit Description");

        this.btnCloseCreateCardModal.setAttribute("type", "button");
        this.btnCloseCreateCardModal.setAttribute("aria-label", "Close");
        this.inputUserFullName.setAttribute("type", "text");
        this.inputUserFullName.setAttribute("placeholder", "Patient Full Name");
        this.optionCardiologist.setAttribute("value", "cardiologist");
        this.typeDoctors.setAttribute("name", "type_doctors");
        this.optionDentist.setAttribute("value", "dentist");
        this.optionTherapist.setAttribute("value", "therapist");

        this.urgencyPatient.setAttribute("name", "urgency");
        this.chooseUrgency.setAttribute("value", "")
        this.emergencyUrgency.setAttribute("value", "emergency");
        this.priorityUrgency.setAttribute("value", "priority");
        this.regularUrgency.setAttribute("value", "regular");

        this.createCardModalForm.append(
            this.btnCloseCreateCardModal,
            this.inputUserFullName,
            this.typeDoctors,
            this.visitPurpose,
            this.visitDescription,
            this.urgencyPatient);
        this.typeDoctors.append(
            this.optionAllDoctors,
            this.optionCardiologist,
            this.optionDentist,
            this.optionTherapist);

        this.urgencyPatient.append(
            this.chooseUrgency,
            this.emergencyUrgency,
            this.priorityUrgency,
            this.regularUrgency);

        this.chooseUrgency.innerText = "Choose urgency";
        this.emergencyUrgency.innerText = "Emergency";
        this.priorityUrgency.innerText = "Priority";
        this.regularUrgency.innerText = "Regular";

        this.optionAllDoctors.innerText = "Choose doctor";
        this.optionCardiologist.innerText = "Cardiologist";
        this.optionDentist.innerText = "Dentist";
        this.optionTherapist.innerText = "Therapist";

        this.btnCloseCreateCardModal.addEventListener('click', this.closeCardForm.bind(this));
        this.createCardModalDivBg.addEventListener('click', this.closeCardForm.bind(this));

    }

    cardiologistCreateModal() {
        this.doctorsVisitListCardio.classList.add("doctors_visit_list");
        this.btnCreateVisiteCardio.classList.add("btn");
        this.btnCreateVisiteCardio.classList.add("btn-success");

        this.cardiologistBloodPressure.setAttribute("type", "text");
        this.cardiologistBloodPressure.setAttribute("placeholder", "Blood Pressure");
        this.cardiologistBodyMassIndex.setAttribute("type", "text");
        this.cardiologistBodyMassIndex.setAttribute("placeholder", "Body Mass Index");
        this.cardiologistTransferredDiseases.setAttribute("type", "text");
        this.cardiologistTransferredDiseases.setAttribute("placeholder", "Transferred Diseases");
        this.cardiologistPatientAge.setAttribute("type", "text");
        this.cardiologistPatientAge.setAttribute("placeholder", "Patient Age");

        this.urgencyPatient.after(this.doctorsVisitListCardio);
        this.doctorsVisitListCardio.append(
            this.cardiologistBloodPressure,
            this.cardiologistBodyMassIndex,
            this.cardiologistTransferredDiseases,
            this.cardiologistPatientAge,
            this.btnCreateVisiteCardio);

        this.btnCreateVisiteCardio.innerText = "CREATE VISIT";

        // ------------------------------------------------------------------------
        this.btnCreateVisiteCardio.addEventListener("click", async(e) => {
            e.preventDefault();
            const { status, data } = await createCard(
                JSON.stringify({
                    fullName: this.inputUserFullName.value,
                    doctor: this.typeDoctors.value,
                    title: this.visitPurpose.value,
                    description: this.visitDescription.value,
                    priority: this.urgencyPatient.value,
                    normalPressure: this.cardiologistBloodPressure.value,
                    bodyMassIndex: this.cardiologistBodyMassIndex.value,
                    cardiovascularSystem: this.cardiologistTransferredDiseases.value,
                    age: this.cardiologistPatientAge.value
                }))
            if (status === 200) {
                this.closeCardForm.bind(this);
                new VisitCardiologist(
                    deleteCardVisit,
                    editCardVisitFn,
                    data.id,
                    data.purposeTitle,
                    data.fullName,
                    data.doctor,
                    data.priority,
                    data.description,
                    data.normalPressure,
                    data.bodyMassIndex,
                    data.cardiovascularSystem,
                    data.age
                ).render(container);
                // this.closeModal();
            }
        })
    }

    dentistCreateModal() {
        this.doctorsVisitListDentist.classList.add('doctors_visit_list');
        this.btnCreateVisiteDentist.classList.add("btn");
        this.btnCreateVisiteDentist.classList.add("btn-success");

        this.dentistdateOfLastVisit.setAttribute("type", "text");
        this.dentistdateOfLastVisit.setAttribute("placeholder", "Date Of LastVisit");

        this.urgencyPatient.after(this.doctorsVisitListDentist);
        this.doctorsVisitListDentist.append(
            this.dentistdateOfLastVisit,
            this.btnCreateVisiteDentist);

        this.btnCreateVisiteDentist.innerText = "CREATE VISIT";
        // ------------------------------------
        this.btnCreateVisiteDentist.addEventListener("click", async(e) => {
            e.preventDefault();
            const { status, data } = await createCard(
                JSON.stringify({
                    fullName: this.inputUserFullName.value,
                    doctor: this.typeDoctors.value,
                    title: this.visitPurpose.value,
                    description: this.visitDescription.value,
                    priority: this.urgencyPatient.value,
                    dataLastVisit: this.dentistdateOfLastVisit.value
                }))
            if (status === 200) {
                this.closeCardForm.bind(this);
                new VisitDentist(
                    deleteCardVisit,
                    editCardVisitFn,
                    data.id,
                    data.purposeTitle,
                    data.fullName,
                    data.doctor,
                    data.priority,
                    data.description,
                    data.LastVisit
                ).render(container);
                // this.closeModal();
            }
        })
    }

    therapistCreateModal() {
        this.doctorsVisitListTherapist.classList.add('doctors_visit_list');
        this.btnCreateVisiteTherapist.classList.add("btn");
        this.btnCreateVisiteTherapist.classList.add("btn-success");

        this.urgencyPatient.after(this.doctorsVisitListTherapist);
        this.doctorsVisitListTherapist.append(
            this.therapistPatientAge,
            this.btnCreateVisiteTherapist);

        this.therapistPatientAge.setAttribute("type", "text");
        this.therapistPatientAge.setAttribute("placeholder", "Patient Age");

        this.btnCreateVisiteTherapist.innerText = "CREATE VISIT";

        // ------------------------------------------------------------
        this.btnCreateVisiteTherapist.addEventListener("click", async(e) => {
            e.preventDefault();
            const { status, data } = await createCard(
                JSON.stringify({
                    fullName: this.inputUserFullName.value,
                    doctor: this.typeDoctors.value,
                    title: this.visitPurpose.value,
                    description: this.visitDescription.value,
                    priority: this.urgencyPatient.value,
                    ageUser: this.therapistPatientAge.value
                }))
            if (status === 200) {
                this.closeCardForm.bind(this);
                new VisitTherapist(
                    deleteCardVisit,
                    editCardVisitFn,
                    data.id,
                    data.purposeTitle,
                    data.fullName,
                    data.doctor,
                    data.priority,
                    data.description,
                    data.ageUser
                ).render(container);
                // this.closeModal();
            }
        })
    }

    closeCardForm() {
        this.createCardModalForm.classList.add('modal--close');
        setTimeout(() => {
            this.createCardModalForm.remove();
            this.createCardModalDivBg.remove();
        }, 500);
    }

    selectWraper() {
        this.typeDoctors.addEventListener('click', () => {
            const typeDoctor = this.typeDoctors.value
                // console.log(typeDoctor);
            if (typeDoctor === "cardiologist") {
                this.doctorsVisitListCardio.classList.toggle('modal_show');
            } else if (typeDoctor === "dentist") {
                this.doctorsVisitListDentist.classList.toggle("modal_show");
            } else if (typeDoctor === "therapist") {
                this.doctorsVisitListTherapist.classList.toggle("modal_show");
            }
        })
    }

    validModal() {
        this.createCardModalForm.addEventListener('click', () => {
            if (this.inputUserFullName.value === "" || this.visitPurpose.value === "" || this.visitDescription.value === "") {
                this.btnCreateVisiteCardio.disabled = true;
                this.btnCreateVisiteDentist.disabled = true;
                this.btnCreateVisiteTherapist.disabled = true;
            } else {
                this.btnCreateVisiteCardio.disabled = false;
                this.btnCreateVisiteDentist.disabled = false;
                this.btnCreateVisiteTherapist.disabled = false;
            }
        })

        this.inputUserFullName.addEventListener('blur', () => {
            let value = this.inputUserFullName.value
            if (value === "") {
                this.inputUserFullName.classList.add("invalid");
                this.typeDoctors.disabled = true;
            }
            if (value) {
                this.inputUserFullName.classList.remove("invalid");
                this.typeDoctors.disabled = false;
            }
        })

        this.visitPurpose.addEventListener('blur', () => {
            let value = this.visitPurpose.value
            if (value === "") {
                this.visitPurpose.classList.add("invalid");
                this.typeDoctors.disabled = true;
            }
            if (value) {
                this.visitPurpose.classList.remove("invalid");
                this.typeDoctors.disabled = false;
            }
        })

        this.visitDescription.addEventListener('blur', () => {
            let value = this.visitDescription.value
            if (value === "") {
                this.visitDescription.classList.add("invalid");
                this.typeDoctors.disabled = true;
            }
            if (value) {
                this.visitDescription.classList.remove("invalid");
                this.typeDoctors.disabled = false;
            }
        })
        this.urgencyPatient.addEventListener('blur', () => {
            let value = this.urgencyPatient.value
            console.log(value);
            if (value === "") {
                this.urgencyPatient.classList.add("invalid");
                this.typeDoctors.disabled = true;
            } else {
                this.urgencyPatient.classList.remove("invalid");
                this.typeDoctors.disabled = false;
            }
        })
    }

    render(container = this.modalBody) {
        this.createCardModal();
        this.cardiologistCreateModal();
        this.dentistCreateModal();
        this.therapistCreateModal()
        this.selectWraper();
        this.validModal();
        container.append(this.createCardModalDivBg, this.createCardModalForm);
    }
}

export default CreateCardModal;