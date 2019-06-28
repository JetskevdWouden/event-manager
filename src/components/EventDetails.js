import React from 'react';
import EventForm from './EventForm'

export default function EventDetails(props) {
    const event = props.event;                         //contains(name, date, description)
    const editMode = props.editMode;
    const onSubmit = props.onSubmit;
    const onChange = props.onChange;
    const formValues = props.formValues;
    const onDelete = props.onDelete;
    const onEdit = props.onEdit;

    if (!event) return 'Loading event...'

    return (
        <div>
            {editMode && <EventForm onSubmit={onSubmit} onChange={onChange} values={formValues} />}

            {!editMode && <div>
                <h1>{event.name}</h1>
                <i>{event.date}</i>
                <p>{event.description}</p>
                <br />
                <button onClick={onDelete}>DELETE <strong>THIS</strong> EVENT</button>
                <br />
                <button onClick={onEdit}>EDIT <strong>THIS</strong> EVENT</button>
            </div>}
        </div>
    )
}