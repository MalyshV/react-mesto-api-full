import React, { useState } from 'react';

function Login({ handleAuthorization }) {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function handleChangeEmail(e) {
    setUserEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setUserPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const email = userEmail;
    const password = userPassword;
    handleAuthorization(email, password);
  }

  return(
    <div className="auth">
      <h1 className="auth__title">Вход</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="input-container">
          <input id="email" className="input-container__item input-container__item_type_dark" required name="username" placeholder="Email" type="email" tabIndex="1" onChange={handleChangeEmail} value={userEmail}/>
          <span className="input-container__input-error" id="email-error" />
          <input id="password" className="input-container__item input-container__item_type_dark" required name="password" placeholder="Пароль" type="password" tabIndex="2" onChange={handleChangePassword} value={userPassword}/>
          <span className="input-container__input-error" id="password-error" />
          <button type="submit" className="input-container__button input-container__button_type_dark">Войти</button>
        </fieldset>
      </form>
  </div>
  )
}

export default Login;