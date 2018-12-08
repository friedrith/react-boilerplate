import React from 'react'
import logo from './logo.svg'
import style from './App.style'

export default () => (
  <div className={style.App}>
    <header className={style.header}>
      <img src={logo} className={style.logo} alt="logo" />
      <h1 className={style.title}>Welcome to React</h1>
    </header>
    <p className={style.intro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)
