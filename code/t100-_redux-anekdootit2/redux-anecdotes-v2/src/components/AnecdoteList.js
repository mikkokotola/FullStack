import React from 'react'
import PropTypes from 'prop-types'
import { anecdoteVoting } from '../reducers/anecdoteReducer'
import { clearNotification, setNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const anecdotesToShow = () => {
      const { anecdotes, filter } = this.context.store.getState()
      if (filter === 'ALL') {
        return anecdotes
      }

      return anecdotes.filter(anecd => anecd.content.toLowerCase().includes(filter.toLowerCase()))
    }

    //const anecdotes = this.context.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotesToShow().sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.context.store.dispatch(anecdoteVoting(anecdote.id, anecdote.content))
                this.context.store.dispatch(setNotification(anecdote.content))
                setTimeout(() => {
                  this.context.store.dispatch(clearNotification())
                }, 5000)
              }
              
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
