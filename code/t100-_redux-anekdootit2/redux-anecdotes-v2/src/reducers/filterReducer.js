
const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export const clearFilter = () => {
  return {
      type: 'SET_FILTER',
      filter: ''
  }
}

export const setFilter = (newFilter) => {
  return {
      type: 'SET_FILTER',
      filter: newFilter
  }
}

export default filterReducer