import React from 'react';

export default function EventForm(props) {
    const onSubmit = props.onSubmit;
    const onChange = props.onChange;
    const values = props.values;

    return (
        <div className="createForm">
            <h3>Create an Event</h3>
            <form onSubmit={onSubmit}>
                <label>
                    Enter Name of the Event:
                <br />
                    <input type="text" name="name" onChange={onChange} value={values.name} />
                </label>
                <br />
                <br />
                <label>
                    Enter Date of the Event:
                <br />
                    <input type="text" name="date" onChange={onChange} value={values.date} />
                </label>
                <br />
                <br />
                <label>
                    Enter a Description of the Event:
                <br />
                    <input type="text" name="description" onChange={onChange} value={values.description} />
                </label>
                <br/>
                <br/>
                <input type="SUBMIT" value="SUBMIT"/>
            </form>
        </div>
    )

}