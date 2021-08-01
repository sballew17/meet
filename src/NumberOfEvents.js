import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 10,
        ErrorText: '',
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1) {
            return this.setState({
                ErrorText: 'Please choose a number between 1 and 32',
                numberOfEvents: ''
            });
        } else if (value > 32) {
            return this.setState({
                ErrorText: 'Please choose a number between 1 and 32',
                numberOfEvents: ''
            });
        } else {
            this.setState({
                numberOfEvents: value,
                ErrorText: '',
            });

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
                <ErrorAlert text={this.state.ErrorText} />
            </div>
        );
    }
}

export default NumberOfEvents;