import React,{Component} from 'react'
import {NavLink} from 'react-router-dom';
import { Input, Button,Icon,Menu,Dropdown, Carousel,BackTop,Select , Calendar} from 'antd';
import api from '../api/api_pro';
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
		
				
				state={
						list:[],
						iptshu:1,
						
					}
			
	render(){
		return(
			<div>
				<div className={style.box}>
					<div className={style.box1}>
						<NavLink className={style.nav} to="/login"><Icon type="user"/>登录</NavLink>&nbsp;	|
						 &nbsp;<NavLink className={style.nav} to="/register"><Icon type="form"/>注册</NavLink>
						 &nbsp;&nbsp;&nbsp;&nbsp;<NavLink className={style.nav} to="/index"><Icon type="home" />首页</NavLink>
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
					  
					 
					 <div className={style.nav1}>
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
									<span className={style.biaot}>{this.state.list.pname}</span>
									<img src={this.state.list.pimg} className={style.imgs1}/>
									
									<p className={style.chanpin}>产品编码：00010906</p><br/>
									<div className={style.chufa}><Icon className={style.chufa1} type="environment" />&nbsp;出发地:北京</div>
									
									<div className={style.jiage}>
												<span className={style.jiage1}>￥</span><span className={style.jiage2}>{this.state.list.pprice}</span><span className={style.jiage3}>起/人</span>	<span className={style.jiage4}>已省￥300</span>
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
																		      <Button className={style.xuanze7} onClick={this.jian.bind(this)}><Icon type="minus" /></Button>
																		      <Input type="number" min="1" value={this.state.iptshu}  className={style.xuanze8} onChange={this.shuz.bind(this)} defaultValue={this.state.iptshu}/>
																		      <Button className={style.xuanze9} onClick={this.jia.bind(this)}><Icon type="plus" /></Button>
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
															{this.state.list.pdesc}
													</p>
											</div>
											
											
											
									</div>
						</div>
									
				
				
				
					<div className={style.sis}>
						<div className={style.sis1}>
								<h2>活动名称：金秋放价 立减￥300-￥800</h2>
								<p>时间：2019-09-11 ~ 2019-10-10</p>
								<p>内容：活动期间，购买本产品指定出发日期，可享单价满5000元，立减300元；单价满10000元，立减500元；单价满15000元，立减600元；单价满20000元，立减800元；名额有限售完即止！！（与早订优惠/特价抢购/优惠券等优惠互斥，本优惠不参与会员积分累积）

出发日期：2019-10-29,2019-11-16,2019-11-21,2019-11-24,2019-11-28,2019-11-30,2019-12-10</p>
						</div>
						 <div className={style.sis1}>
						 		<h2> 行程名称：欧洲-【一价全含】纯玩无购物西葡12-13日 </h2>
						 		<p> 推荐理由：全球值得去的50个地方之一 罗卡角；世界遗产：参观马德里皇宫、阿尔罕布拉宫，感受世界文化遗产托莱多古城的魅力，惊叹精美的建筑与潺潺流水的花园。在塞维利亚倾听卡门的故事，寻访当年海上帝国的风采。奇幻建筑：游览巴塞罗纳，惊叹于高迪建筑的天真与激情。入内参观高迪的代表性建筑圣家族大教堂，只有巴塞罗纳这座赋有包容性的城市能够容纳天才高迪。高迪的作品不仅仅是建筑物，而且能够愉悦你的感官并激发你的想象力。私奔之城：悬崖上的天空之城——龙达，其老城伫立在750公尺高万丈悬崖之上，给人一种惊心动魄的壮美之感，是斗牛的发源地。宏伟广场：西班牙广场是塞维利亚美丽的建筑物的代表，也是西班牙十分*的建筑，世界上好多*影片在这里拍摄。地中海明珠：游览被誉为地中海的一颗明珠的瓦伦西亚，这里现代与古典并存，有前卫又现代的西班牙现代建筑史上的杰作——瓦伦西亚艺术科技城，它是一个艺术与现代科技的*结合体，是一座规模宏大、构思新颖、造型奇特的创新巨制。这里与瓦伦西亚老城和谐融合，一古一今，相得益彰。古城遗迹：漫步古城托莱多，托莱多为欧洲历史名城，是世界遗产之一。不同的民族和文化为托莱多留下了弥足珍贵的艺术和历史遗产，也使托莱多成为西班牙民族融合的缩影。托莱多为那些已经消失了的文明提供了见证。皇马主场：伯纳乌体育*被国际足联评为世纪*俱乐部，作为*马德里的主场，这里*是皇马球迷来到马德里不可错过的一站。  </p>
						 </div>
						 <div>
						 <h2 className={style.xingc}>行程亮点</h2>
							<img className={style.imgser} src="https://tispfile.utourworld.com/upload/ueditor/image/20190329/1553839467970012386.jpg"/>
							
						</div>
					
					
					</div>
				
				
				
				
				
				
				
				
				
				
				
				
						<div className={style.shangm}>
								
						
						
						</div>
					 
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
	
			
		shuz(e){
			this.setState({
				iptshu:e.target.value
			})
	}
		jia(){
			let num = this.state.iptshu;
			this.setState({
				iptshu:num+=1
			})
			
		}
		jian(){
			let num = this.state.iptshu;
			if(num<=1){
					this.setState({
						iptshu:1
					})
			}else{
					this.setState({
					iptshu:num-=1
				})
			}
			
			
		}
		tijiao(){
			let id = this.props.location.query.id;
			let num = this.state.iptshu;
			api.getAddList({uid:200006,pid:id,pnum:num}).then((data)=>{
					console.log(data)
			})			
		}
		
		componentDidMount(){	
			api.getDetail({id:this.props.location.query.id}).then((data)=>{
				this.setState({list:data.data})
			})
	}
		
		
}
