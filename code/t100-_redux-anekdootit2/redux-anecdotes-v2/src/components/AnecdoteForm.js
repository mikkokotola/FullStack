import React from 'react'
//import PropTypes from 'prop-types'
import {anecdoteCreation} from '../reducers/anecdoteReducer'
import { clearNotification, setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {
  addAnecdote = async (e) => {
    e.preventDefault()
    //const content = e.target.anecdote.value
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    //this.props.anecdoteCreation(newAnecdoteData)
    const newAnecdote = await anecdoteService.createNew(content)
    this.props.anecdoteCreation(newAnecdote)

    this.props.setNotification(`You created new anecdote: ${content}`)
    setTimeout(() => {
                  this.props.clearNotification()
                }, 5000)
  
    
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}
/* 
AnecdoteForm.contextTypes = {
  store: PropTypes.object
}
export default AnecdoteForm
 */

 const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  anecdoteCreation,
  clearNotification, 
  setNotification
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
