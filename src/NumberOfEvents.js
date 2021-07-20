import React, { Component } from 'react';


class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 10,
        errorText: '',
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1) {
            return this.setState({
                errorText: 'Please choose a number between 1 and 10',
                numberOfEvents: ''
            });
        } else if (value > 10) {
            return this.setState({
                errorText: 'Please choose a number between 1 and 10',
                numberOfEvents: ''
            });
        } else {
            this.setState({
                numberOfEvents: value,
                errorText: '',
            });
            this.props.updateEvents('', value);
        }
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <label htmlFor='numberOfEvent'>Number of Events</label>
                <input
                    type="number"
                    className="event-number-input"
                    placeholder='Enter Number of Events'
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;