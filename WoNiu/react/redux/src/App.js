// Redux = flux + Reduce
import React, { Component } from 'react'
import { Input, Button, List, Typography } from 'antd'
import 'antd/dist/antd.css';

import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import store from './store/index.js'

// store 的创建


class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)// 只要store里面的数据发生变化就会触发
  }
  
  handleStoreChange = () => {
    // console.log('store changed')
    this.setState(store.getState())
  }

  handleChange = (e) => {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)// 让管理员听到这句话
  }

  handleBtn = () => {
    const action = {
      type: ADD_TODO_ITEM
    }

    store.dispatch(action)
  }

  handleItemDelete (index) {
    // console.log(index)
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }

    store.dispatch(action)
  }

  render() {

    return (
      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
        <div>
          <Input 
            placeholder=" info " 
            value = {this.state.inputValue}
            style={{ width: '200px', marginLeft: '20px' }}
            onChange={this.handleChange}
            />
          <Button type="primary" onClick={this.handleBtn}>提交</Button>
        </div>

        <List
          style={{width: '300px', marginTop: '20px', marginLeft: '20px'}}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList