export const removeBtnLogIngAndAddCreatVisitBtn = () => {
  const btnLogIn = document.querySelector(".js-button-log-in");
  btnLogIn.remove();
  const headerWrapperBtn = document.querySelector(".header__wrraper-btn");

  const btnCreateCardVisit = document.createElement("button");
  btnCreateCardVisit.classList.add("btn");
  btnCreateCardVisit.classList.add("btn-success");
  btnCreateCardVisit.innerText = "Create visit";

  headerWrapperBtn.append(btnCreateCardVisit);

  btnCreateCardVisit.addEventListener("click", () => {
    console.log("Create visit");
  });
};
