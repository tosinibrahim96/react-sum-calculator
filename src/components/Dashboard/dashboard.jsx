import React, { Component } from 'react';

export default class dashboard extends Component {
   render() {
      return (
         <div>
            <h1>This is the dashboard</h1>
            <h2>{this.props.total}</h2>
         </div>
      )
   }
}
