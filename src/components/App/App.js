import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import DronesList from "../DronesList/DronesList";
import LoginPage from '../LoginPage/LoginPage'
import MainPage from "../MainPage/MainPage";
import RegisterPage from "../RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/drones" element={<DronesList />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
