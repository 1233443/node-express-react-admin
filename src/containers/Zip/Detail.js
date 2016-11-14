import React from 'react';
import { IndexLink } from 'react-router';


class ZipDetail extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
  };
  state = {
    navExpanded: false
  }
  render() {
    return (
    	<div className="index zip-list">
    		<div className="panel panel-danger">
				  <div className="panel-heading">zip detail</div>
				  <div className="panel-body">
				    Panel content
				  </div>
				</div>
    	</div>
    );
  }
}

export default ZipDetail;
