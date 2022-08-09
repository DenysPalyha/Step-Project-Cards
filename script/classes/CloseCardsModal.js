import Modal from "./Modal.js";
import { deleteCardVisitApi } from "../api/deleteCardVisitApi.js";

class CloseCardsModale extends Modal {
  constructor(id) {
    super();

    this.id = id;

    this.buttonComfirm = document.createElement("button");
    this.buttonCancel = document.createElement("button");
  }

  createModal() {
    super.createModal();

    this.buttonComfirm.classList.add("btn");
    this.buttonComfirm.classList.add("btn-success");
    this.buttonComfirm.classList.add("button__comfirm");
    this.buttonCancel.classList.add("btn");
    this.buttonCancel.classList.add("btn-danger");

    this.modalTitle.innerText = "Delete card";
    this.buttonComfirm.innerText = "Comfirm";
    this.buttonCancel.innerText = "Cancel";

    this.modalBody.insertAdjacentHTML(
      "beforeend",
      `
        <h2 class="delet__card-heading">Please confirm card deletion!</h2>
    `
    );

    this.modalFooter.append(this.buttonComfirm, this.buttonCancel);
  }

  render() {
    super.render();

    this.buttonCancel.addEventListener("click", this.closeModal.bind(this));

    this.buttonComfirm.addEventListener("click", async () => {
      const { status } = await deleteCardVisitApi(this.id);

      if (status === 200) {
        const elemForDelet = document.getElementById(this.id);
        elemForDelet.remove();
        this.closeModal();
      }
    });
  }
}

export default CloseCardsModale;
