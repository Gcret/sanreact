import React,{Component} from 'react';
import style from './Ada.module.css';
import api from '../api/api_pro';
import {Link} from 'react-router-dom';

export default class Aozhou extends Component{
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
								<Link to={'/detail/'+item.pid}>
								<div className={style.zimger}><img src ={item.pimg} className={style.imgs}/></div>
								<span className={style.xiang}><span className={style.xiang1}>{item.pdesc}</span></span>
								<span className={style.qian}>￥ {item.pprice}</span>
								<div className={style.qiang}>立即抢购</div>
								</Link>
							</div>	
						)
					})
				}	
				</div>
				
				<div className={style.er}>
					<img src="https://img7.uzaicdn.com/uz/preferential/column/ATT0001126254.jpg"/>
				</div>
			</div>
		)
	}
	componentDidMount(){	
			api.getProductList({uid:200001}).then((data)=>{
				this.setState({list:data.data})	
			})	
		}
}
