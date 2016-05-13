import '../css/common/base.scss';
import '../css/page/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CryptoJS from './lib/aes';
import './lib/md5';
import './lib/pad-zeropadding';

let Row9 = React.createClass({
	getDefaultProps : function () {
		return {
			title : '联系我们',
            tel : '电话：15010069718',
            weixin : '微信：weiguosheng',
            site : 'www.cybroadcast.cn'
		};
	},

    getInitialState: function() {
        return {value: '提交'};
    },

    handleClick: function(event) {
        let name = $.trim($('#name').val());
        let wechat = $.trim($('#wechat').val());
        let comment = $.trim($('#comment').val());
        if(name == '') {
            alert('姓名不能为空');
            return false;
        }
        if(wechat == '') {
            alert('微信不能为空');
            return false;
        }
		if(comment == '') {
            alert('备注不能为空');
            return false;
        }
		
		let key_hash = CryptoJS.MD5(name+wechat);
		let key = CryptoJS.enc.Utf8.parse(key_hash);
		let iv  = CryptoJS.enc.Utf8.parse('1234567812345678');
		let encrypted = CryptoJS.AES.encrypt(name+wechat, key, { iv: iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});

		// url 被我隐藏了
		$.getJSON('url'+encrypted,{'name':name,'wechat':wechat,'comment':comment},function(data){
			if(data.status == 1){
				alert('提交成功，请等待客服联系你');
				$('form input[type="text"],form textarea').val('');
			}else{
				alert(data.content);
			}
		})
    },

    render: function () {
        return (
            <div className="cyb-row">
            	<h2 className="cyb-row-title mb-10">{this.props.title}</h2>
                <div className="cyb-contact-way">
                    <span className="cyb-contact-tel">{this.props.tel}</span>
                    <span>{this.props.weixin}</span>
                </div>
                <p className="cyb-contact-site">{this.props.site}</p>
            	<form className="cyb-contact-us-box">
                    <div className="cyb-form-row">
                        <label className="cyb-form-row-label">姓名：</label>
                        <input className="cyb-form-row-input" type="text" id="name" />
                    </div>
                    <div className="cyb-form-row">
                        <label className="cyb-form-row-label">微信：</label>
                        <input className="cyb-form-row-input" type="text" id="wechat" />
                    </div>
                    <div className="cyb-form-row">
                        <label className="cyb-form-row-label">备注：</label>
                        <textarea className="cyb-form-row-textarea" name="" id="comment"></textarea>
                    </div>
                    <div className="cyb-form-row">
						<input className="cyb-form-row-submit" type="button" value={this.state.value} onClick={this.handleClick} />
					</div>
                </form>
            </div>
        );
    }

});

export default Row9;
