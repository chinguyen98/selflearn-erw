import { APP_BRIDGE, IAppBridge } from 'preload/app/app.bridge';
import { createRoot } from 'react-dom/client';
import App from './App';

const APP_BRIDGE_KEY: unique symbol = Symbol(APP_BRIDGE.KEY);

declare global {
  interface Window {
    [APP_BRIDGE_KEY]: IAppBridge,
  }
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);