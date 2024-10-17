import { Route, Routes } from "react-router-dom";
import BugAboutUs from "./Pages/BugAboutUs";
import BugTest from "./Pages/BugTest";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BugAboutUs />} />
        <Route path="test" element={<BugTest />} />
      </Routes>
    </>
  );
}

export default App;
