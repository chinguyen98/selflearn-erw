export const APP_BRIDGE = {
  KEY: 'api_app',
  CHANNELS: {
    QUIT: 'app:quit',
  },
};

export interface IAppBridge {
  quitApp: () => void;
}
