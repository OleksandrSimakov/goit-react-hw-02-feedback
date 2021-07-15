import './App.css';
import { Component } from 'react';
import Button from '../Button/Button';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const buttonNames = Object.keys(this.state);

    return buttonNames.map(btnName => (
      <Button key={btnName} btnName={btnName} />
    ));
  }
}
