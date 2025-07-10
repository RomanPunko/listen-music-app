import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';

const store = setupStore();

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
