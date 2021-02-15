const { app, BrowserWindow, ipcMain } = require('electron');
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
  // 打开开发者工具，默认不打开
  win.webContents.openDevTools()
  win.loadURL("https://www.meituan.com/")
  // 关闭window时触发下列事件.
  win.on('closed', function () {
    win = null
  });
}
// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow)

// 所有窗口关闭时退出应用.
app.on('window-all-closed', function () {
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (win === null) {
    createWindow()
  }
})

 // 你可以在这个脚本中续写或者使用require引入独立的js文件. 