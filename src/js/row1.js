import '../css/common/base.scss';
import '../css/page/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let Row1 = React.createClass({
	getDefaultProps : function () {
		return {
			title : '关于我们',
			paragrapharr : [
				'我致力于通过高质量的内容端创意、策划、生产，以及广泛的媒体关系帮助中小创企业实现品牌提升',
				'我们希望通过高品质低酬劳的服务模式减少创业公司的费用开支。',
				'我们为创业公司打造拥有资深公关专家、媒体记者以及意见领袖的企业编辑部。',
				'我们做过BAT、搞过手机、研究过金融…',
				'我们创造过中华酷联',
				'我们讲过C2B、提出过明星定制机',
				'我们的客户融资ABC、退市纳斯达克、A股也有过塌方',
				'我们靠谱！'
			]
		};
	},

    render: function () {
		let results = this.props.paragrapharr;
        return (
            <div className="cyb-row">
            	<h2 className="cyb-row-title">{this.props.title}</h2>
            	<div className="cyb-row-box">
					{results.map(function(result) {
			        	return <p key={result}>{result}</p>;
				    })}
            	</div>
            </div>
        );
    }

});

export default Row1;
