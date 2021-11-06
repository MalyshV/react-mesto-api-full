import React, { useState } from 'react';
import logo from '../images/LogoVector.svg';
import { Switch, Route, Link } from 'react-router-dom';
import burger from './../images/Burger.svg';
import burgerClose from './../images/BurgerClose.svg';

function Header({ email, handleSignOut }) {
  const [isClicked, setIsClicked] = useState(false);

  const burgerMenuIcon = `${isClicked ? burgerClose : burger}`;

  function handleBurgerMenuClick() {
    setIsClicked(true);
  }

  return(
    <header className="header page__container">
      {isClicked && 
        <div className="header__loggedIn header__burger">
          <p className="header__email-container">{email}</p>  
          <Link className="page__buttons" to="/sign-in" onClick={handleSignOut}>Выйти</Link>
        </div>
      }
      <div className="header__wrapper">
        <img className="header__logo" src={logo} alt="Логотип сервиса Mesto"/>
          <Switch>
            <Route exact path="/">
              <button className="header__button" onClick={handleBurgerMenuClick}>
                <img src={burgerMenuIcon} alt="Иконка меню"/>
              </button>
              <div className="header__loggedIn">
                <p className="header__email-container">{email}</p>  
                <Link className="page__buttons" to="/sign-in" onClick={handleSignOut}>Выйти</Link>
              </div>
            </Route>
            <Route path="/sign-up">
              <Link className="page__buttons header__link" to="/sign-in">Войти</Link>
            </Route>
            <Route path="/sign-in">
              <Link className="page__buttons header__link" to="/sign-up">Регистрация</Link>
            </Route>
          </Switch>
      </div>
    </header>
  )
}

export default Header;