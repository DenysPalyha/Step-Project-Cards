import createCard from "../api/createCard.js";
import VisitCardiologist from "./VisitCardiologist.js";
import VisitDentist from "./VisitDentist.js";
import VisitTherapist from "./VisitTherapist.js";
import { deleteCardVisit } from "../function/deleteCardVisit.js";
import { editCardVisitFn } from "../function/editCardVisit.js";
import { containerCards } from "../layout/cardVisitContainer.js";

class CreateCardModal {
    constructor() {
        this.createCardModalDivBg = document.createElement("div");
        this.createCardModalForm = document.createElement("form");
        this.btnCloseCreateCardModal = document.createElement("button");
        this.inputUserFullName = document.createElement("input");
        this.typeDoctors = document.createElement("select");
        this.optionAllDoctors = document.createElement("option");
        this.optionCardiologist = document.createElement("option");
        this.optionDentist = document.createElement("option");
        this.optionTherapist = document.createElement("option");
        this.divOpenUrgency = document.createElement("div");

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
        // ------------------------
        this.selectOpen = document.createElement("select");
        this.optionOpen = document.createElement("option");
        // -----------------------------
        this.cardiologistBloodPressure = document.createElement("input");
        this.cardiologistBodyMassIndex = document.createElement("input");
        this.cardiologistTransferredDiseases = document.createElement("input");
        this.cardiologistPatientAge = document.createElement("input");
        this.therapistPatientAge = document.createElement("input");
        this.dentistdateOfLastVisit = document.createElement("input");
    }

    createCardModal() {
        this.createCardModalDivBg.classList.add("modal_background");
        this.createCardModalForm.classList.add("create_card_modal_form");
        this.createCardModalForm.classList.add("modal--show");
        this.btnCloseCreateCardModal.classList.add("btn-close");
        this.inputUserFullName.classList.add("input_user_full_name");
        this.visitPurpose.classList.add("visit_purpose");
        this.visitDescription.classList.add("visit_description");

        this.divOpenUrgency.classList.add("div_open_urgency")

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
        this.chooseUrgency.setAttribute("value", "");
        this.emergencyUrgency.setAttribute("value", "High");
        this.priorityUrgency.setAttribute("value", "Normal");
        this.regularUrgency.setAttribute("value", "Low");
        // --------------------
        this.selectOpen.setAttribute("name", "open");
        this.optionOpen.setAttribute("value", "Open");
        // ------------------
        this.createCardModalForm.append(
            this.btnCloseCreateCardModal,
            this.inputUserFullName,
            this.typeDoctors,
            this.visitPurpose,
            this.visitDescription,
            this.divOpenUrgency
        );
        this.divOpenUrgency.append(
            this.urgencyPatient,
            this.selectOpen
        )

        this.typeDoctors.append(
            this.optionAllDoctors,
            this.optionCardiologist,
            this.optionDentist,
            this.optionTherapist
        );

        this.urgencyPatient.append(
            this.chooseUrgency,
            this.emergencyUrgency,
            this.priorityUrgency,
            this.regularUrgency
        );

        // ----
        this.selectOpen.append(this.optionOpen)

        this.optionOpen.innerText = "Open";
        // ----
        this.chooseUrgency.innerText = "Choose urgency";
        this.emergencyUrgency.innerText = "High";
        this.priorityUrgency.innerText = "Normal";
        this.regularUrgency.innerText = "Low";

        this.optionAllDoctors.innerText = "Choose doctor";
        this.optionCardiologist.innerText = "Cardiologist";
        this.optionDentist.innerText = "Dentist";
        this.optionTherapist.innerText = "Therapist";

        this.btnCloseCreateCardModal.addEventListener(
            "click",
            this.closeCardForm.bind(this)
        );
        this.createCardModalDivBg.addEventListener(
            "click",
            this.closeCardForm.bind(this)
        );

        this.selectOpen.disabled = 'true';
    }

