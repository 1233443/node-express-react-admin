import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {Link} from "react-router";
class Login extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
  };
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
							      <input type="text" className="form-control" placeholder="请输入用户名" ref="title" />
							    </div>
							  </div>
							  <div className="form-group">
							    <label className="col-sm-2 control-label">密码:</label>
							    <div className="col-sm-10">
							      <input type="password" className="form-control" placeholder="请输入密码" ref="description" />
							    </div>
							  </div>
							  <div className="form-group">
							    <div className="col-sm-offset-2 col-sm-10">
							      <a href="javascript:;" type="submit" className="btn btn-default">登录</a>
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