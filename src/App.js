import React from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
// import { Route } from 'react-router-dom'
// import EventsListContainer from './components/EventsListContainer';
// import EventDetailsContainer from './components/EventDetailsContainer';
// import LoginFormContainer from './components/LoginFormContainer';
import Routes from './components/Routes';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <header className="App-header">
            <h1>Events Manager Exercise</h1>
          </header>
          <main>
            <div>
              <Routes />
              {/* <Route path="/" exact component={EventsListContainer} />
              <Route path="/events/:id" exact component={EventDetailsContainer} />
              <Route path="/login" exact component={LoginFormContainer} /> */}
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