    cardiologistCreateModal() {
        this.doctorsVisitListCardio.classList.add("doctors_visit_list");
        this.btnCreateVisiteCardio.classList.add("btn");
        this.btnCreateVisiteCardio.classList.add("btn-success");

        this.cardiologistBloodPressure.setAttribute("type", "text");
        this.cardiologistBloodPressure.setAttribute(
            "placeholder",
            "Blood Pressure"
        );
        this.cardiologistBodyMassIndex.setAttribute("type", "text");
        this.cardiologistBodyMassIndex.setAttribute(
            "placeholder",
            "Body Mass Index"
        );
        this.cardiologistTransferredDiseases.setAttribute("type", "text");
        this.cardiologistTransferredDiseases.setAttribute(
            "placeholder",
            "Transferred Diseases"
        );
        this.cardiologistPatientAge.setAttribute("type", "text");
        this.cardiologistPatientAge.setAttribute("placeholder", "Patient Age");
        this.btnCreateVisiteCardio.setAttribute("type", "submit");

        this.divOpenUrgency.after(this.doctorsVisitListCardio);
        this.doctorsVisitListCardio.append(
            this.cardiologistBloodPressure,
            this.cardiologistBodyMassIndex,
            this.cardiologistTransferredDiseases,
            this.cardiologistPatientAge,
            this.btnCreateVisiteCardio
        );

        this.btnCreateVisiteCardio.innerText = "CREATE VISIT";

        // ------------------------------------------------------------------------
        this.btnCreateVisiteCardio.addEventListener("click", async(e) => {
            e.preventDefault();
            const data = await createCard({
                visitStatus: this.selectOpen.value,
                fullName: this.inputUserFullName.value,
                doctor: this.typeDoctors.value,
                purposeTitle: this.visitPurpose.value,
                description: this.visitDescription.value,
                priority: this.urgencyPatient.value,
                normalPressure: this.cardiologistBloodPressure.value,
                bodyMassIndex: this.cardiologistBodyMassIndex.value,
                cardiovascularSystem: this.cardiologistTransferredDiseases.value,
                age: this.cardiologistPatientAge.value,
            });

            new VisitCardiologist(
                deleteCardVisit,
                editCardVisitFn,
                data.visitStatus,
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
            ).render(containerCards);
            this.closeCardForm();
            document.body.style.overflow = '';
        });
    }

    dentistCreateModal() {
        this.doctorsVisitListDentist.classList.add("doctors_visit_list");
        this.btnCreateVisiteDentist.classList.add("btn");
        this.btnCreateVisiteDentist.classList.add("btn-success");

        this.dentistdateOfLastVisit.setAttribute("type", "text");
        this.dentistdateOfLastVisit.setAttribute(
            "placeholder",
            "Date Of LastVisit"
        );
        this.btnCreateVisiteDentist.setAttribute("type", "submit");

        this.divOpenUrgency.after(this.doctorsVisitListDentist);
        this.doctorsVisitListDentist.append(
            this.dentistdateOfLastVisit,
            this.btnCreateVisiteDentist
        );

        this.btnCreateVisiteDentist.innerText = "CREATE VISIT";
        // ------------------------------------
        this.btnCreateVisiteDentist.addEventListener("click", async(e) => {
            e.preventDefault();
            const data = await createCard({
                visitStatus: this.selectOpen.value,
                fullName: this.inputUserFullName.value,
                doctor: this.typeDoctors.value,
                purposeTitle: this.visitPurpose.value,
                description: this.visitDescription.value,
                priority: this.urgencyPatient.value,
                dataLastVisit: this.dentistdateOfLastVisit.value,
            });

            new VisitDentist(
                deleteCardVisit,
                editCardVisitFn,
                data.visitStatus,
                data.id,
                data.purposeTitle,
                data.fullName,
                data.doctor,
                data.priority,
                data.description,
                data.dataLastVisit
            ).render(containerCards);
            this.closeCardForm();
            document.body.style.overflow = '';
        });
    }

