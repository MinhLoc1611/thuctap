import { Routes, Route } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import DSPhatTu from "./pages/DSPhatTu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserLoginTemplate } from "./templates/UserLoginTemplate";
import DSDaoTrang from "./pages/DSDaoTrang";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route path="/phattu" element={<DSPhatTu />}></Route>
        <Route path="/daotrang" element={<DSDaoTrang />}></Route>
      </Route>
      <Route element={<UserLoginTemplate />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
