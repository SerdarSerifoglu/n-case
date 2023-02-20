export function renderList() {
  var result = `<input
    id="input-search"
    class="input-search"
    type="text"
    placeholder="Bulmak istediğiniz filmin adını yazınız"
  />
  <div class="film-list"></div>
  <div class="back-to-top">BAŞA DÖN</div>`;
  $(".main").append(result);
}
