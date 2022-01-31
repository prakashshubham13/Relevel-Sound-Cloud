import React from 'react';
import styles from './App.module.css';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './store/Store';
const App = () => {
  return (
    <Provider store={store}>
    <div className={styles.app}>
    <Dashboard />
    </div>
    </Provider>
  )
}

export default App
