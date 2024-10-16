import { Route, Routes } from "react-router-dom";
import BugAboutUs from "./Pages/BugAboutUs";
import BugTest from "./Pages/BugTest";
import "./App.css";
import BugNavbar from "./components/BugNavbar";
import BugFooter from "./components/BugFooter";

function App() {
  return (
    <>
      <BugNavbar />
      <Routes>
        <Route path="/" element={<BugAboutUs />} />
        <Route path="test" element={<BugTest />} />
      </Routes>
      <BugFooter />
    </>
  );
}

export default App;
