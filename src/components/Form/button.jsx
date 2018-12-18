import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
   button: {
      margin: theme.spacing.unit,
   },
   input: {
      display: 'none',
   },
});


const ButtonComponent = (props) => {
   return (
      <div>
         <Button variant="contained" onClick={props.handleClick} color={props.color}>
            {props.text}
         </Button>
      </div>
   );
}


export default withStyles(styles)(ButtonComponent);
