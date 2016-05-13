import '../css/common/base.scss';
import '../css/page/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let Row3 = React.createClass({
	getDefaultProps : function () {
		return {
			title : '我们的核心优势',
            subtitle : '拥有超过2000人各层级媒体人员资源库'
		};
	},

    render: function () {
        return (
            <div className="cyb-row">
            	<h2 className="cyb-row-title mb-0">{this.props.title}</h2>
                <p className="cyb-row-sub-title">{this.props.subtitle}</p>
            	<div className="cyb-core-advantage-box"></div>
            </div>
        );
    }

});

export default Row3;
