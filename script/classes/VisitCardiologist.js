import Visit from "./Visit.js";
import CreateCardModal from "./CreateCardModal.js";

class VisitCardiologist extends Visit {
    constructor(
        deletFunction,
        editCardVisitFn,
        visitStatus,
        id,
        title,
        fullName,
        doctor,
        priority,
        description,
        normalPressure,
        bodyMassIndex,
        cardiovascularSystem,
        age
    ) {
        super(
            deletFunction,
            editCardVisitFn,
            visitStatus,
            id,
            title,
            fullName,
            doctor,
            priority,
            description
        );

        this.normalPressure = normalPressure;
        this.bodyMassIndex = bodyMassIndex;
        this.cardiovascularSystem = cardiovascularSystem;
        this.age = age;

        if (this.normalPressure === undefined || this.normalPressure === "") {
            this.normalPressure = "-";
        }
        if (this.bodyMassIndex === undefined || this.bodyMassIndex === "") {
            this.bodyMassIndex = "-";
        }

        if (
            this.cardiovascularSystem === undefined ||
            this.cardiovascularSystem === ""
        ) {
            this.cardiovascularSystem = "-";
        }
        if (this.age === undefined || this.age === "") {
            this.age = "-";
        }

        this.elemPressure = document.createElement("p");
        this.elemMassIndex = document.createElement("p");
        this.elemCardioSystam = document.createElement("p");
        this.elemAge = document.createElement("p");
    }

    createCardVisit() {
        super.createCardVisit();

        const divPressure = document.createElement("div");
        const divMassIndex = document.createElement("div");
        const divCardio = document.createElement("div");
        const divAge = document.createElement("div");

        divPressure.insertAdjacentHTML(
            "beforeend",
            `<h5 class="card__name-section">Pressure:</h5>`
        );
        divPressure.append(this.elemPressure);
        divMassIndex.insertAdjacentHTML(
            "beforeend",
            `<h5 class="card__name-section">Mass Index:</h5>`
        );
        divMassIndex.append(this.elemMassIndex);
        divCardio.insertAdjacentHTML(
            "beforeend",
            `<h5 class="card__name-section">Diseases of the cardiovascular system:</h5>`
        );
        divCardio.append(this.elemCardioSystam);

        divAge.insertAdjacentHTML(
            "beforeend",
            `<h5 class="card__name-section">Age:</h5>`
        );
        divAge.append(this.elemAge);

        this.elemPressure.classList.add("card__description");
        this.elemMassIndex.classList.add("card__description");
        this.elemCardioSystam.classList.add("card__description");
        this.elemAge.classList.add("card__description");

        this.cardInfoDescShowMore.append(
            divPressure,
            divMassIndex,
            divCardio,
            divAge
        );
    }

    render(container) {
        super.render(container);

        this.elemPressure.innerText = this.normalPressure;
        this.elemMassIndex.innerText = this.bodyMassIndex;
        this.elemCardioSystam.innerText = this.cardiovascularSystem;
        this.elemAge.innerText = this.age;
    }
}

export default VisitCardiologist;