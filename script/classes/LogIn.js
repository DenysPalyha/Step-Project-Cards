import Modal from "./Modal.js";
import { logInUser } from "../api/logInUser.js";

class LogIn extends Modal {
  constructor() {
    super();

    this.formLogIn = document.createElement("form");
    this.inputEmail = document.createElement("input");
    this.inputPassword = document.createElement("input");
    this.btnComeIn = document.createElement("button");

    this.resWalidEmeil = "";
    this.resWalidPssword = "";
  }

  createModal() {
    super.createModal();
    const lableEmail = document.createElement("label");
    const lablePassword = document.createElement("label");

    this.formLogIn.classList.add("form-log-in");
    lableEmail.classList.add("form__lable-log-in");
    lablePassword.classList.add("form__lable-log-in");
    this.inputEmail.classList.add("form-control");
    this.inputEmail.classList.add("form__input-email");
    this.inputPassword.classList.add("form-control");
    this.inputPassword.classList.add("form__input-password");
    this.btnComeIn.classList.add("btn");
    this.btnComeIn.classList.add("btn-success");

    this.inputEmail.setAttribute("type", "email");
    this.inputEmail.setAttribute("id", "inputEmail");
    this.inputEmail.setAttribute("placeholder", "email@example.com");
    this.inputPassword.setAttribute("type", "password");
    this.inputPassword.setAttribute("id", "inputPassword");

    this.modalTitle.innerText = "Log in";
    lableEmail.innerText = "Email";
    lablePassword.innerText = "Password";
    this.btnComeIn.innerText = "To come in";

    this.modalBody.append(this.formLogIn);
    this.formLogIn.append(lableEmail, lablePassword);
    lableEmail.append(this.inputEmail);
    lablePassword.append(this.inputPassword);
    this.modalFooter.append(this.btnComeIn);
  }

  warnNotEmail(container = document.body) {
    const divWarn = document.createElement("div");
    divWarn.classList.add("alert");
    divWarn.classList.add("alert-danger");
    divWarn.classList.add("alert__dangers-email");
    divWarn.setAttribute("role", "alert");
    divWarn.innerText = "Your email address or password is not correct!";
    container.append(divWarn);

    setTimeout(() => {
      divWarn.remove();
    }, 2500);
  }

  validateFormLogIn() {
    const emailPattern = /^[a-zA-Z0-3._-]+@[a-zA-Z0-3.-]+\.[a-zA-Z]{2,4}$/;
    this.resWalidEmeil = emailPattern.test(this.inputEmail.value);

    const strongRegex = new RegExp("^(?=.{4,})");
    this.resWalidPssword = strongRegex.test(this.inputPassword.value);
  }

  render() {
    super.render();

    this.inputEmail.addEventListener("input", () => {
      this.validateFormLogIn();
      if (this.resWalidEmeil === false) {
        this.inputEmail.classList.add("is-invalid");
      }
      if (this.resWalidEmeil) {
        this.inputEmail.classList.remove("is-invalid");
        this.inputEmail.classList.add("is-valid");
      }
    });
    this.inputPassword.addEventListener("input", () => {
      this.validateFormLogIn();
      if (this.resWalidPssword === false) {
        this.inputPassword.classList.add("is-invalid");
      }
      if (this.resWalidPssword) {
        this.inputPassword.classList.remove("is-invalid");
        this.inputPassword.classList.add("is-valid");
      }
    });

    this.btnComeIn.addEventListener("click", (e) => {
      e.preventDefault();
      this.validateFormLogIn();

      if (this.resWalidEmeil && this.resWalidPssword) {
        this.inputEmail.classList.remove("is-invalid");
        logInUser(this.inputEmail.value, this.inputPassword.value);
        this.closeModal();
      }
      if (this.resWalidEmeil === false) {
        this.inputEmail.classList.add("is-invalid");
        this.warnNotEmail();
      }

      if (this.resWalidPssword === false) {
        this.inputPassword.classList.add("is-invalid");
        this.warnNotEmail();
      }
    });
  }
}

export default LogIn;
