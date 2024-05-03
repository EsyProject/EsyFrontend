import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Historic,
  Schedule,
  Settings,
  Account,
  Tickets,
  Dashboard,
  Feed,
  Reservation,
  EventCreation,
  LoginSSO,
  Authentication,
} from "./pages/index";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/login" element={<LoginSSO />} />
          <Route path="/" element={<Home />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/description" element={<Reservation />} />
          <Route path="/create" element={<EventCreation />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
