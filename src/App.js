import { Routes, Route } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import DSPhatTu from "./pages/DSPhatTu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserLoginTemplate } from "./templates/UserLoginTemplate";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route path="/phattu" element={<DSPhatTu />}></Route>
      </Route>
      <Route element={<UserLoginTemplate />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
