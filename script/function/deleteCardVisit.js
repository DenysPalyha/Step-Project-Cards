import CloseCardsModale from "../classes/CloseCardsModal.js";

export const deleteCardVisit = (id) => {
  new CloseCardsModale(id).render();
};
