import FilmCard from "./filmCard.js";

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
      console.log(data.Search);
      responseData = data.Search;
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
    }
  });
  $(".more-film-button").click(function () {
    console.log("click serdar");
    $(".film-card").remove();

    responseData.forEach((e) => {
      var filmCard = new FilmCard(e);
      $(".film-list").append(filmCard.render());
    });
  });
})();
