import Visit from "./Visit.js";

const root = document.getElementById("root");

class VisitCardiologist extends Visit {
  constructor(
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
    super(title, fullName, doctor, priority, description);

    this.normalPressure = normalPressure;
    this.bodyMassIndex = bodyMassIndex;
    this.cardiovascularSystem = cardiovascularSystem;
    this.age = age;

    if (this.normalPressure === undefined) {
      this.normalPressure = "";
    }
    if (this.bodyMassIndex === undefined) {
      this.bodyMassIndex = "";
    }

    if (this.cardiovascularSystem === undefined) {
      this.cardiovascularSystem = "";
    }
    if (this.age === undefined) {
      this.age = "";
    }

    this.elemPressure = document.createElement("p");
    this.elemMassIndex = document.createElement("p");
    this.elemCardioSystam = document.createElement("p");
    this.elemAge = document.createElement("p");
  }

  createCardVisit() {
    super.createCardVisit();

    this.elemPressure.classList.add("card__description");
    this.elemMassIndex.classList.add("card__description");
    this.elemCardioSystam.classList.add("card__description");
    this.elemAge.classList.add("card__description");

    this.cardInfoDescShowMore.append(
      this.elemPressure,
      this.elemMassIndex,
      this.elemCardioSystam,
      this.elemAge
    );
  }

  render() {
    super.render();

    this.elemPressure.innerText = this.normalPressure;
    this.elemMassIndex.innerText = this.bodyMassIndex;
    this.elemCardioSystam.innerText = this.cardiovascularSystem;
    this.elemAge.innerText = this.age;
  }
}

export default VisitCardiologist;
