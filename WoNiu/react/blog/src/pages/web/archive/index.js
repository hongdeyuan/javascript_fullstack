import React, { Component } from 'react'
import { Timeline, Card } from 'antd';
import { color } from '../../../utils'
import axios from 'axios'
import { ClockCircleOutlined } from '@ant-design/icons';
import './index.less'

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    this.getList()
  }

  async getList() {
    const that = this
    const params = {
      pageNo: 1,
      pageSize: 5
    }
    axios({
      method: "GET",
      url: "/api/article/list",
      params
    })
    .then(function (response) {
      
      if (response.data.code === 1000) {
        // console.log(response.data.data);
        that.setState({
          data: response.data.data
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    return (
      <div>
        <Card>
          <Timeline>
            <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
              <div style={{ fontSize: '20px' }}>2019</div>
            </Timeline.Item>
            {
              this.state.data.map((item, index) => (
                <Timeline.Item  color={color[Math.floor(Math.random()*color.length)]} key={item + Math.random()} key={index}>
                  {item.createdAt}   {item.title}
                </Timeline.Item>
              ))
            }
          </Timeline>
        </Card>
      </div>
    );
  }
}

export default Archive