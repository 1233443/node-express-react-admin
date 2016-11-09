import React from 'react';
import { IndexLink } from 'react-router';


class DogAdd extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
  };
  
  state = {
    navExpanded: false
  }
  
  render() {
    return (
    	<div className="index dog-list">
    		<div className="panel panel-danger">
				  <div className="panel-heading">添加zip包</div>
				  <div className="panel-body">
				   <form className="form-horizontal" role="form">
						  <div className="form-group">
						    <label for="inputEmail3" className="col-sm-2 control-label">包名:</label>
						    <div className="col-sm-10">
						      <input type="text" className="form-control" placeholder="请输入包名" />
						    </div>
						  </div>
						  <div className="form-group">
						    <label for="inputEmail3" className="col-sm-2 control-label">上传包:</label>
						    <div className="col-sm-10">
						      <input type="file" />
						    </div>
						  </div>
						  <div className="form-group">
						    <div className="col-sm-offset-2 col-sm-10">
						      <button type="submit" className="btn btn-default">提交</button>
						    </div>
						  </div>
						</form>
				  </div>
				</div>
    	</div>
    );
  }
}

export default DogAdd;
