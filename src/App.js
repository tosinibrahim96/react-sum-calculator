import React, { Component } from 'react';
import './App.css';
import FormContainer from './components/Form/formContainer';
import Dashboard from './components/Dashboard/dashboard';
import ErrorComponent from './components/Error/error';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    value1Entered: '',
    value2Entered: '',
    shoppyMenu: {
      dashboard: 'url to icon'
    }
  };

  changeStateValue = event => {
    // eslint-disable-next-line default-case
    const { name, value } = event.target;
    this.setState(state => {
      state[name] = value;
      return state;
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="App">
                <FormContainer
                  value1Entered={this.state.value1Entered}
                  value2Entered={this.state.value2Entered}
                  changeStateValue={this.changeStateValue}
                />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/dashboard"
            render={() => (
              <div className="App">
                <Dashboard
                  total={
                    parseInt(this.state.value1Entered, 10) +
                    parseInt(this.state.value2Entered, 10)
                  }
                />
              </div>
            )}
          />
          <Route
            exact={true}
            render={() => (
              <div className="App">
                <ErrorComponent />
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
