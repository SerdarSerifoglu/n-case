import FilmCard from "./filmCard.js";
import { globalState, setGlobalState } from "./globalState.js";
import { renderList } from "./list.js";

var responseData = [];
function getCards(search, limit) {
  $.ajax({
    url: "http://www.omdbapi.com/",
    dataType: "json",
    data: {
      apikey: "a5813d86",
      s: search,
      page: 1,
    },
    success: function (data) {
      console.log("data", data);
      responseData = data.Search;
      setGlobalState("filmList", data.Search);
      setGlobalState("totalResultCount", data.totalResults);
      $(".film-card").remove();
      responseData
        .filter((e, i) => (limit ? i < limit : e))
        .forEach((e) => {
          var filmCard = new FilmCard(e);
          $(".film-list").append(filmCard.render());
        });
      $(".more-film-button").show();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
}

(function () {
  $("#input-search").change(function () {
    if (this.value.length > 2) {
      getCards(this.value, 2);
      setGlobalState("searchText", this.value);
      console.log("searchText", globalState.searchText);
    }
  });
  $(".more-film-button").click(function () {
    console.log("click serdar");
    // $(".film-card").remove();

    console.log("Tıklandı");
    window.location.hash = "serdar";
    $(".main").remove();
    $("body").add("main").addClass("main");
    renderList();

    globalState.filmList.forEach((e, i) => {
      var filmCard = new FilmCard(e, false);
      $(".film-list").append(filmCard.render());
    });
  });
})();
