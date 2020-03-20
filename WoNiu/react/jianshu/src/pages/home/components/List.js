import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class List extends Component {

  render() {
    const { list, getMoreList, page } = this.props
    return (
      <>
        {list.map((item, index) => (
          <Link to={"/detail/" + item.get('id')} key={index}>
            <ListItem>
              <img
                className="pic"
                src={item.get('imgUrl')}
                alt="" />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <>
          <LoadMore onClick={() => getMoreList(page)}>加载更多。。</LoadMore>
        </>
      </>
    );
  }
}

const mapSateToProps = (state) => ({
  list: state.home.get('articleList'),
  page: state.home.get('articlePage')
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    actionCreators.getMoreList(page)(dispatch)
  }
})

export default connect(mapSateToProps, mapDispatch)(List)