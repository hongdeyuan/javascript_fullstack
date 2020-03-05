import React, { Component } from 'react'
import { Card } from 'antd';
import {
  TagsOutlined,
  FolderOutlined,
  CalendarOutlined,
  EyeOutlined
} from '@ant-design/icons'
import './index.less'

import { EditorState, ContentState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import htmlToDraft from 'html-to-draftjs'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// 引入编辑器以及编辑器样式
// import BraftEditor from 'braft-editor'
// import 'braft-editor/dist/index.css'
// import { color } from '../../../utils'
import axios from 'axios'


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id: null,
      data: [],
      editorState: EditorState.createEmpty()
    }
  }
  componentDidMount () {
    this.getList()
    // console.log(this.props, this.state.data)
    // this.getList()
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
        
        var datas = response.data.data.find(e => e.id === that.props.location.query.id)
        // console.log(datas);

        that.setState({
          data: datas
        })
        // console.log(datas.content);
        const content = datas.content
        const contentBlock = htmlToDraft(content)
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
        const editorState = EditorState.createWithContent(contentState)
        that.setState({ editorState: editorState })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    const IconText = ({ icon, text }) => (
      <span className="tag">
        {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
      </span>
    );

    // const extra = <div className='content-extra'>
    //   <Icon type='calendar' style={{ marginRight: 8 }} />
    //   { this.state.data.createdAt }
    //   <Icon type="eye" style={{ marginRight: 8, marginLeft: 8 }} />
    //   { this.state.data.readedCount } 次预览
    // </div>

    // const editorProps = {
    //   contentFormat: 'html',
    //   initialContent: this.state.data.content
    // }
    return (
      <div>
         <Card title={this.state.data.title} extra={[
           <IconText icon={CalendarOutlined} text={this.state.data.createdAt} key="list-vertical-message1" />,
           <IconText icon={EyeOutlined} text={this.state.data.readedCount} key="list-vertical-message2" />
         ]}>
            {/* <div className="content" dangerouslySetInnerHTML={{ __html: this.state.data.content }}></div> */}
            <Editor
              readOnly
              toolbarHidden
              editorState={this.state.editorState}
              editorClassName="editor"
          />
            {/* <BraftEditor {...editorProps}/> */}
        </Card>
      </div>
    );
  }
}

export default Detail