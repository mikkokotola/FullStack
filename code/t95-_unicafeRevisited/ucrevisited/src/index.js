import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import counterReducer from './components/reducer'

const store = createStore(counterReducer)

const Statistiikka = ({reset}) => {
  const count = store.getState()
  console.log(count)
  const palautteita = count.good + count.ok + count.bad
  
  if (palautteita === 0) {
    return (
      <div>
        <h2>Statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{count.good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{count.ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{count.bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{parseFloat((count.good-count.bad)/palautteita).toFixed(2)}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{parseFloat(100*count.good/palautteita).toFixed(2)+"%"}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={reset}>nollaa tilasto</button>
    </div >
  )
}

/* const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
  }
  return state
} */



class App extends React.Component {
  klik = (nappi) => () => {
    store.dispatch({
      type: nappi
    })
  }

/*   getCounts = () => {
    store.dispatch({
      type: {nappi}
    })
  }
 */
  render() {
    return (
      <div>
        <h2>Anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka reset={this.klik('ZERO')}/>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)
