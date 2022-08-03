const root = document.getElementById("root");

class Visit {
  constructor(title, fullName, doctor, priority, description) {
    this.title = title;
    this.fullName = fullName;
    this.description = description;
    this.doctor = doctor;
    this.priority = priority;

    this.cardVisit = document.createElement("div");
    this.fullNameElem = document.createElement("h2");
    this.buttonEditCard = document.createElement("button");
    this.buttonCloseCard = document.createElement("button");
    this.cardDoctorElem = document.createElement("h2");
    this.cardInfoDescShowMore = document.createElement("div");
    this.cardTitleVisit = document.createElement("h2");
    this.cardDescription = document.createElement("p");
    this.statusCardPriority = document.createElement("h2");
    this.buttonShowMoreInfo = document.createElement("button");
  }

  createCardVisit() {
    const cardWrapper = document.createElement("div");
    const cardBtnWrapper = document.createElement("div");

    this.cardVisit.classList.add("card");
    this.cardVisit.classList.add("card__visit");
    cardWrapper.classList.add("card__wraper");
    this.fullNameElem.classList.add("card__name-title");
    cardBtnWrapper.classList.add("card__btn");
    this.buttonEditCard.classList.add("btn__edit-card");
    this.buttonCloseCard.classList.add("btn-close");
    this.cardDoctorElem.classList.add("card__doctor");
    this.cardInfoDescShowMore.classList.add("card__info");
    this.cardInfoDescShowMore.classList.add("hide__card");
    this.cardTitleVisit.classList.add("card__priority");
    this.cardDescription.classList.add("card__description");
    this.statusCardPriority.classList.add("card__priority");
    this.buttonShowMoreInfo.classList.add("btn__show-more");

    this.buttonEditCard.setAttribute("type", "button");
    this.buttonCloseCard.setAttribute("type", "button");
    this.buttonCloseCard.setAttribute("aria-label", "Close");
    this.cardInfoDescShowMore.setAttribute("data-show-more", "true");

    this.buttonShowMoreInfo.innerText = "Show more";

    this.buttonEditCard.insertAdjacentHTML(
      "beforeend",
      `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="card__icon-edit"
        viewBox="0 0 16 16"
      >
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
    `
    );

    this.cardVisit.append(
      cardWrapper,
      this.cardDoctorElem,
      this.cardInfoDescShowMore,
      this.buttonShowMoreInfo
    );
    cardWrapper.append(this.fullNameElem, cardBtnWrapper);
    cardBtnWrapper.append(this.buttonEditCard, this.buttonCloseCard);
    this.cardInfoDescShowMore.append(
      this.cardTitleVisit,
      this.cardDescription,
      this.statusCardPriority
    );
  }

  showAndHideInfoText() {
    if (this.cardInfoDescShowMore.dataset.showMore === "true") {
      this.cardInfoDescShowMore.classList.remove("hide__card");
      this.cardInfoDescShowMore.dataset.showMore = false;
      this.buttonShowMoreInfo.innerText = "Hide description";
    } else {
      this.cardInfoDescShowMore.classList.add("hide__card");
      this.cardInfoDescShowMore.dataset.showMore = true;
      this.buttonShowMoreInfo.innerText = "Show more";
    }
  }

  render() {
    this.createCardVisit();

    this.fullNameElem.innerText = this.fullName;
    this.cardDoctorElem.innerText = this.doctor;
    this.cardTitleVisit.innerText = this.title;
    this.cardDescription.innerText = this.description;
    this.statusCardPriority.innerText = this.priority;

    root.append(this.cardVisit);

    this.buttonShowMoreInfo.addEventListener(
      "click",
      this.showAndHideInfoText.bind(this)
    );
  }
}

export default Visit;
