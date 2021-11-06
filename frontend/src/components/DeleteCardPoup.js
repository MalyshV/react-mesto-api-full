import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({ isOpen, onClose }){
  /*function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(props.card);
    console.log('?????????');
  }*/

  return(
    <PopupWithForm name="cardDeleteForm" title="Вы уверены?" isOpen={isOpen} onClose={onClose} textOnButton="Да">
    </PopupWithForm>
  )
  // Временно удалила onSubmit={handleSubmit};
}

export default DeleteCardPopup;