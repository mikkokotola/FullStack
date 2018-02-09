import React from 'react'
import {connect} from 'react-redux'

class Notification extends React.Component {
  render() {
    const notificationToShow = () => {
      const notif = this.props.notification
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

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(
  mapStateToProps
)(Notification)

export default ConnectedNotification

