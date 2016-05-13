import '../css/common/base.scss';
import '../css/page/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let CybNav = React.createClass({
    getDefaultProps : function () {
        return {
            title : 'cybroadcast'
        };
    },

    render: function () {
        return (
            <nav className="cyb-nav">
                {this.props.title.toUpperCase()}
            </nav>
        );
    }

});

export default CybNav;
