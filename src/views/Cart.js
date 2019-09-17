import React,{Component} from 'react';
import { Empty ,Input, Button, Radio, Steps ,Checkbox} from 'antd';
import style from './Cart.module.css';
import {Link} from 'react-router-dom';
import api from '../api/api_pro';


const { Step } = Steps;

export default class Cart extends Component{
	render(){
		return(		
			<div>	
			
			
				<div className={style.box}>
					<div className={style.top}>
						<img src="//r03.uzaicdn.com/content/store/images/order/logo.png?imageView2/2/w/243/h/43" />
						<div className={style.bu}>
							<Steps current={0} size="small">
    							<Step title="请填写信息核对"/>																	
    							<Step title="在线支付"/>
    							<Step title="提交成功"/>
  							</Steps>
						</div>
					</div>
					<div className={style.section}>
						<div>
							接口数据
						</div>

						
					</div>

					<div className={style.money}>
						<div className={style.money_b}></div>
						{/* <span>费用明细</span>
						<p>旅游团费-------------------------￥16400</p> */}
					</div>

					<div className={style.lianxiren}>
						<div className={style.lianxiren2}>联系人信息</div>
						<ul>
							<li>
								<span className={style.lispan}>*姓名:</span><Input placeholder="请输入姓名" className={style.ipt} />
							</li>
							<li>
								<span className={style.lispan}>*手机号码:</span><Input placeholder="请输入手机号码" className={style.ipt} />
							</li>
							<li>
								<span className={style.lispan}>*图片验证码:</span><Input placeholder="请输入图片验证码" className={style.ipt} />
							</li>
							<li>
								<span className={style.lispan}>短信验证码:</span><Input placeholder="请输入短信验证码" className={style.ipt} />
							</li>
							<li>
								<span className={style.lispan}>邮箱:</span><Input placeholder="请输入邮箱" className={style.ipt} />
							</li>
							<li>
								<span className={style.lispan}>备注:</span><Input placeholder="请备注您对产品的其他备注" className={style.ipt} />
							</li>
						</ul>
					</div>

					<div className={style.lianxiren1}>
						<div className={style.lianxiren2}>出游人信息 <p>为了更好的帮您完成行程预订，建议您可以填写出游人或稍后在“我的悠哉-我的订单”</p></div>
						<ul>
							<li>
								<span className={style.lispan}>*姓名:</span><Input placeholder="请输入姓名" className={style.ipt} />
							</li>
							<li>
								<span className={style.lispan}>*手机号码:</span><Input placeholder="请输入手机号码" className={style.ipt} />
							</li>
							<li>
								<span className={style.lispan}>证件类型:</span><Input placeholder="请输入证件号码" className={style.ipt} />
							</li>
							<div className={style.danxuan}>
								<span className={style.lispan}>性别:</span><Radio.Group onChange={this.onChange}>
									<Radio value={1}>男</Radio>
									<Radio value={2}>女</Radio>
								</Radio.Group>
							</div>
							<li>
								<span className={style.lispan}>出生日期</span><Input placeholder="请备注您的出生日期" className={style.ipt} />
							</li>
						</ul>
					</div>

					
				</div>
				<div className={style.fuwumendian}>
				<div className={style.lianxiren2}>服务门店 <p>请选择离您最近的服务门店提交旅客资料。如您附近无门店，请选择我们的客服中心。</p></div>
				<div className={style.dizhi}><p>北京呼叫中心</p><Button>选择门店</Button></div>
				<p className={style.dizhip}>地址：北京市朝阳区朝阳公园路8号（朝阳公园西二门）电话：1010 9898服务时间：9:00-19:00</p>
				</div>

				<div className={style.enter}>
					<Checkbox className={style.ipt_check}>我已阅读并知悉以下旅游合同、费用包含、预定须知、温馨提示、自费项目等所有相关内容,同意签署下列旅游合同。</Checkbox>
					<Button>提交订单</Button>
				</div>
				<div className={style.hetong}>
						<div className={style.hetongtop}>
							<ul>
								<li>旅游合同</li>
								<li>费用说明</li>
								<li>服务标准</li>
								<li>预定须知</li>
							</ul>
						</div>

						<div className={style.wenzi}>
						第一条本合同术语和定义

1. 团队出境旅游服务，指出境社依据《中华人民共和国旅游法》、《中国公民出国旅游管理办法》和《旅行社条例》等法律、法规，组织旅游者出国旅游及赴中外双方政府商定的国外边境区域和港、澳地区等旅游目的地旅游，代办旅游签证／签注，代订公共交通客票，提供餐饮、住宿、游览等两项以上服务活动。

2.旅游费用，指旅游者支付给出境社，用于购买本合同约定的旅游服务的费用。

旅游费用包括出境社安排的旅游服务项目费用，但合同另有约定的除外：

（1）必要的签证/签注费用（旅游者自办的除外）；

（2）交通费（含境外机场税）；

（3）住宿费；

（4）餐费（不含酒水费）；

（5）出境社统一安排的景区景点的首道门票费；

（6）行程中安排的其他项目费用；

（7）领队导游人员服务费；

（8）边境旅游中办理旅游证件的费用；

（9）出境社、境外地接社等其他服务费用。

旅游费用不包括：

（1）办理护照、港澳台通行证的费用；

（2）办理落地签、离境税的费用；

（3）办理离团的费用；

（4）旅游者投保的人身意外伤害保险费用；

（5）合同未约定由出境社支付的费用，包括但不限于行程以外非合同约定项目所需的费用、自行安排活动期间发生的费用;

（6）境外小费;

（7）行程中发生的旅游者个人费用，包括但不限于交通工具上的非免费餐饮费、行李超重费，住宿期间的洗衣、通讯 、饮料及酒类费用，个人娱乐费用，个人伤病医疗费，寻找个人遗失物品的费用及报酬，个人原因造成的赔偿费用。

3.履行辅助人，指与旅行社存在合同关系，协助其履行本合同义务，实际提供相关服务的法人、自然人或者其他组织。

4.自由活动，特指《旅游行程单》中安排的自由活动。

5.自行安排活动期间，指《旅游行程单》中安排的自由活动期间、旅游者不参加旅游行程活动期间、每日行程开始前、结束后旅游者离开住宿设施的个人活动期间、旅游者经领队或者导游同意暂时离团的个人活动期间。

6.不合理的低价，指出境社提供服务的价格低于接待和服务费用或者低于行业公认的合理价格，且无正当理由和充分证据证明该价格的合理性。其中，接待和服务费用主要包括出境社提供或者采购餐饮、住宿、交通、游览、导游或者领队等服务所支出的费用。

7. 具体购物场所，指购物场所有独立的商号以及相对清晰、封闭、独立的经营边界和明确的经营主体，包括免税店，大型购物商场，前店后厂的购物场所，景区内购物场所，景区周边或者通往景区途中的购物场所，服务旅游团队的专门商店，商品批发市场和与餐饮、娱乐、停车休息等相关联的购物场所等。

8.旅游者投保的人身意外伤害保险，指旅游者自己购买或者通过旅行社、航空机票代理点、景区等保险代理机构购买的以旅行期间自身的生命、身体或者有关利益为保险标的的短期保险，包括但不限于航空意外险、旅游意外险、紧急救援保险、特殊项目意外险。

9.离团，指团队旅游者在境外经领队同意不随团队完成约定行程的行为。

10.脱团，指团队旅游者在境外未经领队同意脱离旅游团队，不随团队完成约定行程的行为。

11.转团，指由于未达到约定成团人数不能出团，出境社征得旅游者书面同意，在行程开始前将旅游者转至其他出境社所组的出境旅游团队履行合同的行为。

12.拼团，指出境社在保证所承诺的服务内容和标准不变的前提下，在签订合同时经旅游者同意，与其他出境社招徕的旅游者拼成一个团统一安排旅游服务的行为。

※13.不可抗力，指不能预见、不能避免并不能克服的客观情况，包括但不限于因自然原因和社会原因引起的，如自然灾害、战争、恐怖活动、动乱、骚乱、罢工、突发公共卫生事件、政府行为。

※14.已尽合理注意义务仍不能避免的事件，指因当事人故意或者过失以外的客观因素引发的事件，包括但不限于重大礼宾活动导致的交通堵塞，飞机、火车、班轮、城际客运班车等公共客运交通工具延误或者取消，景点临时不开放。

※15.必要的费用，指出境社履行合同已经发生的费用以及向地接社或者履行辅助人支付且不可退还的费用, 包括乘坐飞机（车、船）等交通工具的费用（含预订金）、旅游签证/签注费用、饭店住宿费用（含预订金）、旅游观光汽车的人均车租等。

※16.公共交通经营者，指航空、铁路、航运客轮、城市公交、地铁等公共交通工具经营者。

※17.担保函，指出境社因以自身信誉及签证业务向境外国家使领馆担保旅游者随团旅游并按期回国，为避免旅游者脱团或滞留境外，由旅游者与担保人签署的担保文件。

 

第二章  合同的订立

第二条旅游行程单

出境社应当提供《旅游行程单》（以下简称《行程单》），经双方签字或者盖章确认后作为本合同的组成部分。《行程单》应当对如下内容做出明确的说明：

（1）旅游行程的出发地、途经地、目的地、结束地，线路行程时间（按自然日计算，含乘飞机、车、船等在途时间，不足24小时以一日计）；

（2）旅游目的地地接社的基本信息；

（3）交通、住宿、用餐等服务安排及其标准；

（4）出境社统一安排的游览项目的具体内容及时间；

（5）自由活动的时间；

（6）行程安排的娱乐活动；

※第三条订立合同

旅游者应当认真阅读本合同条款和《行程单》，在旅游者理解本合同条款及有关附件后，出境社和旅游者应当签订书面合同。

※第四条代理人订立合同

由旅游者的代理人订立合同的，代理人须确保获得相应代理权限，且代理人承诺将旅游合同约定及《行程单》相关内容如实完整告知旅游者。

 




						</div>
				</div>



				<div className={style.foot}>
					
				</div>
			</div>
			
			
		)
	}
	componentDidMount(){	
		
			api.getCart({id:200006}).then((data)=>{
				console.log(data)
			})
	}
	
	
	
	
}
