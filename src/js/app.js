import '../css/common/base.scss';
import '../css/page/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CybNav from './nav';
import CybBanner from './banner';
import Row1 from './row1';
import Row2 from './row2';
import Row3 from './row3';
import Row4 from './row4';
import Row5 from './row5';
import Row6 from './row6';
import Row7 from './row7';
import Row8 from './row8';
import Row9 from './row9';

let App = React.createClass({
    render: function () {
        return (
            <div>
                <CybNav />
                <CybBanner />
                <div className="cyb-container">
                    <Row1 />
                    <Row2 />
                    <Row3 />
                    <Row4 />
                    <Row5 />
                    <Row6 />
                    <Row7 />
                    <Row8 />
                    <Row9 />
                </div>
            </div>
        );
    }

});

export default App;
