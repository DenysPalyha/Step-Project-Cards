const root = document.getElementById("root");

const main = document.createElement("main");
const containerCards = document.createElement("div");
containerCards.classList.add("container");
containerCards.classList.add("card__flex-position");
root.append(main);
main.append(containerCards);

export { containerCards };
