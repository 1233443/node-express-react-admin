import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Upload from 'rc-upload';


import {updataZipApi,detailZipAsync} from '../../actions/zip';
import config from '../../config';

class ZipUpdata extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
   	zip: React.PropTypes.object,
  };
  static contextTypes={
   	router: React.PropTypes.object
	}
  static defaultProps={
  	uploaderProps:{
  		action: 'http://localhost:3003/adminzip/add',
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
  componentDidMount(){
  	const { dispatch } = this.props;
  	var id=this.context.router.params.id;
  	var data={id:id};
    if(!this.props.zip.isDetailFetching){
    	dispatch(detailZipAsync(data));
    }
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
  	var zipPackage=this.state.fileUrl||this.refs.zipPackage.props.defaultValue;
  	var data={
  		"id":this.props.zip.detail.result.id,
  		"zipName":zipName,
  		"zipDesc":zipDesc,
  		"zipPackage":zipPackage
  	}
  	if((!zipName)||(!zipPackage)){
  		alert("请填写完数据");
  		return false;
  	}
  	updataZipApi(data).then(data=>{	
  		if(data.status==0){
  			this.context.router.push("/zipList");
  		}
  	})
  }
  render() {
  	const {detail}=this.props.zip;
  	console.log(detail);
    return (
    	<div className="index updatazip">
    		<div className="panel panel-danger">
				  <div className="panel-heading">修改</div>
				  <div className="panel-body">
					   	<form className="form-horizontal" role="form" ref="form">
							  <div className="form-group">
							    <label className="col-sm-2 control-label">包名:</label>
							    <div className="col-sm-10">
								    {
								    	detail&&<input type="text" className="form-control" placeholder="请输入包名（必填）" ref="zipName" name="zipName" defaultValue={detail.result.title}/>
								    }
							    </div>
							  </div>
							  <div className="form-group">
							    <label className="col-sm-2 control-label">描述:</label>
							    <div className="col-sm-10">
							    {
							    	detail&& <input type="text" className="form-control" placeholder="请输入包名" ref="zipDesc" name="zipDesc"  defaultValue={detail.result.description}/>
							    }
							    </div>
							  </div>
							  <div className="form-group">
							    <label className="col-sm-2 control-label">上传包:</label>
							    <div className="col-sm-10">
								    {
								    	detail&&<Upload {...this.props.uploaderProps} ref="inner" onSuccess={this.onSuccess.bind(this)} defaultValue={detail.result.url} ref="zipPackage">开始上传</Upload>
								    }
								    {
								    	detail&&<div>{this.state.fileUrl||detail.result.url}.zip</div>
								    }
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
ZipUpdata.fetchData = ({ store }) => {
  const fetch = Promise.all([
    store.dispatch(detailZipAsync()),
  ]);
  return fetch;
};

const mapStateToProps = (state) => {
  const select = {
    zip: state.zip
  };
  return select;
};

export default connect(mapStateToProps)(ZipUpdata);