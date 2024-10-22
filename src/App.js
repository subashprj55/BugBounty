import { Route, Routes } from "react-router-dom";
import BugAboutUs from "./Pages/BugAboutUs";
import "./App.css";
import BugHome from "Pages/BugHome";
import Bug404 from "Pages/Bug404";
import BugLogin from "Pages/BugLogin";
import BugSignup from "Pages/BugSignup";
import BugProfile from "Pages/BugProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BugHome />} />
        <Route path="profile" element={<BugProfile />} />
        <Route path="transaction" element={<BugAboutUs />} />
        <Route path="login" element={<BugLogin />} />
        <Route path="signup" element={<BugSignup />} />
        <Route path="*" element={<Bug404 />} />
      </Routes>
    </>
  );
}

export default App;
