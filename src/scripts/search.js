import FilmCard from "./filmCard.js";

var searchText = "Ömer Serdar";
var responseData = [];
function getCards(search) {
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
      responseData.forEach((e) => {
        console.log("fore", e);
        var xxxx = new FilmCard(e);
        $(".test").append(xxxx.render());
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    },
  });
}

// getCards("lord of");
