import { globalState } from "./globalState.js";

export function renderList() {
  var result = `<div class="wrapper">
  <div class="search-info">
    <span class="result-text"><b>${globalState.searchText}</b> için sonuçlar</span>
    <span class="total-result-count">${globalState.totalResultCount} film bulundu</span>
  </div>
  </div>
  <div class="film-list"></div>
  <div class="back-to-top">BAŞA DÖN</div>`;
  $(".main").append(result);
}
