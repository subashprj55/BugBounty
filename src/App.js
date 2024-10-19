import { Route, Routes } from "react-router-dom";
import BugAboutUs from "./Pages/BugAboutUs";
import BugTest from "./Pages/BugTest";
import "./App.css";
import BugHome from "Pages/BugHome";
import Bug404 from "Pages/Bug404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BugHome />} />
        <Route path="/transaction" element={<BugAboutUs />} />
        <Route path="test" element={<BugTest />} />
        <Route path="*" element={<Bug404 />} />
      </Routes>
    </>
  );
}

export default App;
