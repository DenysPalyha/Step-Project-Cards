import Header from "./classes/Header.js";

import VisitCardiologist from "./classes/VisitCardiologist.js";
import VisitDentist from "./classes/VisitDentist.js";
import VisitTherapist from "./classes/VisitTherapist.js";
import { containerCards } from "./layout/cardVisitContainer.js";

import { deleteCardVisit } from "./function/deleteCardVisit.js";
import { editCardVisitFn } from "./function/editCardVisit.js";

new Header().render();

new VisitCardiologist(
  deleteCardVisit,
  editCardVisitFn,
  1,
  "плановый визит",
  "Робен Владилен Анатолиевич",
  "кардиолог",
  "normal",
  "lorem ipsun teritory!!!",
  "120/60"
).render(containerCards);

new VisitDentist(
  deleteCardVisit,
  editCardVisitFn,
  2,
  "плановый визит",
  "Робен Владилен Анатолиевич",
  "Стоматолог",
  "normal",
  "lorem ipsun teritory!!!",
  "29.09.22"
).render(containerCards);

new VisitTherapist(
  deleteCardVisit,
  editCardVisitFn,
  3,
  "плановый визит",
  "Робен Владилен Анатолиевич",
  "Терапевт",
  "normal",
  "lorem ipsun teritory!!!",
  "22"
).render(containerCards);
