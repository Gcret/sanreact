import React,{Component} from 'react'
import {NavLink} from 'react-router-dom';
import { Input, Button,Icon,Menu,Dropdown, Carousel,BackTop,Select , Calendar} from 'antd';

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
const { Option } = Select;
	function onChange(value) {
  //console.log(`selected ${value}`);
}

function onBlur() {
  //console.log('blur');
}

function onFocus() {
  //console.log('focus');
}

function onSearch(val) {
  //console.log('search:', val);
}	
const ButtonGroup = Button.Group;
		
function onPanelChange(value, mode) {
  //console.log(value, mode);
}		
		
		
		
		
		
		
	export default class Ariben extends Component{
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
									
									<p className={style.chanpin}>产品编码：00010906</p><br/>
									<div className={style.chufa}><Icon className={style.chufa1} type="environment" />&nbsp;出发地:北京</div>
									
									<div className={style.jiage}>
												<span className={style.jiage1}>￥</span><span className={style.jiage2}>{8688}</span><span className={style.jiage3}>起/人</span>	<span className={style.jiage4}>已省￥300</span>
									</div>
									
									<div className={style.youhui}><span className={style.youhui1}>优惠促销:</span><span className={style.youhui2}>金秋放假  乐享满减</span></div>
									
									<div className={style.xuanze}>
													<div className={style.xuanze1}>
															<span className={style.xuanze2}>选择团期:</span>
																<span className={style.xuanze3}>
																   <Select
																	    showSearch
																	    style={{ width: 450 }}
																	    placeholder="请选择出团日期"
																	    optionFilterProp="children"
																	    onChange={onChange}
																	    onFocus={onFocus}
																	    onBlur={onBlur}
																	    onSearch={onSearch}
																	    filterOption={(input, option) =>
																	      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																	    }
																	  >
																	    <Option value="jack">11-05(周二)出发 - 8699/人 - 已减¥300 - A行</Option>
																	    <Option value="lucy">11-21(周四)出发 - 8699/人 - 已减¥300 - A行程</Option>
																	    <Option value="tom">12-03(周二)出发 - 8699/人 - 已减¥300 - A行程</Option>
																	  </Select>
																	</span>
													</div>
													
														<div className={style.xuanze4}>
																	<span className={style.xuanze5}>选择人数:</span>
																	
																			 <ButtonGroup className={style.xuanze6}>
																		      <Button className={style.xuanze7} onClick={this.jia.bind(this)}><Icon type="minus" /></Button>
																		      <Input placeholder="人数"  className={style.xuanze8} />
																		      <Button className={style.xuanze9} onClick={this.jian.bind(this)}><Icon type="plus" /></Button>
																		    </ButtonGroup>
																		<Button className={style.btns9} onClick={this.tijiao.bind(this)}>立即预定</Button>
														</div>
											
											
											<div className={style.rili}>
													<div style={{ width: 400, border: '1px solid #d9d9d9', borderRadius: 4 }}>
												    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
												  </div>											
											</div>
											
											<div className={style.jieshao}>
													<p>
															<b>行程特色</b><br/>
															艺术典藏：大英博物馆是鉴赏世界*艺术珍品走进世界上规模*、**的博物馆；<br/>
															名校之城：牛津沉醉在历史的情怀里<br/>	
													</p>
													<p>
														伦敦符号： 从大本钟到白金汉宫，走进大英博物馆令古老的伦敦更显深邃之意，前往乔治风格建筑物唐宁街10号；<br/>
														自悠自在：伦敦全天自由活动，尽享伦敦的时尚与无穷魅力，比斯特乐享购物，感受超低价格的超值体验；
													</p>
													<p>
															接口数据
													</p>
											</div>
											
											
											
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
		
		jia(){
		
		}
		jian(){
		
		}
		tijiao(){
			
		}
}
