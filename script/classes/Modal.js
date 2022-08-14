class Modal {
  constructor() {
    this.modalFade = document.createElement("div");
    this.modalBackgroundColor = document.createElement("div");
    this.modalContainer = document.createElement("div");
    this.modalHeader = document.createElement("div");
    this.modalTitle = document.createElement("h5");
    this.btnCloseModal = document.createElement("button");
    this.modalBody = document.createElement("div");
    this.modalFooter = document.createElement("div");
  }

  createModal() {
    this.modalFade.classList.add("modale");
    this.modalBackgroundColor.classList.add("modal__background");
    this.modalContainer.classList.add("modal__main-container");
    this.modalHeader.classList.add("modal__header");
    this.modalTitle.classList.add("modal__header-tetle");
    this.btnCloseModal.classList.add("btn-close");
    this.modalBody.classList.add("modal__body");
    this.modalFooter.classList.add("modal__footer");

    this.btnCloseModal.setAttribute("type", "button");
    this.btnCloseModal.setAttribute("aria-label", "Close");

    this.modalBackgroundColor.addEventListener(
      "click",
      this.closeModal.bind(this)
    );
    this.btnCloseModal.addEventListener("click", this.closeModal.bind(this));

    this.modalFade.append(this.modalBackgroundColor, this.modalContainer);
    this.modalHeader.append(this.modalTitle, this.btnCloseModal);
    this.modalContainer.append(
      this.modalHeader,
      this.modalBody,
      this.modalFooter
    );
  }

  closeModal() {
    this.modalFade.remove();
  }

  render(container = document.body) {
    this.createModal();
    container.prepend(this.modalFade);
  }
}

export default Modal;
