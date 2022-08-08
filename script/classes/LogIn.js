import Modal from "./Modal.js";
import { logInUser } from "../api/logInUser.js";

class LogIn extends Modal {
  constructor() {
    super();

    this.formLogIn = document.createElement("form");
    this.inputEmail = document.createElement("input");
    this.inputPassword = document.createElement("input");
    this.btnComeIn = document.createElement("button");
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
    }, 2000);
  }

  render() {
    super.render();

    this.btnComeIn.addEventListener("click", (e) => {
      e.preventDefault();

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const resWalidEmeil = emailPattern.test(this.inputEmail.value);

      const strongRegex = new RegExp("^(?=.*[0-9])(?=.{3,})");
      const resWalidPssword = strongRegex.test(this.inputPassword.value);

      if (resWalidEmeil && resWalidPssword) {
        this.inputEmail.classList.remove("not-valid-log-in");
        logInUser(this.inputEmail.value, this.inputPassword.value);
        this.closeModal();
      }

      if (resWalidEmeil === false) {
        this.inputEmail.classList.add("not-valid-log-in");
        this.warnNotEmail();
      }
      if (resWalidPssword === false) {
        this.inputPassword.classList.add("not-valid-log-in");
        this.warnNotEmail();
      }

      if (resWalidEmeil) {
        this.inputEmail.classList.remove("not-valid-log-in");
      }
      if (resWalidPssword) {
        this.inputPassword.classList.remove("not-valid-log-in");
      }
    });
  }
}

export default LogIn;