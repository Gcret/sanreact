import React, { Component } from 'react';
import { Input, Button, Modal,Empty ,Pagination } from 'antd';
import style from './Show.module.css';
import axios from 'axios';
// import api from '../api/api_pro';



export default class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            ipt1: '',
            ipt2: '',
            ipt3: '',
            ipt4: '',
            modal1Visible: false,
            ipt5: '',
            ipt6: '',
            ipt7: '',
            ipt8: '',
            id: 0,
            display: "none"
        }
    }

    render() {
        return (
            <div>
                
                
                <div >
                    <Input placeholder="商品图片" className={style.input4} size="small" onChange={this.ipt1.bind(this)} defaultValue={this.state.ipt1} />
                    <Input placeholder="商品名称" className={style.input4} size="small" onChange={this.ipt2.bind(this)} defaultValue={this.state.ipt2} />
                    <Input placeholder="商品价格" className={style.input4} size="small" onChange={this.ipt3.bind(this)} defaultValue={this.state.ipt3} />
                    <Input placeholder="商品描述" className={style.input4} size="small" onChange={this.ipt4.bind(this)} defaultValue={this.state.ipt4} />
                    <Button type="danger" size="small" className={style.btn} onClick={this.add.bind(this)}>添加商品</Button>
                    <Button type="danger" size="small" onClick={this.sort1.bind(this)}>从大到小(根据商品价格排序)</Button>
                    <Button type="danger" size="small" onClick={this.sort2.bind(this)}>从小到大(根据商品价格排序)</Button>
                </div>
               
                <div className={style.zanshi} display={this.state.display}>
                    <div className={style.yeshu}>
                        <div className={style.yeshu2}>
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                
                <Empty description={"没有更多的数据"}/>
                </div>
                <hr />
                {
                    this.state.list.map((item, i) => {
                        return (
                            <div key={i} className={style.shangpin}>
                                <img src={item.pimg} className={style.shangpinimg} />
                                <div className={style.shangpinpid}><h3>商品ID:{item.pid}</h3></div>
                                <div className={style.shangpinname}><h3>商品名称:{item.pname}</h3></div>
                                <div className={style.shangpinpprice}><p>商品价格:{item.pprice}</p></div>
                                <div className={style.shangpinpdesc}><p>商品描述:</p>{item.pdesc}</div>
                                <Button type="primary" className={style.btn1} onClick={this.xiubtn.bind(this, item.pid)}>修改商品</Button>
                                <Button type="danger" className={style.btn2} onClick={this.del.bind(this)}>删除商品</Button>
                                <Modal
                                    title="修改商品"
                                    style={{ top: 50 }}
                                    okText="确认修改"
                                    // mask={false}
                                    visible={this.state.modal1Visible}
                                    // onOk={() => this.setModal1Visible(false)}
                                    onCancel={() => this.setModal1Visible(false)}
                                    onOk={this.xiu.bind(this)}
                                >

                                    {/* <Input placeholder="商品图片" className={style.input4} size="small" ref="ipt5" /> */}
                                    <Input placeholder="商品名字" className={style.input4} size="small" ref="ipt6" />
                                    <Input placeholder="商品价格" className={style.input4} size="small" ref="ipt7" />
                                    <Input placeholder="商品描述" className={style.input4} size="small" ref="ipt8" />



                                </Modal>
                               
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount() {
        // let to = localStorage.getItem("token")
        // console.log(to)
        // if (to) {
            axios({
                url: 'http://jx.xuzhixiang.top/ap/api/productlist.php',
                params: {
                    uid:200006,
                   
                }
            }).then((data) => {
                console.log(data)
                let arr = data.data.data
                console.log(arr)
                this.setState({
                    list: arr
                })
                if(arr.length === 0){
                    console.log(111)
                    this.setState=({
                        display:"none"
                    })
                }
            });

     



    }

    sort1(){
        let arr = this.state.list;
       var aa = arr.sort(function(a,b){
          return b.pprice -a.pprice
       })
       console.log(aa)
    this.setState({
        list:aa
    })
    }
    sort2(){
        let arr = this.state.list;
       var aa = arr.sort(function(a,b){
          return a.pprice-b.pprice
       })
       console.log(aa)
    this.setState({
        list:aa
    })
    }


    del() {
        console.log("删除商品")
        
    }
    ipt1(e) {
        this.setState({
            ipt1: e.target.value
        })
    }
    ipt2(e) {
        this.setState({
            ipt2: e.target.value
        })
    }
    ipt3(e) {
        this.setState({
            ipt3: e.target.value
        })
    }
    ipt4(e) {
        this.setState({
            ipt4: e.target.value
        })
    }

    add() {
        let img = this.state.ipt1;
        let name = this.state.ipt2;
        let price = this.state.ipt3;
        let desc = this.state.ipt4;
        axios({
            url: ' http://jx.xuzhixiang.top/ap/api/goods/goods-add.php',
            params: {
                uid: 200008,
                pimg: img,
                pname: name,
                pprice: price,
                pdesc: desc
            }
        }).then((data) => {
            console.log(data)
            axios({
                url: 'http://jx.xuzhixiang.top/ap/api/productlist.php',
                params: {
                    uid: 200008
                }
            }).then((data) => {
                let arr = data.data.data
                this.setState({
                    list: arr
                })
            });
        })

    }

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });

    }

    xiu() {
        let { list, id } = this.state
        console.log(id)
        console.log(list)
        let index = list.findIndex(v => v.pid === id)
        console.log(index);
        this.setState({
            modal1Visible: false
        })
        let name = this.refs.ipt6.state.value;
        let price = this.refs.ipt7.state.value;
        let desc = this.refs.ipt8.state.value;
        axios({
            url: 'http://jx.xuzhixiang.top/ap/api/goods/goods-update.php',
            params: {
                pid: id,
                pname: name,
                pprice: price,
                pdesc: desc,
            }
        }).then((data) => {
            console.log(data, index)
            let newList = JSON.parse(JSON.stringify(list))
            console.log(newList)
            newList[index] = data.config.params
            this.setState({
                list: newList
            });
        })
    }

    xiubtn(i) {
         console.log(i)
        this.setState({
            modal1Visible: true,
            id: i
        })

    }
}








