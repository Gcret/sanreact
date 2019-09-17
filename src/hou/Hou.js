import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect,NavLink} from 'react-router-dom';
import {Icon,Button} from 'antd'
import style from './Hou.module.css';
import Show from './Show';



export default class Hou extends Component {
	render() {
		return (
			<div className={style.box}>
				<Router>
					<div>
						<div className={style.section}>
						<h1 className={style.biaoti}>悠哉旅游网后台管理</h1>
						<Button className={style.btn} type="primary" onClick={this.tap.bind(this)}>返回首页</Button>
						
						<Route path='/show' component={Show}></Route>

						</div>
						<Redirect to='/show'></Redirect>
					</div>
				</Router>
			</div>
		)
	}
	tap(){
		window.location.href="/index"
	}

}
