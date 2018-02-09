let message = ''

const notificationReducer = (state = message, action) => {
    switch (action.type) {
        case 'UPDATE':
            return action.newMessage
        default:
            return state
    }
}

export const clearNotification = () => {
    return {
        type: 'UPDATE',
        newMessage: ''
    }
}

export const notify = (newMessage, timeToWait) => {
    const timeToWaitMs = 1000 * timeToWait
    return async (dispatch) => {
        dispatch({
            type: 'UPDATE',
            newMessage: newMessage
        })
        setTimeout(() => {
            dispatch({
                type: 'UPDATE',
                newMessage: ''
            })
          }, timeToWaitMs)
    }
}

export default notificationReducer