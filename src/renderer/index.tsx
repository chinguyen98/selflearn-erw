import { APP_BRIDGE_API_KEY, IAppBridge } from '../preload/app/app.bridge';
import { createRoot } from 'react-dom/client';
import App from './App';

declare global {
  interface Window {
    [APP_BRIDGE_API_KEY]: IAppBridge,
  }
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);