import React,{Component} from 'react';
import style from './Login.module.css';
import { Input, Button} from 'antd';
import {NavLink} from 'react-router-dom';

export default class Login extends Component{
	render(){
		return(
			<div>	
				<div className={style.box}>					
					<img className={style.imgs} src ="http://r03.uzaicdn.com/content/store/images/user/logo.png"/>
					<img className={style.imgs1} src = "http://r02.uzaicdn.com/content/store/images/user/telephone.png"/>
				</div>
				
				<div className={style.box1}>
					<div className={style.forms}>
						<Input className={style.forms1} placeholder="username" />
						<Input className={style.forms2} placeholder="password" />
						<Button className={style.btn} type="primary">登录</Button>
						<div className={style.li} onClick={this.tap.bind(this)}>注册 ></div>
					</div>
				</div>
				
				
				<div className={style.list}>
					<NavLink className={style.list1}>众信旅游</NavLink>
					<NavLink className={style.list1}>众信历程</NavLink>
					<NavLink className={style.list1}>众信品牌</NavLink>
					<NavLink className={style.list1}>营业网点</NavLink>
					<NavLink className={style.list1}>诚聘英才</NavLink>
					<NavLink className={style.list1}>商务合作</NavLink>
				</div>
				<div className={style.list2}>
					<NavLink className={style.list1}>Copyright©2005-2018 Uzai.com</NavLink>
					<NavLink className={style.list1}> 许可证编号:L-TJ-CJ00059 </NavLink>
					<NavLink className={style.list1}>津ICP备18003064号</NavLink>
					<NavLink className={style.list1}> 悠哉呼叫中心来电显示号码为：10109898</NavLink>
				</div>
				
				
			</div>
		)
	}
	
	tap(){
		
		
	}
}
