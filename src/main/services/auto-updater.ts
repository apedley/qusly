import { ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';

import { AppWindow } from '../app-window';

export const runAutoUpdaterService = (appWindow: AppWindow) => {
  ipcMain.on('update-install', () => {
    autoUpdater.quitAndInstall();
  });

  ipcMain.on('update-check', () => {
    if (process.env.ENV !== 'dev') {
      autoUpdater.checkForUpdates();
    }
  });

  autoUpdater.on('update-downloaded', ({ version }) => {
    appWindow.instance.webContents.send('update-available', version);
  });
};
