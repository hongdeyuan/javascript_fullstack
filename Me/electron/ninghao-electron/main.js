const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')
// electron 内置了window
// 让 electron 支持热更新
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_mondules', '.bin', 'electron')
})
ipcMain.on('greet', (event, args) => {
  console.log(args)
  event.sender.send('greet', {
    message: 'hi rendeder ~'
  })
})
let win; //窗口
const createWindow = () => {
  win = new BrowserWindow({
    width: 960,
    height: 600,
    minWidth: 830,
    minHeight: 500,
    backgroundColor: '#f8f8f8',
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL("https://www.meituan.com/")
}
app.on('ready', createWindow)