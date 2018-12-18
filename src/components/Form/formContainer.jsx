import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ButtonComponent from './button';
import InputTextComponent from './input';

class formContainer extends Component {
  displayMessage = () => {
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div className="form">
        <h1>Enter 2 values an see the magic</h1>
        <InputTextComponent
          placeholder="Enter First Number"
          value={this.props.value1Entered}
          changeStateValue={this.props.changeStateValue}
          name="value1Entered"
        />
        <br />
        <InputTextComponent
          placeholder="Enter Second Number"
          value={this.props.value2Entered}
          changeStateValue={this.props.changeStateValue}
          name="value2Entered"
        />
        <br />
        <ButtonComponent
          handleClick={this.displayMessage}
          color="primary"
          text="Add Values >>"
        />
      </div>
    );
  }
}

export default withRouter(formContainer);
