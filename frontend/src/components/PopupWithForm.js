import React from 'react';

function PopupWithForm({ name, isOpen, onSubmit, onClose, textOnButton, children, title }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__content popup__content_theme_input">
        <button className="popup__close page__buttons" type="button" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
        <form className="form" action="#" name={name} onSubmit={onSubmit}>
          <fieldset className="input-container">
            {children}
            <button type="submit" className="input-container__button">{textOnButton}</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;