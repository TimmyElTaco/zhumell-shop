import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './layouts/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthProvider';

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            
            <Route path='/' element={<Layout />}>
              <Route index element={<Landing />}></Route>
              <Route path='login' element={<Login />}></Route>
              {/* <Route path='register' element={<Landing />}></Route>
              <Route path='confirm/:id' element={<Landing />}></Route> */}
            </Route>
          
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
