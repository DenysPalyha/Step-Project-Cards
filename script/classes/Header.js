import LogIn from "./LogIn.js";

export const root = document.getElementById("root");

class Header {
  constructor() {
    this.buttonLogInUser = document.createElement("button");
    this.divWrapperBtnLogIn = document.createElement("div");
  }

  createHeaderHtml() {
    const header = document.createElement("header");
    const divContainer = document.createElement("div");

    root.prepend(header);

    header.classList.add("header");
    header.classList.add("bg-secondary");
    divContainer.classList.add("container");
    divContainer.classList.add("header__flex-position");
    this.buttonLogInUser.classList.add("btn");
    this.buttonLogInUser.classList.add("btn-primary");
    this.buttonLogInUser.classList.add("js-button-log-in");
    this.divWrapperBtnLogIn.classList.add("header__wrraper-btn");

    this.buttonLogInUser.setAttribute("type", "button");
    this.buttonLogInUser.innerText = "Log in";

    header.append(divContainer);

    divContainer.insertAdjacentHTML(
      "beforeend",
      `
            <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img
                        src="./images/logo.png"
                        alt=""
                        width="30"
                        height="24"
                        class="d-inline-block align-text-top header__img"
                        />
                    </a>
                </div>
            </nav>
        `
    );
    divContainer.append(this.divWrapperBtnLogIn);
    this.divWrapperBtnLogIn.append(this.buttonLogInUser);
  }

  render() {
    this.createHeaderHtml();

    this.buttonLogInUser.addEventListener("click", () => {
      new LogIn().render();
    });
  }
}

export default Header;
