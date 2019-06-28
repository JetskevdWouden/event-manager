//invoke loadEvents action creator --> and dispatch the result
import React from 'react';
import { loadEvents } from '../actions/events';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import CreateEventFormContainer from './CreateEventFormContainer';

class EventsListContainer extends React.Component {
    componentDidMount() {
        this.props.loadEvents();
    }

    render() {
        if(!this.props.events)
            return 'Loading Events...'
        return (
            <div className="events">
                <EventsList events={this.props.events} />
                <CreateEventFormContainer />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    events: reduxState.events
});

export default connect(mapStateToProps, {loadEvents})(EventsListContainer);