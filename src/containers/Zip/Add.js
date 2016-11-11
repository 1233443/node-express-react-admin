import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Upload from 'rc-upload';

import {addZipAsync } from '../../actions/zip';
import config from '../../config';

class ZipAdd extends React.Component {
	
  static propTypes = {
    dispatch: React.PropTypes.func,
   	zip: React.PropTypes.object,
  };
  
  static defaultProps={
  	uploaderProps:{
  		action: 'http://localhost:3003/dog/add',
      multiple: true,
      beforeUpload(file) {
        console.log('beforeUpload', file.name);
      },
      onStart: (file) => {
        console.log('onStart', file.name);
        // this.refs.inner.abort(file);
      },
      onSuccess(file) {
        console.log('onSuccess', file);
      },
      onProgress(step, file) {
        console.log('onProgress', Math.round(step.percent), file.name);
      },
      onError(err) {
        console.log('onError', err);
      },
  	}
  }
  state={
  	destroyed: false,
  }
  handleClick(){
  	var data={};
  	var title=this.refs.title.value.trim();
  	var description=this.refs.description.value.trim();
  	var content=this.refs.content.value;
  	var data={
  		"title":title,
  		"description":description,
  		"content":content
  	}
  	addZipAsync(data).then(function(data){
  		console.log(data);
  	})
  }
  change(){
  	alert("aa");
  }
  upload(url, file) {
  	alert("aa");
    // your codes here
	}
  upload(){}
  uploadProgress(){}
  uploadEnd(){
  	
  }
  render() {
    return (
    	<div className="index addzip">
    		<div className="panel panel-danger">
				  <div className="panel-heading">Add</div>
				  <div className="panel-body">
				  <Upload {...this.props.uploaderProps} ref="inner">开始上传</Upload>
					   <form className="form-horizontal" role="form">
							  <div className="form-group">
							    <label className="col-sm-2 control-label">包名:</label>
							    <div className="col-sm-10">
							      <input type="text" className="form-control" placeholder="请输入包名" ref="title" />
							    </div>
							  </div>
							  <div className="form-group">
							    <label className="col-sm-2 control-label">描述:</label>
							    <div className="col-sm-10">
							      <input type="text" className="form-control" placeholder="请输入包名" ref="description" onClick={this.change.bind(this)}/>
							    </div>
							  </div>
							  <div className="form-group">
							    <label className="col-sm-2 control-label">上传包:</label>
							    <div className="col-sm-10">
							      <input type="file" ref="content" className="form-control"/>
							    </div>
							  </div>
							  <div className="form-group">
							    <div className="col-sm-offset-2 col-sm-10">
							      <a href="javascript:;" type="submit" className="btn btn-default" onClick={this.handleClick.bind(this)}>提交</a>
							    </div>
							  </div>
						</form>
				  </div>
				</div>
    	</div>
    );
  }
}
/*ZipAdd.fetchData = ({ store }) => {
  const fetch = Promise.all([
    store.dispatch(listZipAsync()),
  ]);
  return fetch;
};*/

const mapStateToProps = (state) => {
  const select = {
    zip: state.zip
  };
  return select;
};

export default connect(mapStateToProps)(ZipAdd);