import React from 'react';

function ImagePopup({ card, onClose }) {
  return(
    <div className={`popup ${card.link ? 'popup_is-opened' : ''}`} onClose={onClose}>
      <div className="popup__content popup__content_theme_photo">
        <button className="popup__close page__buttons" type="button" onClick={onClose} />
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name} />
          <figcaption className="popup__text">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
