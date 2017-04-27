
const { app, BrowserWindow } = require('electron');

let appShell;
let appUrl = 'file://' + __dirname + '/index.html';

function createElectronShell() {
    appShell = new BrowserWindow({ width: 800, height: 600 });
    appShell.loadURL(appUrl);
    appShell.on('closed', () => { appShell = null; });
    appShell.webContents.openDevTools();
}

app.on('ready', createElectronShell);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    if (appShell == null)
        createElectronShell();
});