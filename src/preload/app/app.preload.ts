import { contextBridge, ipcRenderer } from 'electron';
import { APP_BRIDGE } from './app.bridge';

const quitApp = () => {
  ipcRenderer.send(APP_BRIDGE.CHANNELS.QUIT);
};

contextBridge.exposeInMainWorld(APP_BRIDGE.KEY, {
  ...quitApp,
});
