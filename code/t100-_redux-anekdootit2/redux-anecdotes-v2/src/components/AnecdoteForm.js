import React from 'react'
//import PropTypes from 'prop-types'
import {anecdoteCreation} from '../reducers/anecdoteReducer'
import { clearNotification, setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    //const content = e.target.anecdote.value
    const newAnecdoteData = {
      content: e.target.anecdote.value
    }
    this.props.anecdoteCreation(newAnecdoteData)

    this.props.setNotification(`You created new anecdote: ${newAnecdoteData.content}`)
    setTimeout(() => {
                  this.props.clearNotification()
                }, 5000)
  
    e.target.anecdote.value = ''
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
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
