import { Routes, Route } from "react-router-dom";
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
  Error,
} from "./pages/index";

import ProtectedRoute from "./lib/sso/protectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginSSO />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/historic"
        element={
          <ProtectedRoute>
            <Historic />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/schedule"
        element={
          <ProtectedRoute>
            <Schedule />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/tickets"
        element={
          <ProtectedRoute>
            <Tickets />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/feed"
        element={
          <ProtectedRoute>
            <Feed />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/description"
        element={
          <ProtectedRoute>
            <Reservation />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <EventCreation />
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/authentication"
        element={
          <ProtectedRoute>
            <Authentication />
          </ProtectedRoute>
        }
      ></Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
