import Header from "./classes/Header.js";
import Visit from "./classes/Visit.js";
import VisitCardiologist from "./classes/VisitCardiologist.js";

new Header().render();
new Visit("плановый визит", "палыга денис викторович", "терапевт").render();

new VisitCardiologist(
  "плановый визит",
  "палыга денис викторович",
  "кардиолог",
  "normal",
  "lorem ipsun teritory!!!",
  "120/60"
).render();
