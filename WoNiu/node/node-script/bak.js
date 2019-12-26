const shell = require('shelljs') // 文件管理器
const moment = require('moment') // 格式化时间工具
const schedule = require('node-schedule')



// node 定时任务模块 node-schedule
function copy () {
  const curent = moment().format('YYYYMMDDhhmmss') // 20191226102410
  const folder = `src_${curent}`
  // 先创建一个时间信息的文件夹， 防止重复
  shell.mkdir('-p', './bak/'+folder) // 创建文件夹
  // shell 复制文件或文件夹
  shell.cp('-rf', './test', './bak/'+folder)

}

schedule.scheduleJob('00 00 00 * * *', () => {// 秒 分 时 日 月 年 ： * 代表不设置 -> 指每天凌晨执行该文件
  copy()
})

// 自动执行命令
// shell.exec('cls') // 执行windows 下的清空显示的命令
// shell.exec('npm run bak')

// 为了防止执行一个shell.exc后会退出node程序情况
shell.exec('node --version', {
  // 执行过程中命令提示符不会显示过程信息
  silent: true,
  // 不要异步执行
  async: false
}, (code, stdout, stderr) => {
  //  执行完毕后继续执行这里的回调函数
  // 自动修改内容
  // -i表示不创建备份 version: 表示需要替换的内容，aa: 表示替换的新内容， ./version.txt ：文件路径
  shell.sed('-i', /version\s=/, 'v =', './version.js')
  const content = shell.cat('./version.js')
  // console.log(content)
  // 最后一位每次打包自动版本号加一
  const rep = content.stdout.split('.')
  

  process.stdout.write("需要变更版本好吗(y/n)")
  process.stdin.on('data', (input) => {
    input = input.toString().trim()
    if (['Y', 'y', 'YES', 'yes'].indexOf(input) > -1) {
      rep[rep.length-1] = parseInt(rep[rep.length - 1]) + 1 + "'"
      shell.sed('-i', content.stdout, rep.join('.'), './version.js')
    }
    if (['N', 'n', 'NO', 'np'].indexOf(input) > -1) {
      process.exit(0)
    }
  })
})

