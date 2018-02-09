let message = ''

const notificationReducer = (state = message, action) => {
    switch (action.type) {
        case 'UPDATE':
            return action.newMessage
        /* case 'VOTE':
            return `You voted ${action.content}` */
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

export const setNotification = (newMessage) => {
    return {
        type: 'UPDATE',
        newMessage: `You voted ${newMessage}`
    }
}



/* export const setNotification = (newMessage) => () => {
    return (this.context.store.dispatch(
        {
            type: 'UPDATE',
            newMessage: `You voted ${newMessage}`
        })
    )
} */
export default notificationReducer