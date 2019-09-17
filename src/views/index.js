import React,{Component} from 'react';
import {BrowserRouter as Router,NavLink,Route,Redirect,Link,Switch} from 'react-router-dom';
import { Input, Button,Icon,Menu,Dropdown, Carousel,BackTop} from 'antd';
import style from './Index.module.css';
import AsyncComponent from '../AsyncComponent';
import api from '../api/api_pro';
import Detail from './Detail';
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

const Aozhou = AsyncComponent(()=>require('../views/Aozhou'))
const Ariben = AsyncComponent(()=>require('../views/Ariben'))
const Adong = AsyncComponent(()=>require('../views/Adong'))
const Azhong = AsyncComponent(()=>require('../views/Azhong'))
const Ada = AsyncComponent(()=>require('../views/Ada'))
export default class Index extends Component{
constructor(props){
		super(props)
		this.state={
			list:[],
			list1:[]
		}
	}
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
					 
				<div className={style.lunbo}>
			
				  <Carousel effect="fade" autoplay="true">
				    <div>
				      <img src="https://img7.uzaicdn.com/uz/advertisement/ATT0001127121.jpg"/>
				    </div>
				    <div>
				      <img src="https://img6.uzaicdn.com/uz/advertisement/ATT0001085549.jpg"/>
				    </div>
				    <div>
				      <img src="https://img5.uzaicdn.com/uz/advertisement/ATT0001126465.jpg"/>
				    </div>
				    <div>
				      <img src="https://img9.uzaicdn.com/uz/advertisement/ATT0001127291.jpg"/>
				    </div>
				  </Carousel>
			
				
				</div>
				<div className={style.zong}> 
				<Icon className={style.laba} type="sound" />
				<div className={style.wenzi}>
					<Carousel autoplay dots="flase">
					    <div>
					      <li>众信游学获中国贸促会关心下一代工作委员会授权“天赋少年”系列国际青少年文化交流活动助力2020年迪拜世博会</li>
					    </div>
					    <div>
					      <li>众信博睿携手中国儿基会文教基金举办“鹰翔众信红色传承夏令营”公益活动  </li>
					    </div>
					    <div>
					   		<li>无忧行、众信旅游集团、易游集团达成战略合作 携手打造丰富快捷便利的出境旅行服务智慧生态圈  </li>
					    </div>
					    <div>
					      <li>众信旅游集团与BMW精英驾驶合作再升级 联合打造云南香格里拉高端自驾旅行产品</li>
					    </div>
					    <div>
					      <li>众信游学获中国贸促会关心下一代工作委员会授权“天赋少年”系列国际青少年文化交流活动助力2020年迪拜世博会</li>
					    </div>
					    <div>
					      <li>俄罗斯联邦政府旅游机构和企业考察团到访众信旅游集团 中赴俄旅游市场将现新增长点</li>
					    </div>
					  </Carousel>
				
				</div>
				</div>
				
					<div className={style.zujian}>
					
							<Router>
							
								<div>
								
									<NavLink className={style.zujian1} to="/aozhou">国庆去欧洲</NavLink>
									<NavLink className={style.zujian1} to="/ariben">国庆去日本</NavLink>
									<NavLink className={style.zujian1} to="/adong">国庆去东南亚</NavLink>
									<NavLink className={style.zujian1} to="/azhong">国庆去中东非</NavLink>
									<NavLink className={style.zujian1} to="/ada">国庆去美洲</NavLink>
							
		      			
					     		<Route path="/aozhou" component={Aozhou}/>
					     		<Route path="/ariben" component={Ariben}/>
					     		<Route path="/adong" component={Adong}/>
					     		<Route path="/azhong" component={Azhong}/>
					     		<Route path="/ada" component={Ada}/>
					     		<Redirect to="/aozhou"/>
				     		
				     		
				    
				    	</div>
				    		
				    	</Router>
						
							
					</div>
					
					<div className={style.succers}>
							<div className={style.succersleft}>
									<img src = "https://img6.uzaicdn.com/uz/navigation/productFloor/ATT0001127128.jpg"/>
							</div>
							<div className={style.succersright}>
								{
									this.state.list.map((item,i)=>{
										return(
											<div className={style.succerss} key={i}>
												<Link to={{pathname:'/detail',query:{id:item.pid}}}>
												<div className={style.zimger}><img src = {item.pimg} className={style.imger}/></div>
												<span className={style.xiangq}>{item.pdesc}</span>
												<span className={style.weizhi}>北京出发</span>
												<span className={style.many}>￥ {item.pprice}</span>
												</Link>
											</div>
										)
									})
								}
									
									
							</div>
					</div>
				
					<div className={style.situ}><img src="https://img8.uzaicdn.com/uz/advertisement/ATT0001126338.jpg"/></div>
					
					<div className={style.succers}>
							<div className={style.succersleft}>
									<img src = "https://img5.uzaicdn.com/uz/navigation/productFloor/ATT0001127132.jpg"/>
							</div>
							<div className={style.succersright}>
									{
									this.state.list1.map((item,i)=>{
										return(
											<div className={style.succerss} key={i}>
											<Link to={{pathname:'/detail',query:{id:item.pid}}}>
												<div className={style.zimger}><img src = {item.pimg} className={style.imger}/></div>
												<span className={style.xiangq}>{item.pdesc}</span>
												<span className={style.weizhi}>北京出发</span>
												<span className={style.many}>￥ {item.pprice}</span>
												</Link>
											</div>
										)
									})
								}
							</div>
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
	componentDidMount(){	
			api.getProductList({uid:200006}).then((data)=>{
				this.setState({list:data.data})
			})
			api.getProductList({uid:200007}).then((data)=>{
				this.setState({list1:data.data})
			})
		}
	
	
	
	
}
