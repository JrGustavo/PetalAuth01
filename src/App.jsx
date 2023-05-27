import {BrowserRouter, Routes, Route} from "react-router-dom";
// Layouts
import AuthLayout from "./layouts/auth/AuthLayout.jsx";

// Pages
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import ForgetPassword from "./pages/auth/ForgetPassword.jsx";
import ChangePassword from "./pages/auth/ChangePassword.jsx";
import Error404 from "./pages/auth/404.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="registro" element={<Register/>} />
                <Route path="olvide-password" element={<ForgetPassword/>} />
                <Route path="restablecer-password/:token" element={<ChangePassword/>} />
        </Route>
            <Route path="*" element={<Error404/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
