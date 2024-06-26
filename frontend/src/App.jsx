import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './layouts/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthProvider';
import Register from './pages/Register';
import Catalog from './pages/Catalog';
import Category from './pages/Category';
import ProductPage from './pages/ProductPage';
import Shop from './pages/Shop';
import SuccessPage from './pages/SuccessPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            
            <Route path='/' element={<Layout />}>
              <Route index element={<Landing />}></Route>
              <Route path='login' element={<Login />}></Route>
              <Route path='register' element={<Register />}></Route>
              {/*<Route path='confirm/:id' element={<Landing />}></Route> */}
              <Route path='shop' element={<Shop />}></Route>
              <Route path='buy/success' element={<SuccessPage />}></Route>
              <Route path='catalog'>
                <Route index element={<Catalog />}></Route>
                <Route path=':product' element={<Category />}></Route>
                <Route path='telescopes/:product_id' element={<ProductPage category='telescopes' />}></Route>
                <Route path='binoculars/:product_id' element={<ProductPage category='binoculars'/>}></Route>
                <Route path='accessories/:product_id' element={<ProductPage category='accessories'/>}></Route>
              </Route>
            </Route>
          
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
