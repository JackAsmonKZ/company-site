import ReactDOM from 'react-dom/client';
import { App } from './App';

import '@assets/scss/main.scss';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(<App />);
