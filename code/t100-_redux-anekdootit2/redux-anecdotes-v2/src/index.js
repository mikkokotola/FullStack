import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import anecdoteService from './services/anecdotes'
import { anecdoteInitialization } from './reducers/anecdoteReducer'
import App from './App'

/* anecdoteService.getAll().then(anecdotes =>
  store.dispatch(anecdoteInitialization(anecdotes)
)) */

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'))
}

render()
store.subscribe(render)