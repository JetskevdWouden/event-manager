import React from 'react';
import {connect} from 'react-redux';
import EventDetails from './EventDetails';
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
    componentDidMount() {
        this.props.loadEvent(Number(this.props.match.params.id))
    }

    onDelete = () => {
        this.props.deleteEvent(this.props.event.id)
        this.props.history.push('/')
    }
    
    render () {
        //console.log("HERE", this.props.event)
        if (!this.props.event) {
            return "Loading Event..."
        }
        return <EventDetails event={this.props.event} onDelete={this.onDelete} />
    }
}

const mapStateToprops = reduxState => ({
    event: reduxState.event
})

export default connect(mapStateToprops, {loadEvent, deleteEvent})(EventDetailsContainer);