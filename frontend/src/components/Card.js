import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onDeleteButtonClick, onCardLike }){
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;

  const cardDeleteButtonClassName = (
    `${isOwn ? 'element__delete-button' : 'element__delete-button_hidden'}`
  );

  const isLiked = card.likes.some(i => i === currentUser._id);

  const cardLikeButtonClassName = `${isLiked ? 'element__like-button_active' : 'element__like-button'}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleDeletePlaceClick() {
    onDeleteButtonClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return(
    <div className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-area">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick} />
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
        <button className={cardDeleteButtonClassName} type="reset" onClick={handleDeletePlaceClick} />
      </div>
    </div>
  )
}

export default Card;