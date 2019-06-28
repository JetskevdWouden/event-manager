import React from 'react';
import { connect } from 'react-redux';
import EventDetails from './EventDetails';
import { loadEvent, updateEvent, deleteEvent } from '../actions/events'

class EventDetailsContainer extends React.Component {
    state = {
        editMode: false
    }

    componentDidMount() {
        this.props.loadEvent(Number(this.props.match.params.id))
    }

    onDelete = () => {
        this.props.deleteEvent(this.props.event.id)
        this.props.history.push('/')
    }

    onEdit = () => {
        this.setState({
            editMode: true,
            formValues: {
                name: this.props.event.name,
                date: this.props.event.date,
                description: this.props.event.description
            }
        })
    }

    onChange = (event) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            editMode: false
        })
        this.props.updateEvent(this.props.event.id, this.state.formValues)
    }

    render() {
        //console.log("HERE", this.props.event)
        //HOW TO IF STATEMENT "OLD EVENT"
        if (!this.props.event) {
            return "Loading Event..."
        }
        return (<EventDetails
            event={this.props.event}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            editMode={this.state.editMode}
            formValues={this.state.formValues}
        />)
    }
}

const mapStateToprops = reduxState => ({
    event: reduxState.event
})

export default connect(mapStateToprops, { loadEvent, deleteEvent, updateEvent })(EventDetailsContainer);