import React,{Component} from 'react';
import style from './Ada.module.css'
export default class Aozhou extends Component{
	render(){
		return(
			<div>
				<div className={style.yi}>
				
					<img src = "" className={style.imgs}/>
					<span className={style.xiang}><span className={style.xiang1}>详情</span></span>
					<span className={style.qian}>￥ </span>
					<div className={style.qiang}>立即抢购</div>
				</div>
				<div className={style.yi}></div>
				<div className={style.yi}></div>
				<div className={style.yi}></div>
				<div className={style.er}>
					<img src="https://img7.uzaicdn.com/uz/preferential/column/ATT0001126254.jpg"/>
				</div>
			</div>
		)
	}
}
