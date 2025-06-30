import './styles/index.css';
import AppRouters from './routers/AppRouters';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { AudioProvider } from './context/AudioContext';

const store = setupStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <AudioProvider>
          <BrowserRouter>
            <AppRouters />
          </BrowserRouter>
        </AudioProvider>
      </Provider>
    </>
  );
}

export default App;
