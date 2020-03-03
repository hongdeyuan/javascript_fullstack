import React, { Component } from 'react'
import { List,Card, Typography  } from 'antd';
import axios from 'axios'
import './index.less'
class Star extends Component {
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
      title: '',
      pageNo: 1,
      pageSize: 10
    }
    axios({
      method: "GET",
      url: "/api/star/list",
      params
    })
    .then(function (response) {
      
      if (response.data.code === 1000) {
        console.log(response.data.data);
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
          <List
            className="star-list"
            header={<h3>文章收藏</h3>}
            pagination = {
              {pageSize: 3}
            }
            size="large"
            itemLayout="vertical"
            dataSource={this.state.data}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <List.Item.Meta
                  description={<a href={item.url}>{item.title}</a>}
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    );
  }
}

export default Star