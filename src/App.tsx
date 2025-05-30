import './styles/index.css'
import  Layout  from './layouts/Layout'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </>
  )
}

export default App