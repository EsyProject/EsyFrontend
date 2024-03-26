import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Login, Password, Register, Historic, Schedule } from './pages/index'

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Password' element={<Password />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/historic' element={<Historic />} />
          <Route path='/schedule' element={<Schedule />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App