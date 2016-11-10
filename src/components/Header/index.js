import React from 'react';
import {Link,IndexLink} from "react-router";
import Helmet from 'react-helmet';
import NavLink from "../NavLink";
class Header extends React.Component {
  state = {}
  render() {
  	var styles=require("./index.css");
    return (
    	<header>
    		<ul>
    			<li><IndexLink to="/" activeClassName={styles.active}>首页</IndexLink></li>
    			<li><NavLink to="/zipList">列表</NavLink></li>
    			<li><NavLink to="/zipDetail">详情</NavLink></li>
    			<li><NavLink to="/zipAdd">添加</NavLink></li>
    		</ul>
        <div className={styles.log}>
        	<NavLink to="/login">登录 </NavLink> | 
        	<NavLink to="/register"> 注册</NavLink>
    		</div>
    	</header>
    );
  }
}

export default Header;
