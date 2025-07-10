import './styles/index.css';
import AppRouters from './routers/AppRouters';
import { BrowserRouter } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext';
import useInitialization from './hooks/useInitalization';

function App() {
  useInitialization();

  return (
    <>
      <AudioProvider>
        <BrowserRouter>
          <AppRouters />
        </BrowserRouter>
      </AudioProvider>
    </>
  );
}

export default App;
