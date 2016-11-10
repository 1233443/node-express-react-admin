import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import {listZipAsync } from '../../actions/zip';
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
  render() {
    const { data } = this.props.zip;
    return (
    	<div className="index addzip">
    		<div className="panel panel-danger">
				  <div className="panel-heading">Add</div>
				  <div className="panel-body">
					  {
					  	data&&data.result.map((item,index)=>{
					  		return <li key={index}>{item.x}{item.y}</li>
					  	})
					  }
					  <div className="table-responsive">
   						 <table className="table table-bordered table-hover">
   						 		<thead>
							 			<tr>
							 				<th className="center">包名</th>
							 				<th className="center">上传日期</th>
							 			</tr>
   						 		</thead>
   						 		<tbody>
							 			<tr>
							 				<td className="center">html5小动画</td>
							 				<td className="center">2016年11月9日17:08:53</td>
							 			</tr>
							 			<tr>
							 				<td className="center">html5小动画</td>
							 				<td className="center">2016年11月9日17:08:53</td>
							 			</tr>
							 			<tr>
							 				<td className="center">html5小动画</td>
							 				<td className="center">2016年11月9日17:08:53</td>
							 			</tr>
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