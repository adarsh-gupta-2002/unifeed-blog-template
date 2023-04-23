
 
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Layout from "./componets/Layout"
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Features from './pages/Featrues'
import Subscribe from './pages/Subscribe'


function App() {

   

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='features' element={<Features/>} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path = "subscribe" element={<Subscribe/>} />
        </Route>
      </Routes>
        
    </BrowserRouter>
  )
}

export default App
