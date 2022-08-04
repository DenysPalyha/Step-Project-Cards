import { root } from "../classes/Header.js";

const main = document.createElement("main");
export const container = document.createElement("div");
container.classList.add("container");
container.classList.add("card__flex-position");
root.append(main);
main.append(container);
