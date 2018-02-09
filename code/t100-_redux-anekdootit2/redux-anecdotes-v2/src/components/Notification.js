import React from 'react'
import PropTypes from 'prop-types'

class Notification extends React.Component {
  render() {
    const notificationToShow = () => {
      const notif = this.context.store.getState().notification
      return notif === '' ?
        <div></div> :
        <div style={style}>
          {notif}
        </div>
    }
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    return notificationToShow()


  }
}

Notification.contextTypes = {
  store: PropTypes.object
}

export default Notification