    therapistCreateModal() {
        this.doctorsVisitListTherapist.classList.add("doctors_visit_list");
        this.btnCreateVisiteTherapist.classList.add("btn");
        this.btnCreateVisiteTherapist.classList.add("btn-success");

        this.divOpenUrgency.after(this.doctorsVisitListTherapist);
        this.doctorsVisitListTherapist.append(
            this.therapistPatientAge,
            this.btnCreateVisiteTherapist
        );

        this.therapistPatientAge.setAttribute("type", "text");
        this.therapistPatientAge.setAttribute("placeholder", "Patient Age");
        this.btnCreateVisiteTherapist.setAttribute("type", "submit");

        this.btnCreateVisiteTherapist.innerText = "CREATE VISIT";

        // ------------------------------------------------------------
        this.btnCreateVisiteTherapist.addEventListener("click", async(e) => {
            e.preventDefault();
            const data = await createCard({
                visitStatus: this.selectOpen.value,
                fullName: this.inputUserFullName.value,
                doctor: this.typeDoctors.value,
                purposeTitle: this.visitPurpose.value,
                description: this.visitDescription.value,
                priority: this.urgencyPatient.value,
                ageUser: this.therapistPatientAge.value,
            });

            new VisitTherapist(
                deleteCardVisit,
                editCardVisitFn,
                data.visitStatus,
                data.id,
                data.purposeTitle,
                data.fullName,
                data.doctor,
                data.priority,
                data.description,
                data.ageUser
            ).render(containerCards);
            this.closeCardForm();
            document.body.style.overflow = '';
        });
    }

    closeCardForm() {
        this.createCardModalForm.classList.add("modal--close");
        document.body.style.overflow = '';
        setTimeout(() => {
            this.createCardModalForm.remove();
            this.createCardModalDivBg.remove();
        }, 500);
    }

    selectWraper() {
        this.typeDoctors.addEventListener("click", () => {
            const typeDoctor = this.typeDoctors.value;
            // console.log(typeDoctor);
            if (typeDoctor === "cardiologist") {
                this.doctorsVisitListCardio.classList.toggle("modal_show");
            } else if (typeDoctor === "dentist") {
                this.doctorsVisitListDentist.classList.toggle("modal_show");
            } else if (typeDoctor === "therapist") {
                this.doctorsVisitListTherapist.classList.toggle("modal_show");
            }
        });
    }

    validModal() {
        this.createCardModalForm.addEventListener("click", () => {
            if (
                this.inputUserFullName.value === "" ||
                this.visitPurpose.value === "" ||
                this.visitDescription.value === ""
            ) {
                this.btnCreateVisiteCardio.disabled = true;
                this.btnCreateVisiteDentist.disabled = true;
                this.btnCreateVisiteTherapist.disabled = true;
            } else {
                this.btnCreateVisiteCardio.disabled = false;
                this.btnCreateVisiteDentist.disabled = false;
                this.btnCreateVisiteTherapist.disabled = false;
            }
        });

        this.inputUserFullName.addEventListener("blur", () => {
            let value = this.inputUserFullName.value;
            if (value === "") {
                this.inputUserFullName.classList.add("invalid");
                this.typeDoctors.disabled = true;
            }
            if (value) {
                this.inputUserFullName.classList.remove("invalid");
                this.typeDoctors.disabled = false;
            }
        });

        this.visitPurpose.addEventListener("blur", () => {
            let value = this.visitPurpose.value;
            if (value === "") {
                this.visitPurpose.classList.add("invalid");
                this.typeDoctors.disabled = true;
            }
            if (value) {
                this.visitPurpose.classList.remove("invalid");
                this.typeDoctors.disabled = false;
            }
        });

        this.visitDescription.addEventListener("blur", () => {
            let value = this.visitDescription.value;
            if (value === "") {
                this.visitDescription.classList.add("invalid");
                this.typeDoctors.disabled = true;
            }
            if (value) {
                this.visitDescription.classList.remove("invalid");
                this.typeDoctors.disabled = false;
            }
        });
        this.urgencyPatient.addEventListener("blur", () => {
            let value = this.urgencyPatient.value;
            console.log(value);
            if (value === "") {
                this.urgencyPatient.classList.add("invalid");
                this.typeDoctors.disabled = true;
            } else {
                this.urgencyPatient.classList.remove("invalid");
                this.typeDoctors.disabled = false;
            }
        });
    }

    render(container = this.modalBody) {
        this.createCardModal();
        this.cardiologistCreateModal();
        this.dentistCreateModal();
        this.therapistCreateModal();
        this.selectWraper();
        this.validModal();
        container.append(this.createCardModalDivBg, this.createCardModalForm);
    }
}

export default CreateCardModal;