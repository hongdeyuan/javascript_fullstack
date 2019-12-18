var mysql = require('mysql')
var config = require('./defaultConfig')

// 创建线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 创建连接数据库的方法
let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 读取所有 users表数据
let getAllusers = function () {
  let _sql = `select * from users, user_auths where users.id = user_auths.user_id;`
  return allServices.query(_sql)
}

// 用户登录时  查找用户密码 匹配判断
let userLogin = function (username, userpwd, type) {
  let _sql = `select * from users, user_auths where users.id = user_auths.user_id and user_auths.identity_type_id=${type}  and user_auths.identifier="${username}" and user_auths.credential="${userpwd}";`
  return allServices.query(_sql)
}
// 查找用户
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`
  return  allServices.query(_sql)
}
// 注册新用户
let insertUser = function (value) {
  let _sql = `INSERT INTO users set username=?, userpwd=?, nickname=?`
  return allServices.query(_sql, value)
}

module.exports = {
  getAllusers,
  userLogin,
  findUser,
  insertUser
}