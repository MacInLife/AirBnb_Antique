import React, { Component } from 'react';
import MainScreen from './src/screens/Main';
import { store, persistor } from './src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainScreen />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
