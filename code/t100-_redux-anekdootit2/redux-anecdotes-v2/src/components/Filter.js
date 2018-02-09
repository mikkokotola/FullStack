import React from 'react'
//import PropTypes from 'prop-types'
import { setFilter} from '../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {
    /* componentDidMount() {
        const { store } = this.context
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    } */

    handleChange = (event) => {
        // input-kentän arvo muuttujassa event.target.value
        this.props.setFilter(event.target.value)
    }

    render() {
        const style = {
            marginTop: 10,
            marginBottom: 10
        }

        return (
            <div style={style}>
                filter <input onChange={this.handleChange} />
            </div>
        )
    }
}


/* Filter.contextTypes = {
    store: PropTypes.object
} */

//export default Filter

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    setFilter
}
const ConnectedFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default ConnectedFilter
