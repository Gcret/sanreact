import React,{Component} from 'react'
import {NavLink} from 'react-router-dom';
import { Input, Button,Icon,Menu,Dropdown, Carousel,BackTop,Select , Calendar,Anchor } from 'antd';
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
		
const { Link } = Anchor;		
		
		
		
		
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
									<Anchor affix={true} className={style.maodian}>
					    			<Link href="#huodong" title="活动名称" />
					   				 <Link href="#xiangqing" title="行程名称" />
					   				 <Link href="#xingliang" title="行程亮点" />
					   				 <Link href="#xiangxi" title="详细行程" >
					   				 			<Link href="#xiangxi1" title="北京" />
					   				 			<Link href="#xiangxi2" title="贝尔格莱德" />
					   				 			<Link href="#xiangxi3" title="萨拉热窝" />
					   				 	</Link>
					   				 <Link href="#fuwub" title="服务标准" />
					   				 <Link href="#yvding" title="预定须知" />
					  			</Anchor>
						<div className={style.sis1}>
									
								<h2 id="huodong">活动名称：金秋放价 立减￥300-￥800</h2>
								<p>时间：2019-09-11 ~ 2019-10-10</p>
								<p>内容：活动期间，购买本产品指定出发日期，可享单价满5000元，立减300元；单价满10000元，立减500元；单价满15000元，立减600元；单价满20000元，立减800元；名额有限售完即止！！（与早订优惠/特价抢购/优惠券等优惠互斥，本优惠不参与会员积分累积）

