import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardForm, setCardForm] = useState('');
  const [link, setLink] = useState('');

  function handleCardNameChange(e) {
    setCardForm(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  useEffect(() => {
    setCardForm('');
    setLink('');
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: cardForm,
      link: link
    });
  }

  return(
    <PopupWithForm name="cardForm" title="Новое место" isOpen={isOpen} onClose={onClose} textOnButton="Сохранить" onSubmit={handleSubmit}>
      <input id="placename" className="input-container__item" type="text" name="name" placeholder="Название" value={cardForm || ''} tabIndex="1" minLength="2" maxLength="30" required onChange={handleCardNameChange} />
      <span className="input-container__input-error" id="placename-error" />
      <input id="urlcard" type="url" className="input-container__item"  name="link" placeholder="Ссылка на картинку" value={link || ''} tabIndex="2" required onChange={handleLinkChange} />
      <span className="input-container__input-error" id="urlcard-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;