import './styles/index.css';
import AppRouters from './routers/AppRouters';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';


const store = setupStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouters />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
