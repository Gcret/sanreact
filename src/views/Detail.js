import React,{Component} from 'react'
import {NavLink} from 'react-router-dom';
import { Input, Button,Icon,Menu,Dropdown, Carousel,BackTop} from 'antd';
import style from './Detail.module.css';


const { Search } = Input;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        机酒自由行
        </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
       省心半自动
        </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        日本自由行
        </a>
    </Menu.Item>
  </Menu>
);

export default class Detail extends Component{
	render(){
		return(
			<div>
				<div className={style.box}>
					<div className={style.box1}>
						<NavLink className={style.nav} to="/login"><Icon type="user"/>登录</NavLink>&nbsp;	|
						 &nbsp;<NavLink className={style.nav} to="/register"><Icon type="form"/>注册</NavLink>
					 </div>
					 <div className={style.ding}>
					 	<NavLink className={style.nav} to="/cart"><Icon type="file-add"/>&nbsp;我的订单</NavLink>&nbsp;	|
						 &nbsp;<NavLink className={style.nav} to="/hou"><Icon type="read" />&nbsp;后台管理</NavLink>
					 </div>
				   </div> 
				   
				   <div>
						<BackTop />
					 </div>
				   
					 <div  className={style.topsection}>
					 	<img src="http://r.uzaicdn.com/content/store/images/common/logo.png" />
		               <Search placeholder="国内游 满额立减￥400/人" onSearch={value => console.log(value)} enterButton  style={{ width: 300}} className={style.btn} size="large" />
		                <div className={style.topimg}>
		                  <h2>1010-9898&nbsp;<Icon type="phone" style={{ color:'red' }}/></h2>
		                  <span>09:00-21:00</span>
					 	</div>
					 </div>
					  
					 
					 <div className={style.nav}>
		                <ul className={style.ul1}>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      首页 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      国内游 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      出境游 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      主题游 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      邮轮游 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      自由行 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      全球签证 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      定制旅行 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      会员福利 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      大客户专区 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                  <li> <Dropdown overlay={menu}>
		                    <a className="ant-dropdown-link" href="#">
		                      全球景点攻略 <Icon type="down" />
		                    </a>
		                  </Dropdown></li>
		                </ul>
              </div>
              
              
              
					 
						<div className={style.xiangq}>
									<span className={style.biaot}>标题</span>
									<img src=" " className={style.imgs1}/>
									
									<p className={style.chanpin}>产品编码：00010906</p>
									<div className={style.chufa}><Icon type="environment" />&nbsp;出发地:北京</div>
						</div>
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
						<div className={style.shangm}></div>
					 
					 <div className={style.footer}>
					 		<div className={style.footer1}>
					 			<img className={style.imgs} src="http://r.uzaicdn.com/content/store/images/common/nationalt.gif"/>
					 			<img className={style.imgs} src="http://r.uzaicdn.com/content/store/images/common/icp.gif"/>
					 			<img className={style.imgs} src="http://r.uzaicdn.com/content/store/images/common/5atravel.gif"/>
					 			<img className={style.imgs} src="http://r.uzaicdn.com/content/store/images/common/zz.gif"/>
					 			<img className={style.imgs} src="http://r.uzaicdn.com/content/store/images/common/jtel.gif"/>
					 			<img className={style.imgs} src="http://r.uzaicdn.com/content/store/images/common/ttel.gif"/>
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
			</div>
		)
	}
}