出发日期：2019-10-29,2019-11-16,2019-11-21,2019-11-24,2019-11-28,2019-11-30,2019-12-10</p>
						</div>
						 <div className={style.sis2}>
						 		<h2 id="xiangqing"> 行程名称：欧洲-【一价全含】纯玩无购物西葡12-13日 </h2>
						 		<p> 推荐理由：全球值得去的50个地方之一 罗卡角；世界遗产：参观马德里皇宫、阿尔罕布拉宫，感受世界文化遗产托莱多古城的魅力，惊叹精美的建筑与潺潺流水的花园。在塞维利亚倾听卡门的故事，寻访当年海上帝国的风采。奇幻建筑：游览巴塞罗纳，惊叹于高迪建筑的天真与激情。入内参观高迪的代表性建筑圣家族大教堂，只有巴塞罗纳这座赋有包容性的城市能够容纳天才高迪。高迪的作品不仅仅是建筑物，而且能够愉悦你的感官并激发你的想象力。私奔之城：悬崖上的天空之城——龙达，其老城伫立在750公尺高万丈悬崖之上，给人一种惊心动魄的壮美之感，是斗牛的发源地。宏伟广场：西班牙广场是塞维利亚美丽的建筑物的代表，也是西班牙十分*的建筑，世界上好多*影片在这里拍摄。地中海明珠：游览被誉为地中海的一颗明珠的瓦伦西亚，这里现代与古典并存，有前卫又现代的西班牙现代建筑史上的杰作——瓦伦西亚艺术科技城，它是一个艺术与现代科技的*结合体，是一座规模宏大、构思新颖、造型奇特的创新巨制。这里与瓦伦西亚老城和谐融合，一古一今，相得益彰。古城遗迹：漫步古城托莱多，托莱多为欧洲历史名城，是世界遗产之一。不同的民族和文化为托莱多留下了弥足珍贵的艺术和历史遗产，也使托莱多成为西班牙民族融合的缩影。托莱多为那些已经消失了的文明提供了见证。皇马主场：伯纳乌体育*被国际足联评为世纪*俱乐部，作为*马德里的主场，这里*是皇马球迷来到马德里不可错过的一站。  </p>
						 </div>
						 <div id="xingliang">
						 		<h2 className={style.xingc}>行程亮点</h2>
							<img className={style.imgser} src="https://tispfile.utourworld.com/upload/ueditor/image/20190329/1553839467970012386.jpg"/>
						</div>
					
					
					<div className={style.xiangc}>
							<h2 id="xiangxi">详细行程</h2>
							<div id="xiangxi1">
							<h3>北京&nbsp;&nbsp;&nbsp;<Icon type="twitter" />赫尔辛基&nbsp;&nbsp;&nbsp;<Icon type="twitter" /> 伦敦</h3>
							<p>航班：AY082 TU05*V PKXHEL 1110 1405 AY1337 TU05*V HELLHR 1600 1700<br/>
								09: 00 北京大兴国际机场集合，届时我们的专业领队会举着旗子等您<br/>
								12: 30 搭乘芬兰国国际航空班机经赫尔辛基飞往伦敦<br/>
								15: 55 抵达机场，提取行李，专车接机；<br/>
								18：00入住酒店休息调整时差，准备迎接精彩的旅程…</p>
							</div>
							<div id="xiangxi2" className={style.xiangxi2}>
								<h3>贝尔格莱德&nbsp;&nbsp;&nbsp;<Icon type="car" />&nbsp;&nbsp;&nbsp;诺维萨德&nbsp;&nbsp;&nbsp;<Icon type="car" />&nbsp;&nbsp;&nbsp;&nbsp;贝尔格莱德</h3>
								<p>
									酒店内享用早餐后，乘车前往游览诺维萨德（约1.5小时）。诺维萨德是仅次于贝尔格莱德的文化*，许多*的诗人、小说家 、法学家和政论家都在诺维萨德生活和工作过。此外，诺维萨德拥有许多纪念碑、博物馆、咖啡馆，是度假旅游的好去处。漫步老城区，步行街上很多咖啡店林立，还有古老的教堂。游览彼得罗瓦丁要塞（入内）,在1948年被列为国家保护历史遗迹，这座城堡非常壮观。参观要塞内部的诺维萨德博物馆（入内）。这里展示了石器时代的出土物、中世纪和近代武器、以及18-19 世纪的装饰品等，之后参观要塞地道（入内）。晚餐后，返回酒店休息。
								</p>
							</div>
							<div id="xiangxi3">
								<h3>萨拉热窝&nbsp;&nbsp;&nbsp;<Icon type="car" />&nbsp;&nbsp;&nbsp; 慕尼黑&nbsp;&nbsp;&nbsp;<Icon type="car" />&nbsp;&nbsp;&nbsp;&nbsp;北京</h3>
								<p>
									酒店享用早餐后，乘车前往机场，办理登记手续。搭乘汉莎航空公司班机经慕尼黑转机返回北京。
								</p>
							</div>
							
							
							
					</div>
					<div className={style.fuwub}>
							<h2 id="fuwub">服务标准</h2>
							<p>
									<p>1、航班说明：行程中所列航班号及时间供参考，请以出团通知标注航班号时间为准;</p>

									<p>2、景点说明：行程中未标注&ldquo;入内参观&rdquo;的景点均为游览外观，入内参观景点均含门票；</p>

									<p>3、行程说明：<br/>
									
									a)如遇景点关门，本社有权调整游览顺序；如确实无法安排，将根据实际情况进行调整；<br/>
									b)景点实际游览时间以行程中标注时间为准，承诺不少于标注时间；<br/>
									c)根据欧共体法律规定，导游和司机每天工作时间不得超过10小时；</p>
									
									<p>4、酒店说明：<br/>
									
									a)行程中所列酒店*标准为当地酒店评定标准；<br/>
									b)英国三-四*酒店大堂较小，大部分酒店没有电梯或者电梯较小，请按照规定乘梯；<br/>
									c)英国有些酒店双人间是一大一小两张床，方便带儿童的家庭游客；有些酒店双人间只有一张大的双人床，放置双份床上用品；有些是两张单人床拼在一起，用时可拉开；<br/>
									d)由于各种原因如环保、历史悠久、英国气候较温和等，较多酒店无空调设备；<br/>
									e)英国习惯吃简单的早餐，酒店早餐通常只有面包、咖啡、茶、果汁等；<br/>
									f)如果因展会、酒店爆满等因素，会依实际情况调整住宿城市，但不会影响酒店*及整体游览时间；</p>
									
								<p>	5、保险说明：<br/>
									
									a)我社推荐客人根据自身情况额外补上*50万或70万的大额保险。<br/>
									b)如果您年龄在70岁以上，请咨询旅行社代您投保上适于您的险种。</p>
									
									<p>6、退费说明：<br/>
									
									a)如遇天气、战争、罢工、地震等人力不可抗力因素无法游览，我社将按照旅行社协议，退还未游览景点门票费用（赠送项目费用不退），其他费用因为提前预付已经发生无法退还；<br/>
									b)游客因个人原因临时自愿放弃游览，酒店住宿、餐、车等费用均不退还；</p>
									
									<p>7、其他说明：请您如实填写《客人评议表》，我社将以您填写的内容作为处理客诉的依据；</p>
							</p>
					</div>
					
					
					
					
					<div className={style.xvzhi}>
							<h2 id="yvding">预定须知</h2>
							<p>
									<p>温馨提示</p>
									<p>1) 游泳、漂流、潜水、滑雪、溜冰、戏雪、冲浪、探险、热气球、高山索道等活动项目，均存在危险。参与前请根据自身条件，并充分参考当地相关部门及其它专业机构的相关公告和建议后量力而行。</p>
									<p>2) 禁忌提示：请尊重当地的饮食习惯、习俗禁忌、宗教礼仪等，入乡随俗，融入当地的民风民情。</p>
									<p>3) 根据中国海关总署颁布的2010年第54号、2016年第19号、2016年第25号令，进境公民旅客携带在境外获取5000元以内（含5000元）个人自用进境物品的基础上，允许其在口岸进境免税店增加一定数量的免税购物额，连同境外免税购物额总计不超过8000元人民币的，海关予以免税放行，但烟草制品、酒精制品等国家规定应当征税的商品不在免税范围内，敬请知晓。</p>
									<p>4) 根据发布的《中华人民共和国禁止携带、邮寄进境的动植物及其产品和其他检疫物名录》，将燕窝、新鲜水果、蔬菜、动物源性中药材、转基因生物材料等列入严禁携带或邮寄进境项目，敬请知晓。</p>
									<p>5) 请您严格遵守境外旅游目的地有关国家法律法规，切勿从事象牙等濒危野生动植物及其制品交易或携带相关物品，避免因触犯法律损害自身利益。</p>
							</p>	
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
			let id = this.props.match.params.id;
			let num = this.state.iptshu;
			api.getAddList({uid:200006,pid:id,pnum:num}).then((data)=>{
					alert('订单已添加,请在我的订单中查询/修改资料')
			})			 	
		}
		
		componentDidMount(){	
			console.log(this.props.match.params)
			api.getDetail({id:this.props.match.params.id}).then((data)=>{
			//	console.log(this.props)
				this.setState({list:data.data})
			})
	}
		
		
}
