class FilmCard {
  constructor(e) {
    console.log("e", e);
    this.title = e.Title;
  }

  name(params) {
    console.log("name_run_in FİlmCard");
  }

  render() {
    return `<div class="film-card">
     <div class="film-card__image">
       IMG
     </div>
     <div class="film-card__info">
       <div class="film-card__title">
         ${this.title}
       </div>
       <div class="film-card__score">
         6.8/10
       </div>
       <br />
       <div class="film-card__language"><span class="film-card__subtitle">Dil:
         </span>
         İngilizce
       </div>
       <div class="film-card__language"><span class="film-card__subtitle">Oyuncular:
         </span>
         Jeff Bridges, Garrett Hedlund,
         Olivia Wilde | Tüm listeyi gör »
       </div>
       <br />
       <div class="film-card__description">
         Lorem ipsum dolor sit amet, consectetuer
         adipiscing elit, sed diam nonummy nibh
         euismod tincidunt ut laoreet dolore magna
         aliquam erat Detaylar
       </div>
     </div>
   </div>`;
  }
}
FilmCard.prototype.serdar = function () {
  console.log("protoSerdar_FilmCard");
};

export default FilmCard;
