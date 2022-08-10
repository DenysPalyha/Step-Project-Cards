import { containerCards } from "../layout/cardVisitContainer.js";
const filterForm = document.createElement("div");

filterForm.className = "filter-form";
filterForm.innerHTML = `<div class="filter-block">
<label for="filter-title" class="filter-label"
  >За заголовком/описом</label
><input
  type="text"
  placeholder="Введіть текст для пошуку"
  id="filter-title"
/>
</div>

<div class="filter-block">
<label for="filter-status" class="filter-label">За статусом</label>
<select name="Пошук за статусом" id="filter-status">
  <option value="ALL" class="filter-status--option">All</option>
  <option value="Done" class="filter-status--option">Done</option>
  <option value="Open" class="filter-status--option">Open</option>
</select>
</div>

<div class="filter-block">
<label for="filter-priority" class="filter-label">За пріоритетом</label>
<select name="Пошук за пріоритетом" id="filter-priority">
  <option value="ALL" class="filter-status--option">All</option>
  <option value="High" class="filter-priority--option">High</option>
  <option value="Normal" class="filter-priority--option">Normal</option>
  <option value="Low" class="filter-priority--option">Low</option>
</select>
</div>`;

containerCards.before(filterForm);
export default filterForm;
