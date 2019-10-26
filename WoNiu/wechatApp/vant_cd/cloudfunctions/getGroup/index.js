// 云函数入口文件
const cloud = require('wx-server-sdk')

//指名环境
const env = 'dhyuan'

cloud.init()

//获取数据库句柄
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  //cloud.getWXContext()直接拿到用户信息
  const openId = cloud.getWXContext().OPENID

  //查询是否有 userId: openId
  let groupList = await db.collection('user-group').where({
    userId: openId
  }).get()

  let returnResult = []

  for (let i = 0;i < groupList.data.length; i++) {//let item of groupList.data

    const oneGroup = await db.collection('group').where({
      _id:  groupList.data[i].gorupId,
      delete: false
    }).get()

    if (oneGroup.data.length  > 0) {

      // const userInfo = await db.collection('user').where({
      //   openId: oneGroup.data[0].createBy
      // }).get()

      // oneGroup.data[0].createBy = userInfo.data[0]
      // oneGroup.data[0].relateUserGroupId = item._id
      returnResult.push(oneGroup.data[i])
    }
  }

  return returnResult.sort((a,b) => a.createTime < b.createTime ? 1 : -1)

}