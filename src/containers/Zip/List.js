import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import {listZipAsync,deleteApiAsync} from '../../actions/zip';
import config from '../../config';
class ZipList extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
   	zip: React.PropTypes.object,
  };
  state = {}
  componentDidMount() {
    const { dispatch } = this.props;
    if(!this.props.zip.isFetching){
    	dispatch(listZipAsync());
    }
  }
  shouldComponentUpdate(nextProps) {
    return this.props.zip !== nextProps.zip;
  }
  del(id){
  	deleteApiAsync(id).then(function(data){
  		console.log(data);
  	});
  }
 	updata(id){
 		alert(id);
 	}
  render() {
    const { data } = this.props.zip;
    return (
    	<div className="index addzip">
    		<div className="panel panel-danger">
				  <div className="panel-heading">Add</div>
				  <div className="panel-body">
					  <div className="table-responsive">
   						 <table className="table table-bordered table-hover">
   						 		<thead>
							 			<tr>
							 				<th className="center">ID</th>
							 				<th className="center">包名</th>
							 				<th className="center">描述</th>
							 				<th className="center">上传日期</th>
							 				<th className="center">操作</th>
							 			</tr>
   						 		</thead>
   						 		<tbody>
										  {
									  		data&&data.result.map((item,index)=>{
										  		return <tr key={index}>
														 				<td className="center middle">{item.id}</td>
														 				<td className="center middle">{item.title}</td>
														 				<td className="center middle">{item.description}</td>
														 				<td className="center middle">{item.createdAt}</td>
														 				<td className="center middle">
															 				<a href="javascript:;" title="修改" onClick={this.updata.bind(this,item.id)}>
											                    <button className="btn btn-default btn-xs">
											                        <span className="glyphicon glyphicon-edit"></span>
											                    </button>
											                </a>|
														 					<a href="javascript:;" title="删除" onClick={this.del.bind(this,item.id)}>
																				<button className="btn btn-danger btn-xs">
																					<span className="glyphicon glyphicon-trash"></span>
																				</button>
																			</a>
														 				</td>
														 			</tr>
										  	})
										  }
   						 		</tbody>
							</table>
						</div>
				  </div>
				</div>
    	</div>
    );
  }
}

ZipList.fetchData = ({ store }) => {
  const fetch = Promise.all([
    store.dispatch(listZipAsync()),
  ]);
  return fetch;
};

const mapStateToProps = (state) => {
  const select = {
    zip: state.zip
  };
  return select;
};

export default connect(mapStateToProps)(ZipList);