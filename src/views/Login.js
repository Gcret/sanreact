import React,{Component} from 'react';
import style from './Login.module.css';
import { Input, Button} from 'antd';
import {NavLink} from 'react-router-dom';
import api from '../api/api_pro';
export default class Login extends Component{
	constructor(props){
		super(props)
		this.state={
			iptuser:"",
			iptpass:"",
			sp:''
		}
	}
	render(){
		return(
			<div>	
				<div className={style.box}>					
					<img className={style.imgs} src ="http://r03.uzaicdn.com/content/store/images/user/logo.png"/>
					<img className={style.imgs1} src = "http://r02.uzaicdn.com/content/store/images/user/telephone.png"/>
				</div>
				
				<div className={style.box1}>
					<div className={style.forms}>
							<h2>登录页面</h2>
						<Input className={style.forms1} placeholder="username" onChange={this.tap1.bind(this)} defaultValue={this.state.iptuser}/>
						<span className={style.zheng}>{this.state.sp}</span>
						<Input className={style.forms2} placeholder="password" onChange={this.tap2.bind(this)} defaultValue={this.state.iptpass}/>
						<Button className={style.btn} type="primary" onClick={this.btns.bind(this)}>登录</Button>
						<div className={style.li} onClick={this.tap.bind(this)}>还没账号?请注册 ></div>
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
		window.location.href='#/register'	
	}
	tap1(e){
		this.setState({
			iptuser:e.target.value
		})
	}
	tap2(e){
		this.setState({
			iptpass:e.target.value
		})
	}
	btns(){
		
		
		let username=this.state.iptuser;
		let password=this.state.iptpass;
		
		if(this.state.iptuser &&  this.state.iptpass){
			var reg = /^[a-zA-Z0-9_-]{4,16}$/;
			if(!reg.test(username)){
				this.setState({
					sp:'请输入4-16位数字/字母组合'
				})
			}else{
				api.getLogin({username:this.state.iptuser,password:this.state.iptpass}).then((data)=>{
					console.log(data)
					if(data.code==0){
						this.setState({
							sp:'请检查用户名或者密码'
						})
					}else{
						this.setState({
							sp:'登录成功'
						})
						window.location.href='#/index'
					}
				})
			}			
		}else{
			this.setState({
				sp:'请输入账号和密码'
			})
		}
	}
	
}
