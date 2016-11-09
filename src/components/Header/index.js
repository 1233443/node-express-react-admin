import React from 'react';
import {Link} from "react-router";
import Helmet from 'react-helmet';
class Header extends React.Component {
  state = {}

  render() {
  	var styles=require("./index.css");
    return (
    	<header>
    		<div className={styles.title}>{this.props.children}</div>
    		<ul>
    			<li><Link to="/" className={styles.active}>首页</Link></li>
    			<li><Link to="/dogList">列表</Link></li>
    			<li><Link to="/dogDetail">详情</Link></li>
    			<li><Link to="/dogAdd">添加</Link></li>
    		</ul>
    	</header>
    );
  }
}

export default Header;
