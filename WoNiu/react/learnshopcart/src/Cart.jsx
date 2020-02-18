import React, { Component } from 'react';


export default class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
      goodsList:[],
      good: '',
      cartList: []
    }
    this.handleAdd =this.handleAdd.bind(this)
    this.handlechange = this.handlechange.bind(this)
    this.handleAddBuy = this.handleAddBuy.bind(this)
    this.handlePlus = this.handlePlus.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
  }
  handleAdd() {
    if (this.state.good) {
      this.setState({
        goodsList: [...this.state.goodsList, this.state.good],
        good: ''
      })
    }
  }

  handlechange(e){
    this.setState({
      good: e.target.value
    })
  }

  handleAddBuy (v) {
    console.log(v)
    this.setState({
      cartList: [...this.state.cartList, v]
    })
  }

  handleMinus() {
    console.log('减一')
  }

  handlePlus() {
    console.log('加一')
  }
  render() {
    return (
      <div>
        <input onChange={this.handlechange} type="text" />
        <button onClick={this.handleAdd}>添加商品</button>
        <ul>
          { 
            this.state.goodsList.map((v, index) => {
              return <li key={index}> {v}<button onClick={this.handleAddBuy(v)}>加购</button></li>
            })
          }
        </ul>

        <ul>
          { 
            this.state.cartList.map((c, index) => {
              return <li key={index}> {c.name}<button onClick={this.handleMinus}>减</button>{c.number}<button onClick={this.handlePlus}>加</button></li>
            })
          }
        </ul>
      </div>
    )
  }
}