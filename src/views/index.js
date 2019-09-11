import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Input, Button,Icon,Menu,Dropdown, Carousel} from 'antd';
import style from './Index.module.css';


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


export default class Index extends Component{

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
				
					<div className="zujian">
							
										
					<div>
					
				
				
				
			</div>
		)
	}
}
