import React from 'react';
import { connect } from 'react-redux';

class DogList extends React.Component {
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
				  <div className="panel-heading">dog list</div>
				  <div className="panel-body">
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

const mapStateToProps = (state) => {
  const select = {
    dogList: state.dogList
  };
  return select;
};

export default connect(mapStateToProps)(DogList);
