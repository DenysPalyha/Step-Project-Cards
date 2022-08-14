import Visit from "./Visit.js";

class VisitTherapist extends Visit {
    constructor(
        deleteCardVisit,
        editCardVisitFn,
        visitStatus,
        id,
        title,
        fullName,
        doctor,
        priority,
        description,
        ageUser
    ) {
        super(
            deleteCardVisit,
            editCardVisitFn,
            visitStatus,
            id,
            title,
            fullName,
            doctor,
            priority,
            description
        );
        this.ageUser = ageUser;

        if (this.ageUser === undefined || this.ageUser === "") {
            this.ageUser = "-";
        }

        this.ageUserElement = document.createElement("p");
    }

    createCardVisit() {
        super.createCardVisit();

        const divAge = document.createElement("div");

        this.ageUserElement.classList.add("card__description");

        divAge.insertAdjacentHTML(
            "beforeend",
            `<h5 class="card__name-section">Age:</h5>`
        );
        divAge.append(this.ageUserElement);

        this.cardInfoDescShowMore.append(divAge);
    }

    render(container) {
        super.render(container);

        this.ageUserElement.innerText = this.ageUser;
    }
}

export default VisitTherapist;