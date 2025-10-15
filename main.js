const {app, BrowserWindow} = require('electron');
const path = require('path');
function createWindow(){
  const win = new BrowserWindow({width:1000,height:700,minWidth:900,minHeight:600,frame:false,show:false,backgroundColor:'#0b0b0c',webPreferences:{preload:path.join(__dirname,'preload.js'),contextIsolation:true}});
  win.loadFile('renderer.html');
  win.once('ready-to-show',()=>win.show());
  win.setMenuBarVisibility(false);
}
app.whenReady().then(createWindow);
app.on('window-all-closed',()=>{ if (process.platform !== 'darwin') app.quit(); });
