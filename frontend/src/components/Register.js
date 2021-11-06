import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ handleRegistration }) {

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

    handleRegistration(email, password);
  }

  return(
    <div className="auth">
      <h1 className="auth__title">Регистрация</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="input-container">
          <input className="input-container__item input-container__item_type_dark" required id="userEmail" name="username" placeholder="Email" type="email" tabIndex="1" onChange={handleChangeEmail} value={userEmail}/>
          <span className="input-container__input-error" id="userEmail-error" />
          <input className="input-container__item input-container__item_type_dark" required id="userPassword" name="password" placeholder="Пароль" type="password" tabIndex="2" onChange={handleChangePassword} value={userPassword}/>
          <span className="input-container__input-error" id="userPassword-error" />
          <button type="submit" className="input-container__button input-container__button_type_dark">Зарегистрироваться</button>
        </fieldset>
      </form>
      <div className="auth__signup">
        <p>Уже зарегистрированы?</p>
        <Link className="auth__link" to="/sing-in">Войти</Link>
      </div>
    </div>
  )
}

export default Register;