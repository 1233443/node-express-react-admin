import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import {loginInApi } from '../../actions/login';

class Login extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
  };
  login(){
  	var username=this.refs.username.value.trim();
  	var password=this.refs.password.value.trim();
  	var data={
  		"username":username,
  		"password":password
  	};
  	loginInApi(data).then(function(data){
  		if(data.status==-1){
  			alert("用户名或密码不正确，请重新登录")
  		}else{
  			alert("登录成功");
  		}
  	})
  }
  render() {
    const styles = require('./index.css');
    return (
    	<div className="index home">
    		<div className="panel panel-danger">
				  <div className="panel-heading">登录</div>
				  <div className="panel-body">
				    <form className="form-horizontal" role="form">
							  <div className="form-group">
							    <label className="col-sm-2 control-label">用户名:</label>
							    <div className="col-sm-10">
							      <input type="text" className="form-control" placeholder="请输入用户名" ref="username" />
							    </div>
							  </div>
							  <div className="form-group">
							    <label className="col-sm-2 control-label">密码:</label>
							    <div className="col-sm-10">
							      <input type="password" className="form-control" placeholder="请输入密码" ref="password" />
							    </div>
							  </div>
							  <div className="form-group">
							    <div className="col-sm-offset-2 col-sm-10">
							      <a href="javascript:;" type="submit" className="btn btn-default" onClick={this.login.bind(this)}>登录</a>
							    </div>
							  </div>
						</form>
				  </div>
				</div>
    	</div>
    );
  }
}
export default Login