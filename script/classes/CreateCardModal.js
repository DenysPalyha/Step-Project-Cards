import Modal from "./Modal.js";
import { removeBtnLogIngAndAddCreatVisitBtn } from "../function/removeBtnLogingAndAddCreatVisitBtn.js";
import { root } from "./Header.js";


class CreateCardModal {
    constructor() {
        this.createCardModalForm = document.createElement("form");
        this.btnCloseCreateCardModal = document.createElement("button")
        this.inputUserFullName = document.createElement("input");
        this.typeDoctors = document.createElement("select");
        this.optionAllDoctors = document.createElement("option");
        this.optionCardiologist = document.createElement("option");
        this.optionDentist = document.createElement("option");
        this.optionTherapist = document.createElement("option");
        this.btnCreateVisite = document.createElement("button");

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
        this.createCardModalForm.classList.add("create_card_modal_form");
        this.createCardModalForm.classList.add("modal--show");
        this.btnCloseCreateCardModal.classList.add("btn-close");
        this.inputUserFullName.classList.add("input_user_full_name");
        this.btnCreateVisite.classList.add("btn");
        this.btnCreateVisite.classList.add("btn-success");

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
        this.btnCreateVisite.innerText = "CREATE VISIT";

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
            this.urgencyPatient,
            this.btnCreateVisite);
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
    }

    cardiologistCreateModal() {

        this.doctorsVisitListCardio.classList.add("doctors_visit_list");

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
            this.cardiologistPatientAge);
    }

    dentistCreateModal() {

        this.doctorsVisitListDentist.classList.add('doctors_visit_list');

        this.dentistdateOfLastVisit.setAttribute("type", "text");
        this.dentistdateOfLastVisit.setAttribute("placeholder", "Date Of LastVisit");

        this.urgencyPatient.after(this.doctorsVisitListDentist);
        this.doctorsVisitListDentist.append(this.dentistdateOfLastVisit);
    }

    therapistCreateModal() {

        this.doctorsVisitListTherapist.classList.add('doctors_visit_list');

        this.urgencyPatient.after(this.doctorsVisitListTherapist);
        this.doctorsVisitListTherapist.append(this.therapistPatientAge);

        this.therapistPatientAge.setAttribute("type", "text");
        this.therapistPatientAge.setAttribute("placeholder", "Patient Age");
    }

    closeCardForm() {
        this.btnCloseCreateCardModal.addEventListener('click', (e) => {
            this.createCardModalForm.classList.add('modal--close');
            setTimeout(() => {
                if (e.target === this.btnCloseCreateCardModal) {
                    this.createCardModalForm.remove();
                }
            }, 500);
        })

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

    // validModal() {
    //     }

    render(container = this.modalBody) {
        this.createCardModal();
        this.cardiologistCreateModal();
        this.dentistCreateModal();
        this.therapistCreateModal()
        this.closeCardForm();
        this.selectWraper();
        // this.validModal();
        container.append(this.createCardModalForm)
    }
}

export default CreateCardModal;