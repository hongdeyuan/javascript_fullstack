// Redux = flux + Reduce
import React, { Component } from 'react'
import { Input, Button, List, Typography } from 'antd'
import 'antd/dist/antd.css';

import store from './store/index.js'

// store 的创建


class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState()
    // console.log(store.getState())
  }
  

  render() {

    return (
      <div style={{ marginLeft: '10px', marginTop: '10px' }}>
        <div>
          <Input placeholder=" info " style={{ width: '200px', marginLeft: '20px' }} />
          <Button type="primary">提交</Button>
        </div>

        <List
          style={{width: '300px', marginTop: '20px', marginLeft: '20px'}}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList