/**
 * Created by EDZ on 2018/11/11.
 */
import React, {Component, Fragment} from 'react';
import './Todolist.css';
//React的Ajax中间件
import axios from 'axios';
//Fragment可做外层DIV
class Todolist extends Component {

    constructor(props) {
        super(props);
        //组件状态
        this.state = {
            inputValue: '',
            list: [],//查询出的数组
            listSum: 0,//查询出的数组长度
            list_0: [],//非种子数组
            list_1: [],//种子数组
            list_4: [],//涵盖四个分组的数组
            smalList: [],//第一个小数组,
            smalList2: [],//第二个小数组,
            smalList3: [],//第三个小数组
            smalList4: [],//第四个小数组
        }
    }

    //生命周期函数
    //组件即将被挂载之前执行
    componentWillMount() {
        //此方法用于展示表格人数
        axios.get('http://localhost:3002/judoka_base_all_man_60kg').then((result) => {
            this.setState(() => {
                return {
                    list: result.data,
                    listSum: result.data.length,
                }
            });
        }).catch(() => {
            alert('error');
        });
    }

    //组件被挂载之后执行
    componentDidMount() {
        //Ajax请求放在这里不会有任何问题
        console.log('挂载之后执行又被执行了');
    }

    //组件被更新之前执行
    shouldComponentUpdate() {
        console.log('组件被更新之前执行');
        return true;
    }

    //组件被更新之前执行，如果shouldComponentUpdate返回true执行，返回false不执行
    componentWillUpdate() {
        console.log('在shouldComponentUpdate之后执行');
    }

    //组件更新完成之后执行
    componentDidUpdate() {
        console.log('组件更新后执行')
    }


    //JSX语法要求外层必须有DIV包裹
    //{}表表一个JSX表达式
    //React中的class最好用classname
    render() {
        return (
            <Fragment>
                <div className="div-table-body">
                    {
                        /*男运动员表格*/
                    }
                    <table className="table-body">
                        <tbody>
                        <tr>
                            <td>类别</td>
                            <td>-60kg</td>
                            <td>-66kg</td>
                            <td>-73kg</td>
                            <td>-81kg</td>
                            <td>-90kg</td>
                            <td>-100kg</td>
                            <td>+100kg</td>
                        </tr>
                        <tr>
                            <td>参赛人数</td>
                            <td>{this.state.listSum}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>状态</td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                        </tr>

                        <tr>
                            <td>筛子</td>
                            <td>
                                <button onClick={this.sub.bind(this, ['男', '-60kg'])}><img src="img/draw.png" alt=""
                                                                                           className="img-draw"/>
                                </button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                        </tr>

                        <tr>
                            <td>重置结果</td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                        </tr>

                        <tr>
                            <td>删除结果</td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br/>

                    {
                        /*女运动员表格*/
                    }
                    <table className="table-body2">
                        <tbody>
                        <tr>
                            <td>类别</td>
                            <td>-60kg</td>
                            <td>-66kg</td>
                            <td>-73kg</td>
                            <td>-81kg</td>
                            <td>-90kg</td>
                            <td>-100kg</td>
                            <td>+100kg</td>
                        </tr>
                        <tr>
                            <td>参赛人数</td>
                            <td>{this.state.listSum}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>状态</td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                            <td>
                                <button>×</button>
                            </td>
                        </tr>

                        <tr>
                            <td>筛子</td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                            <td>
                                <button onClick={this.sub.bind(this)}><img src="img/draw.png" alt=""
                                                                           className="img-draw"/></button>
                            </td>
                        </tr>

                        <tr>
                            <td>重置结果</td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                            <td>
                                <button>Reset</button>
                            </td>
                        </tr>

                        <tr>
                            <td>删除结果</td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="div-table-one">
                    <table className="table-one">
                        <tbody className="tbody-one">
                        {
                            this.state.smalList.map((item, index) => {
                                return (
                                    <Fragment>
                                        <tr key={item}>
                                            <td>{index}</td>
                                            <td>{item.name}</td>
                                            <td>({item.id})</td>
                                            <td>({item.company})</td>
                                        </tr>
                                    </Fragment>
                                )
                            })
                        }
                        </tbody>
                        <br/>
                        <tbody className="tbody-two">
                        {
                            this.state.smalList2.map((item, index) => {
                                return (
                                    <Fragment>
                                        <tr key={item}>
                                            <td>{index}</td>
                                            <td>{item.name}</td>
                                            <td>({item.id})</td>
                                            <td>({item.company})</td>
                                        </tr>
                                    </Fragment>
                                )
                            })
                        }
                        </tbody>
                        <br/>
                        <tbody className="tbody-three">
                        {
                            this.state.smalList3.map((item, index) => {
                                return (
                                    <Fragment>
                                        <tr key={item}>
                                            <td>{index}</td>
                                            <td>{item.name}</td>
                                            <td>({item.id})</td>
                                            <td>({item.company})</td>
                                        </tr>
                                    </Fragment>
                                )
                            })
                        }
                        </tbody>
                        <br/>
                        <tbody className="tbody-four">
                        {
                            this.state.smalList4.map((item, index) => {
                                return (
                                    <Fragment>
                                        <tr key={item}>
                                            <td>{index}</td>
                                            <td>{item.name}</td>
                                            <td>({item.id})</td>
                                            <td>({item.company})</td>
                                        </tr>
                                    </Fragment>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }

    sub(event) {
        //Ajax请求放在这里不会有任何问题
        let subSex = event[0];
        let subCategory = event[1];
        let list3 = [];
        let sum = 0;
        //首先执行查询,再次查询是因为当再次点击时，数组内容会被叠加，所以需要清空数组内容后再查询重复操作
        let a = new Promise((resolve, reject) => {
            axios.get('http://localhost:3002/judoka_base?sex=' + subSex + '&category=' + subCategory).then((result) => {

                this.setState(() => {
                    return {
                        list: result.data,
                    }
                });
                let list1 = [];
                let list0 = [];
                for (let i = 0; i < this.state.list.length; i++) {
                    //如果是种子
                    if (this.state.list[i].role != '0') {
                        list1.push(this.state.list[i]);
                        //如果不是种子
                    } else {
                        list0.push(this.state.list[i]);
                    }
                }

                this.setState(() => {
                    return {
                        list_1: list1,
                        list_0: list0
                    }
                });
                resolve(this.state.list);
            }).catch(() => {
                alert('error');
            });
        });

        let b = new Promise((resolve, reject) => {
            resolve(this.state.list_0);
        });

        let c = new Promise((resolve, reject) => {
            //只是为了控制顺序
            resolve(this.state.list_1);
        });

        a.then((data) => {
            //数组排序
            this.setState(() => {

                    while (this.state.list_0.length > 0) {
                        let index = Math.floor(Math.random() * 10);
                        if (this.state.list_0[index] != null) {
                            if (list3.length == 0) {
                                list3.push(this.state.list_0[index]);
                                this.state.list_0.splice(index, 1);
                            } else if (list3.length == 1 && list3[list3.length - 1].company != this.state.list_0[index].company) {
                                list3.push(this.state.list_0[index]);
                                this.state.list_0.splice(index, 1);
                            } else if (list3.length == 2 && list3[list3.length - 1].company != this.state.list_0[index].company && list3[list3.length - 2].company != this.state.list_0[index].company) {
                                list3.push(this.state.list_0[index]);
                                this.state.list_0.splice(index, 1);
                            } else if (list3.length == 3 && list3[list3.length - 1].company != this.state.list_0[index].company && list3[list3.length - 2].company != this.state.list_0[index].company && list3[list3.length - 3].company != this.state.list_0[index].company) {
                                list3.push(this.state.list_0[index]);
                                this.state.list_0.splice(index, 1);
                            } else if (list3.length >= 4 && list3[list3.length - 1].company != this.state.list_0[index].company && list3[list3.length - 4].company == this.state.list_0[index].company) {
                                list3.push(this.state.list_0[index]);
                                this.state.list_0.splice(index, 1);
                            } else if (sum > 5000) {
                                if (list3[0].company != this.state.list_0[index].company) {
                                    list3.splice(0, 0, this.state.list_0[index]);
                                    this.state.list_0.splice(index, 1);
                                } else if (list3[list3.length - 1].company != this.state.list_0[index].company) {
                                    list3.push(this.state.list_0[index]);
                                    this.state.list_0.splice(index, 1);
                                } else if (list3.length >= 3 && list3[list3.length - 3].company != this.state.list_0[index].company) {
                                    list3.splice(list3.length - 2, 0, this.state.list_0[index]);
                                    this.state.list_0.splice(index, 1);
                                } else if (list3.length >= 5 && list3[list3.length - 5].company != this.state.list_0[index].company) {
                                    list3.splice(list3.length - 5, 0, this.state.list_0[index]);
                                    this.state.list_0.splice(index, 1);
                                } else if (list3.length >= 7 && list3[list3.length - 7].company != this.state.list_0[index].company) {
                                    list3.splice(list3.length - 6, 0, this.state.list_0[index]);
                                    this.state.list_0.splice(index, 1);
                                } else if (list3.length >= 9 && list3[list3.length - 9].company != this.state.list_0[index].company) {
                                    list3.splice(list3.length - 8, 0, this.state.list_0[index]);
                                    this.state.list_0.splice(index, 1);
                                } else if (list3.length >= 11 && list3[list3.length - 11].company != this.state.list_0[index].company) {
                                    list3.splice(list3.length - 10, 0, this.state.list_0[index]);
                                    this.state.list_0.splice(index, 1);
                                } else if (list3.length >= 13 && list3[list3.length - 13].company != this.state.list_0[index].company) {
                                    list3.splice(list3.length - 12, 0, this.state.list_0[index]);
                                    this.state.list_0.splice(index, 1);
                                } else if (list3.length >= 15 && list3[list3.length - 15].company != this.state.list_0[index].company) {
                                    list3.splice(list3.length - 14, 0, this.state.list_0[index]);
                                    this.state.list_0.splice(index, 1);
                                } else if (sum > 10000) {
                                    console.log('10000');
                                    if (list3.length >= 2 && list3[list3.length - 2].company != this.state.list_0[index].company) {
                                        list3.splice(list3.length - 1, 0, this.state.list_0[index]);
                                        this.state.list_0.splice(index, 1);
                                    } else if (list3.length >= 4 && list3[list3.length - 4].company != this.state.list_0[index].company) {
                                        list3.splice(list3.length - 3, 0, this.state.list_0[index]);
                                        this.state.list_0.splice(index, 1);
                                    } else if (list3.length >= 6 && list3[list3.length - 6].company != this.state.list_0[index].company) {
                                        list3.splice(list3.length - 5, 0, this.state.list_0[index]);
                                        this.state.list_0.splice(index, 1);
                                    } else if (list3.length >= 8 && list3[list3.length - 8].company != this.state.list_0[index].company) {
                                        list3.splice(list3.length - 7, 0, this.state.list_0[index]);
                                        this.state.list_0.splice(index, 1);
                                    } else if (list3.length >= 10 && list3[list3.length - 10].company != this.state.list_0[index].company) {
                                        list3.splice(list3.length - 9, 0, this.state.list_0[index]);
                                        this.state.list_0.splice(index, 1);
                                    } else if (list3.length >= 12 && list3[list3.length - 12].company != this.state.list_0[index].company) {
                                        list3.splice(list3.length - 11, 0, this.state.list_0[index]);
                                        this.state.list_0.splice(index, 1);
                                    } else if (list3.length >= 14 && list3[list3.length - 14].company != this.state.list_0[index].company) {
                                        list3.splice(list3.length - 13, 0, this.state.list_0[index]);
                                        this.state.list_0.splice(index, 1);
                                    } else if (list3.length >= 16 && list3[list3.length - 16].company != this.state.list_0[index].company) {
                                        list3.splice(list3.length - 15, 0, this.state.list_0[index]);
                                        this.state.list_0.splice(index, 1);
                                    } else {
                                        list3.push(this.state.list_0[index]);
                                        this.state.list_0.splice(index, 1);
                                    }
                                }
                            } else {
                                sum++;
                                continue;
                            }
                        } else {
                            sum++;
                            continue;
                        }
                    }

                return {
                    list_0: list3,
                }
            });
            return b;
        }).catch((error) => {
            console.log(error);
        }).then((data) => {
            this.setState(() => {
                //清空数组，否则暂存区无法释放
                return {
                    list_4: [],
                    smalList: [],
                    smalList2: [],
                    smalList3: [],
                    smalList4: []
                }
            });
            for (let i = 0; i < this.state.list_0.length; i++) {
                console.log(this.state.list_0[i].company);
            }
            let s = this.state.list_0.length / 4;
            //分割数组
            for (let i = 0, len = this.state.list_0.length; i < len; i += s) {
                this.state.list_4.push(this.state.list_0.slice(i, i + s));
            }

            //将分割的数组再分割放入数组中
            for (let i = 0, len = this.state.list_4[0].length; i < len; i += 2) {
                this.state.smalList.push(this.state.list_4[0].slice(i, i + 2));
            }

            for (let i = 0, len = this.state.list_4[1].length; i < len; i += 2) {
                this.state.smalList2.push(this.state.list_4[1].slice(i, i + 2));
            }

            for (let i = 0, len = this.state.list_4[2].length; i < len; i += 2) {
                this.state.smalList3.push(this.state.list_4[2].slice(i, i + 2));
            }

            for (let i = 0, len = this.state.list_4[3].length; i < len; i += 2) {
                this.state.smalList4.push(this.state.list_4[3].slice(i, i + 2));
            }
            this.setState(() => {
                return {
                    smalList: this.state.smalList,
                    smalList2: this.state.smalList2,
                    smalList3: this.state.smalList3,
                    smalList4: this.state.smalList4
                }
            });
            //清空数组
            this.state.list_4.splice(0, this.state.list_4.length);
            return c;
        }).then((data) => {
            let arr = [];
            let arr2 = [];
            let arr3 = [];
            let arr4 = [];

            //将拆分的数组遍历加入新数组
            for (let i = 0; i < this.state.smalList.length; i++) {
                if (i == 0) {
                    for (let i = 0; i < this.state.smalList[0].length; i++) {
                        arr.push(this.state.smalList[0][i]);
                    }
                } else if (i == 1) {
                    for (let i = 0; i < this.state.smalList[1].length; i++) {
                        arr.push(this.state.smalList[1][i]);
                    }
                }
            }

            for (let i = 0; i < this.state.smalList2.length; i++) {
                if (i == 0) {
                    for (let i = 0; i < this.state.smalList2[0].length; i++) {
                        arr2.push(this.state.smalList2[0][i]);
                    }
                } else if (i == 1) {
                    for (let i = 0; i < this.state.smalList2[1].length; i++) {
                        arr2.push(this.state.smalList2[1][i]);
                    }
                }
            }

            for (let i = 0; i < this.state.smalList3.length; i++) {
                if (i == 0) {
                    for (let i = 0; i < this.state.smalList3[0].length; i++) {
                        arr3.push(this.state.smalList3[0][i]);
                    }
                } else if (i == 1) {
                    for (let i = 0; i < this.state.smalList3[1].length; i++) {
                        arr3.push(this.state.smalList3[1][i]);
                    }
                }
            }

            for (let i = 0; i < this.state.smalList2.length; i++) {
                if (i == 0) {
                    for (let i = 0; i < this.state.smalList4[0].length; i++) {
                        arr4.push(this.state.smalList4[0][i]);
                    }
                } else if (i == 1) {
                    for (let i = 0; i < this.state.smalList4[1].length; i++) {
                        arr4.push(this.state.smalList4[1][i]);
                    }
                }
            }

            if (this.state.list_1.length == 1) {
                arr.splice(0, 0, this.state.list_1[0]);

            } else if (this.state.list_1.length == 2) {
                for (let i = 0; i < this.state.list_1.length; i++) {
                    if (this.state.list_1[i].role == '1') {
                        arr.splice(0, 0, this.state.list_1[i]);
                    } else if (this.state.list_1[i].role == '2') {
                        arr2.splice(1, 0, this.state.list_1[i]);
                    }
                }
            } else if (this.state.list_1.length == 3) {
                for (let i = 0; i < this.state.list_1.length; i++) {
                    if (this.state.list_1[i].role == '1') {
                        arr.splice(0, 0, this.state.list_1[i]);
                    } else if (this.state.list_1[i].role == '2') {
                        arr2.splice(0, 0, this.state.list_1[i]);
                    } else if (this.state.list_1[i].role == '3') {
                        arr3.splice(0, 0, this.state.list_1[i]);
                    }
                }
            } else {
                for (let i = 0; i < this.state.list_1.length; i++) {
                    if (this.state.list_1[i].role == '1') {
                        arr.splice(0, 0, this.state.list_1[i]);
                    } else if (this.state.list_1[i].role == '2') {
                        arr2.splice(0, 0, this.state.list_1[i]);
                    } else if (this.state.list_1[i].role == '3') {
                        arr3.splice(0, 0, this.state.list_1[i]);
                    } else if (this.state.list_1[i].role == '4') {
                        arr4.splice(0, 0, this.state.list_1[i]);
                    }
                    /*if(arr[0].company==arr[1].company){
                        alert('22');
                        arr.splice(3,0,arr[1]);
                        arr.splice(arr[2],1);
                    }*/
                }
            }

            this.setState(() => {
                return {
                    smalList: arr,
                    smalList2: arr2,
                    smalList3: arr3,
                    smalList4: arr4
                }
            });
        })
    }
}
export default Todolist;