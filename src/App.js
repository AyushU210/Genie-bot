import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./component/Main";
import SignUp from "./component/SignUp";
import Login from "./component/Login";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
