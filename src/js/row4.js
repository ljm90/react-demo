import '../css/common/base.scss';
import '../css/page/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let Row4 = React.createClass({
	getDefaultProps : function () {
		return {
			title : '我们的媒体平台'
		};
	},

    render: function () {
        return (
            <div className="cyb-row">
            	<h2 className="cyb-row-title">{this.props.title}</h2>
            	<div className="cyb-media1-box"></div>
            </div>
        );
    }

});

export default Row4;
