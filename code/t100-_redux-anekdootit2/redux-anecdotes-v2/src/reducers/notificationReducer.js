let message = 'Initial message!'

const notificationReducer = (state = message, action) => {
    switch (action.type) {
        case 'UPDATE':
            return action.newMessage
        case 'VOTE':
            return `You voted ${action.content}`
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
        newMessage
    }
}
export default notificationReducer