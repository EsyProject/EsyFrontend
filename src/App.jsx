import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Login, Password, Register, Historic } from './pages/index'

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Password' element={<Password />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Historic' element={<Historic />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App