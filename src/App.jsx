import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Login, Password, Register, Historic, Schedule, Settings, Account, Tickets, Dashboard, Feed, Reservation } from './pages/index'

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
          <Route path='/settings' element={<Settings />} />
          <Route path='/account' element={<Account />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/description' element={<Reservation />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App