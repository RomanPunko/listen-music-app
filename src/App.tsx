import './styles/index.css'
import AppRouters from './routers/AppRouters'
import { BrowserRouter } from 'react-router-dom'

 
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouters/>
      </BrowserRouter>
    </>
  )
}

export default App