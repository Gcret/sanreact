import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect,} from 'react-router-dom';
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
						<Route path='/show' component={Show}></Route>

						</div>
						<Redirect to='/show'></Redirect>
					</div>
				</Router>
			</div>
		)
	}

}
