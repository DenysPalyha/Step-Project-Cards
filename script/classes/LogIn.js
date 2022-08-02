import Modal from "./Modal.js";

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

  render() {
    super.render();
  }
}

export default LogIn;
