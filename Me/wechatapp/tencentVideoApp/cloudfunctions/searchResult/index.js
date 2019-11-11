// 云函数入口文件
const cloud = require('wx-server-sdk')

const env = 'dhyuan'
cloud.init()

// 获取数据库句柄suggestVideo
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  // cloud.getWXContext()直接拿到用户信息
  console.log(event.key)
  // 查询建议的 模糊查询


  const _ = db.command
  let serultVideo = await db.collection('searchResult').where(_.or([{
    title: db.RegExp({
        regexp: '.*' + event.key,
        options: 'i',
      })
    }
  ])).get({
    success: res => {
      console.log(res)
    },
    fail: err => {
      console.log(err)
    }
  })

  let returnResult = [];

  for (let i = 0; i < serultVideo.data.length; i++) {
    returnResult.push(serultVideo.data[i])
  }


  return returnResult.sort((a,b) => a.createTime < b.createTime ? 1 : -1)

}