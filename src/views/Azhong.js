import React,{Component} from 'react';
import style from './Ada.module.css';
import api from '../api/api_pro';
import {NavLink} from 'react-router-dom';
export default class Azhong extends Component{
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
	render(){
		return(
			<div>
				<div className={style.yi}>
				{
					this.state.list.map((item,i)=>{
						return(
							<div className={style.san} key={i}>
							<NavLink to={'/detail/'+item.pid}>
								<div className={style.zimger}><img src ={item.pimg} className={style.imgs}/></div>
								<span className={style.xiang}><span className={style.xiang1}>{item.pdesc}</span></span>
								<span className={style.qian}>￥ {item.pprice}</span>
								<div className={style.qiang}>立即抢购</div>
								</NavLink>
							</div>	
						)
					})
				}	
				</div>
				<div className={style.er}>
					<img src="https://img9.uzaicdn.com/uz/preferential/column/ATT0001126257.jpg"/>
				</div>
			</div>
		)
	}
	componentDidMount(){	
			api.getProductList({uid:200004}).then((data)=>{
				this.setState({list:data.data})
				
			})	
		}
}