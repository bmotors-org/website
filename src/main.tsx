import {createRoot} from 'react-dom/client';
import './index.css';
import {AppProviders} from "./components/App/Providers";
import {App} from './App';

const container = document.getElementById('app')!;

const root = createRoot(container);

root.render(
  <AppProviders>
    <App/>
  </AppProviders>
);
