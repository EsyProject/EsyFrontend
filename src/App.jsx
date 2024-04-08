import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Login, Password, Register, Historic, Schedule, Settings, Account, Tickets, Dashboard } from './pages/index'

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/password' element={<Password />} />
          <Route path='/register' element={<Register />} />
          <Route path='/historic' element={<Historic />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/account' element={<Account />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App