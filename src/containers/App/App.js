import React from 'react';
import { IndexLink} from 'react-router';
import {Header} from "../../components";

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
  };

  state = {
    navExpanded: false
  }

  onNavItemClick = () => {
    this.setState({ navExpanded: false });
  }

  onNavbarToggle = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  }

  render() {
    require('./App.css');

    return (
      <div className="app">
      		<Header>玩赚zip包</Header>
          {this.props.children}
      </div>
    );
  }
}

export default App;