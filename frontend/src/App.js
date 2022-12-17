import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import AddHouse from "./pages/Dashboard/AddHouse";
import Dashboard from "./pages/Dashboard/Dashboard";
import ViewHouses from "./pages/Dashboard/ViewHouses";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile/Profile";
import ChangePassword from "./pages/Profile/ChangePassword";
import HousePage from "./pages/HousePage";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/houses/:id" element={<HousePage />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="changepassword" element={<ChangePassword />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="addhouse" element={<AddHouse />} />
              <Route path="viewhouses" element={<ViewHouses />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
