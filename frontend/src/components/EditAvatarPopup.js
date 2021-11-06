import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = useState('');

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar
    });
    setAvatar('');
  }

  return(
    <PopupWithForm name="userPhotoForm" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} textOnButton="Сохранить">
      <input id="url" type="url" className="input-container__item" name="avatar" placeholder="Ссылка на фото" value={avatar || ''} tabIndex="1" required onChange={handleAvatarChange} />
      <span className="input-container__input-error">Введите ссылку</span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;