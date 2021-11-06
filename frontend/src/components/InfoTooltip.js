import React from 'react';
import wrigth from './../images/wright.svg';
import wrong from './../images/wrong.svg';

function InfoTooltip({ isOpen, isRegistered, onClose }) {
  const registrationImage = `${isRegistered ? wrigth : wrong}`;
  const registrationText = `${isRegistered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}`

  return(
    <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__content popup__content_theme_auth">
        <button className="popup__close page__buttons" type="button" onClick={onClose} />
        <img className="popup__icon" src={registrationImage} alt="статус регистрации" />
        <h2 className="popup__title popup__title_theme_auth">{registrationText}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;