import '../css/common/base.scss';
import '../css/page/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let CybBanner = React.createClass({
    getDefaultProps : function () {
        return {
            text : '联系我们',
            href : 'https://www.baidu.com/'
        };
    },

    render: function () {
        return (
            <div className="cyb-banner">
                <a className="btn-contact-us" href={this.props.href}>{this.props.text}</a>
            </div>
        );
    }

});

export default CybBanner;
