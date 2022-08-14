import Visit from "./Visit.js";

class VisitDentist extends Visit {
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
    dataLastVisit
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

    this.dataLastVisit = dataLastVisit;

    if (this.dataLastVisit === undefined || this.dataLastVisit === "") {
      this.dataLastVisit = "-";
    }

    this.visitDentist = document.createElement("p");
  }

  createCardVisit() {
    super.createCardVisit();

    const divDentist = document.createElement("div");

    this.visitDentist.classList.add("card__description");

    divDentist.insertAdjacentHTML(
      "beforeend",
      `<h5 class="card__name-section">Date of last visit:</h5>`
    );
    divDentist.append(this.visitDentist);

    this.cardInfoDescShowMore.append(divDentist);
  }

  render(container) {
    super.render(container);

    this.visitDentist.innerText = this.dataLastVisit;
  }
}

export default VisitDentist;
