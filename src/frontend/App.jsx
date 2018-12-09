import React from 'react'
import { hot } from 'react-hot-loader'

import logo from './logo.svg'
import style from './App.style'

const App = () => (
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

export default hot(module)(App)
