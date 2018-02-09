import React from 'react'
//import PropTypes from 'prop-types'
import { anecdoteVoting } from '../reducers/anecdoteReducer'
import { clearNotification, setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.anecdoteVoting(anecdote.id, anecdote.content)
                this.props.setNotification(`You voted ${anecdote.content}`)
                setTimeout(() => {
                  this.props.clearNotification()
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

const anecdotesToShow = (anecdotes, filterForAnect) => {
  //const { anecdotes, filter } = this.props
  if (filterForAnect === 'ALL') {
    return anecdotes
  }

  return anecdotes.filter(anecd => anecd.content.toLowerCase().includes(filterForAnect.toLowerCase()))
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const mapDispatchToProps = {
  anecdoteVoting,
  clearNotification, 
  setNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
