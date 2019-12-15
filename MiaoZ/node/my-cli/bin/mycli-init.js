#!/usr/bin/env node

const commander = require('commander')
const path = require('path')
const fs = require('fs')
const ora = require('ora')
const glob = require('glob')
const downloadRepo = require('download-git-repo')
const inquirer = require('inquirer')
// 静态站点生成  hexo
const metalSmith = require('metalsmith')
// 编译
const handlebars = require('handlebars')

const args = commander.parse(process.argv).args
const projectName = args[0]
let list = glob.sync('*')
if (list.length) {
  if (list.filter(fileName => {
    console.log(fileName)
    return fileName === projectName
  }).length !== 0) {
    console.log(`项目已经存在${projectName}`)
    return
  }
}

go()
function go () {
  const loading = ora('正在下载项目').start()
  download()
  .then(() => {
    loading.succeed()
    return inquirer.prompt([
      {
        name: 'projectName',
        message: '项目名称',
        default: projectName
      },
      {
        name: 'css',
        message: '使用css预处理器',
        choices: ['less', 'stylus', 'sass'],
        default: 'less',
        type: 'list'
      },
      {
        name: 'router',
        message: '使用router吗？',
        type: 'confirm'
      }
    ])
  })
  .then(meta => {
    console.log(meta)
    return new Promise((resolve, reject) => {
      // current work dir
      metalSmith(process.cwd())
      .metadata(meta)
      .clean(false)
      .source(`${projectName}/.temp`)
      .destination(`${projectName}`)
      .use((file, metas, done) => {
        // console.log(file)
        const fileNames = Object.keys(file)
        fileNames.forEach(fname => {
          const content = file[fname].contents.toString()
          const compiledContent = handlebars.compile(content)(meta)
          // 替换contents
          file[fname].contents = Buffer.from(compiledContent)
        })
        done()
      })
      .build((err) => {
        if (!err) {
          resolve('ok')
        } else {
          resolve(err)
        }
      })
    })
  })
  .then(res => {
    console.log(res)
  })
  .catch(() => {
    loading.fail()
  })
}

function download() {
  // git clone 
  return new Promise((resolve, reject) => {
    downloadRepo('github:MengZhaoFly/my-cli-test#master',
    `${projectName}/.temp`, { clone: true }, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(`${projectName}/.temp`);
      }
    }
    )
  })
}
