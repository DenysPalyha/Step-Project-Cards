import Header from "./classes/Header.js";

import VisitCardiologist from "./classes/VisitCardiologist.js";
import VisitDentist from "./classes/VisitDentist.js";
import VisitTherapist from "./classes/VisitTherapist.js";
import { container } from "./layout/cardVisitContainer.js";

new Header().render();

new VisitCardiologist(
  "плановый визит",
  "Робен Владилен Анатолиевич",
  "кардиолог",
  "normal",
  "lorem ipsun teritory!!!",
  "120/60"
).render(container);

new VisitDentist(
  "плановый визит",
  "Робен Владилен Анатолиевич",
  "кардиолог",
  "normal",
  "lorem ipsun teritory!!!",
  "29.09.22"
).render(container);

new VisitTherapist(
  "плановый визит",
  "Робен Владилен Анатолиевич",
  "кардиолог",
  "normal",
  "lorem ipsun teritory!!!",
  "22"
).render(container);
