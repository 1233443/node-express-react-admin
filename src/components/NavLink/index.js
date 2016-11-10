import React from 'react';
import {Link} from "react-router";
export default class NavLink extends React.Component {
	
  render() {
  		var styles=require("../Header/index.css");
  	return <Link {...this.props} activeClassName={styles.active}/>
  }
}

