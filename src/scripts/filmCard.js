class FilmCard {
  constructor(e) {
    this.title = e.Title;
    this.imgUrl = e.Poster;
  }

  render() {
    return `<div class="film-card">
     <div class="film-card__image">
       <img width="100" src="${this.imgUrl}"/>
     </div>
     <div class="film-card__info">
       <div class="film-card__title">
         ${this.title}
       </div>
       <div class="film-card__score">
         <span class="film-card__score-emphasis">6.8</span>/10
       </div>
       <br />
       <div class="film-card__language"><span class="film-card__subtitle">Dil:
         </span>
         İngilizce
       </div>
       <div class="film-card__actors"><span class="film-card__subtitle">Oyuncular:
         </span>
         Jeff Bridges, Garrett Hedlund,
         Olivia Wilde | <span class="underline-link">Tüm listeyi gör</span>
       </div>
       <br />
       <div class="film-card__description">
         Lorem ipsum dolor sit amet, consectetuer
         adipiscing elit, sed diam nonummy nibh
         euismod tincidunt ut laoreet dolore magna
         aliquam erat <span class="underline-link">Detaylar</span>
       </div>
     </div>
   </div>`;
  }
}

export default FilmCard;
