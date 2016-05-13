import '../css/common/base.scss';
import '../css/page/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let Row7 = React.createClass({
	getDefaultProps : function () {
		return {
			title : '我们的服务执行特点'
		};
	},

    render: function () {
        return (
            <div className="cyb-row">
            	<h2 className="cyb-row-title">{this.props.title}</h2>
            	<div className="cyb-service-box"></div>
            </div>
        );
    }

});

export default Row7;
