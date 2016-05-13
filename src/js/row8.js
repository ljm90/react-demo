import '../css/common/base.scss';
import '../css/page/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let Row8 = React.createClass({
	getDefaultProps : function () {
		return {
			title : '服务内容',
            price : [
                [
                    '2999元' ,
                    [
                        '1、每月电话会议4次，根据公司发展情况制定品牌及媒体公关策略；',
                        '2、每月输出一份阶段性媒体关系作战地图；',
                        '3、每月策划及制作日常新闻稿件2篇；',
                        '4、每月协助稿件媒体发布20条网络连接'
                    ]
                ],
                [
                    '5999元' ,
                    [
                        '1、每月电话会议2次，参加团队会议2次，根据公司发展情况制定品牌及媒体公关策略；',
                        '2、每月输出一份阶段性媒体关系作战地图以及传播KeyMessage；',
                        '3、每月策划及制作日常新闻稿件5篇；',
                        '4、每月协助安排企业高层媒体专访1次；',
                        '5、每月协助稿件媒体发布50条网络连接'
                    ]
                ]
            ]
		};
	},

    render: function () {
        let price = this.props.price;
        return (
            <div className="cyb-row">
            	<h2 className="cyb-row-title">{this.props.title}</h2>
            	<div className="cyb-service-content-box">
                    {price.map(function(result) {
                        return (
                            <div key={result} className="cyb-service-itme clearfix">
                                <div className="cyb-price">{result[0]}</div>
                                <div className="cyb-services-details">
                                    <div className="cyb-services-details-box">
                                        {result[1].map(function (results) {
                                            return (
                                                <p key={results}>{results}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }

});

export default Row8;
