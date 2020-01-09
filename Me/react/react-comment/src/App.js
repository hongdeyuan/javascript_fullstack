import React from 'react'; 
import CommentInput from './CommentInput';
import './App.css';

class App extends React.Component {
  // 静态属性
  state = {
    commentList: [{
      username: 'li',
      comment: 'lililili'
    }]
  }
  onPublish = (username, comment) => {
    console.log(username, comment);
    let c = { username, comment };
    // 不可变数据
    // let obj = {};
    // let obj1 = obj;
    // obj1.name = 'li';
    // assign -> 此时不可变
    // let obj2 = Object.assign({}, obj)
    const list = this.state.commentList.slice(0)
    list.push(c);
    // 改data中的数据
    this.setState({
      commentList: list
    })
  }
  handleDelete = (e) => {
    // let list = this.state.
    // console.log();
    const i = parseInt(e.target.dataset.i)
    // this.state.commentList.splice(i, 1);
    let list = this.state.commentList.slice(0);
    list.splice(i, 1);
    this.setState({
      commentList: list
    })
  }
  render() {
    return (
      <>
        <CommentInput onPublish={this.onPublish}/>
        { this.state.commentList.length }
        {/* <CommentList />  响应式编程*/}
        { this.state.commentList && this.state.commentList.map(
          (c, i) => {
            return (
              <li key={ i }>{ c.username }: { c.comment } <button data-i={i} onClick={ this.handleDelete}>删除</button></li>
            )
          }
        ) }
      </>
    )
  }
}

export default App;
