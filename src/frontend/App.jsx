import React from 'react'
import { hot } from 'react-hot-loader'
import SVG from 'react-inlinesvg'

import Main from 'components/Main'

import logo from './logo.svg'
import style from './App.style'

// TODO: use class instead of function
const App = () => (
  <div className={style.App}>
    <header className={style.header}>
      <SVG src={logo} className={style.logo} />
      <h1 className={style.title}>Welcome to React</h1>
    </header>
    <p className={style.intro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Main />
  </div>
)

export default hot(module)(App)
