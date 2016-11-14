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
  static contextTypes={
   	router: React.PropTypes.object
	}
  static defaultProps={
  	uploaderProps:{
  		action: 'http://localhost:3003/zip/add',
        multiple: false,
        beforeUpload(file) {
       // console.log('beforeUpload', file.name);
      	},
	    onStart: (file) => {
	       //console.log('onStart', file.name);
	       // this.refs.inner.abort(file);
	    },
      onProgress(step, file) {
        //console.log('onProgress', Math.round(step.percent), file.name);
      },
      onError(err) {
       // console.log('onError', err);
      },
  	}
  }
  state={
  	fileUrl:""
  }
  onSuccess(file){
    console.log('onSuccess', file);
    if(file.status==0){
    	this.setState({fileUrl:file.url});
    }else{
    	alert("上传失败");
    }
  }
  handleClick(){
  	var zipName=this.refs.zipName.value.trim();
  	var zipDesc=this.refs.zipDesc.value.trim();
  	var zipPackage=this.state.fileUrl;
  	var data={
  		"zipName":zipName,
  		"zipDesc":zipDesc,
  		"zipPackage":zipPackage
  	}
  	if((!zipName)||(!zipPackage)){
  		alert("请填写完数据");
  		return false;
  	}
  	addZipAsync(data).then((data)=>{
  		this.context.router.push("/zipList");
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
					   	<form className="form-horizontal" role="form" ref="form">
							  <div className="form-group">
							    <label className="col-sm-2 control-label">包名:</label>
							    <div className="col-sm-10">
							      <input type="text" className="form-control" placeholder="请输入包名（必填）" ref="zipName" name="zipName" />
							    </div>
							  </div>
							  <div className="form-group">
							    <label className="col-sm-2 control-label">描述:</label>
							    <div className="col-sm-10">
							      <input type="text" className="form-control" placeholder="请输入包名" ref="zipDesc" name="zipDesc"/>
							    </div>
							  </div>
							  <div className="form-group">
							    <label className="col-sm-2 control-label">上传包:</label>
							    <div className="col-sm-10">
				  					<Upload {...this.props.uploaderProps} ref="inner" onSuccess={this.onSuccess.bind(this)}>开始上传</Upload>
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