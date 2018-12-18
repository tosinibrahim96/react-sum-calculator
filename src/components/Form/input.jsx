import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({});

class InputTextComponent extends React.Component {
  render() {
    return (
      <div>
        <TextField
          id="outlined-simple-start-adornment"
          variant="outlined"
          label={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.changeStateValue}
          name={this.props.name}
        />
      </div>
    );
  }
}

export default withStyles(styles)(InputTextComponent);
