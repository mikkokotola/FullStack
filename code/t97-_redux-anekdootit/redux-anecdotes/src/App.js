import React from 'react';
import {asObject} from './reducer'

class App extends React.Component {
  /* resetVotes = (command) => () => {
    //event.preventDefault()
    this.props.store.dispatch({
      type: command
    })
  } */

  vote = (id) => () => {
    this.props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    this.props.store.dispatch({
      type: 'NEW_ANECDOTE',
      data: asObject(content)
    })
    event.target.anecdote.value = ''  
  }


  render() {
    const anecdotes = this.props.store.getState()
    console.log(anecdotes)
    let byVotes = anecdotes.slice(0)
    byVotes.sort(function (a, b) {
      return a.votes < b.votes ? 1 : a.votes > b.votes ? -1 : 0;
    })
    return (
      <div>
        <h2>Anecdotes</h2>
        {byVotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes} votes
              <button onClick={this.vote(anecdote.id)}>Vote</button>
            </div>
          </div>
        )}
        <h2>Create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name='anecdote'/></div>
          <button type='submit'>Create</button>
        </form>
        {/* <h2>Reset</h2>
        <form>
          <button onClick={this.resetVotes('ZERO')}>Reset votes</button>
        </form> */}
      </div>
    )
  }
}

/* const actionFor = {
  noteCreation(content) {
    return {
      type: 'NEW_NOTE',
      data: {
        content,
        important: false,
        id: generateId()
      }
    }
  },
  importanceToggling(id) {
    return {
      type: 'TOGGLE_IMPORTANCE',
      data: { id }
    }
  }
}
 */

export default App