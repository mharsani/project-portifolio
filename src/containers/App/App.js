import React, { Component } from 'react';
import styles from './App.scss';
import  Header from '../../components/Header/Header.js';
import  Menu from '../../components/Menu/Menu.js';
import  Routes from '../Container/Routes';


class App extends Component {
  constructor() {
    super()
    this.state = {
        color: 'orange'
    }
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <Header />
          <Menu/>
          <Routes /> 
        </div>
      </div>
    );
  }
}

export default App;
