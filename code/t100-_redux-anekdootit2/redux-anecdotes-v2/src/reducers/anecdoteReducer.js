import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case ('VOTE'):
      const old = state.filter(a => a.id !== action.data.id)
      const voted = state.find(a => a.id === action.data.id)
      return [...old, { ...voted, votes: voted.votes + 1 }]
    case ('CREATE'):
      return [...state, { content: action.data.content, id: action.data.id, votes: action.data.votes }]
    case ('INIT_ANECDOTES'):
      console.log('Logging INIT_ANECDOTES action...')
      console.log(action)
      return action.data
    default:
      return state
  }
}

export const anecdoteCreation = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const anecdoteVoting = (id) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.updateVotes(id)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }

}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer