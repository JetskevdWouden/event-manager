//invoke loadEvents action creator --> and dispatch the result
import React from 'react';
import { loadEvents } from '../actions/events';
import { connect } from 'react-redux';
import EventsList from './EventsList';

class EventsListContainer extends React.Component {
    componentDidMount() {
        this.props.loadEvents();
    }

    render() {
        if(!this.props.events)
            return 'Loading Events...'
        return<EventsList events={this.props.events} />
    }
}

const mapStateToProps = (reduxState) => ({
    events: reduxState.events
});

export default connect(mapStateToProps, {loadEvents})(EventsListContainer);