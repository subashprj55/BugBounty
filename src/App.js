import { Route, Routes } from "react-router-dom";
import BugAboutUs from "./Pages/BugAboutUs";
import "./App.css";
import BugHome from "Pages/BugHome";
import Bug404 from "Pages/Bug404";
import BugLogin from "Pages/BugLogin";
import BugSignup from "Pages/BugSignup";
import BugProfile from "Pages/BugProfile";
import BugDashboard from "Pages/BugDashboard";
import BugSubmit from "Pages/BugSubmit";
import BugLeaderBoard from "Pages/BugLeaderboard";
import BugRewards from "Pages/BugRewards";
import BugActiveBounties from "Pages/BugActiveBounties";
import PublicRoute from "Components/PublicRoute";
import PrivateRoute from "Components/PrivateRoute";
import BugBounty from "Pages/BugBounty";
import BugCreate from "Pages/BugCreate";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          index
          element={<PublicRoute restricted={false} component={BugHome} />}
        />
        <Route
          path="login"
          element={<PublicRoute restricted={true} component={BugLogin} />}
        />
        <Route
          path="signup"
          element={<PublicRoute restricted={true} component={BugSignup} />}
        />
        <Route
          path="dashboard"
          element={<PrivateRoute component={BugDashboard} />}
        />
        <Route
          path="bugSubmit/:id"
          element={<PrivateRoute display={"hunter"} component={BugSubmit} />}
        />
        <Route
          path="rewards"
          element={<PrivateRoute display={"hunter"} component={BugRewards} />}
        />
        <Route
          path="profile"
          element={<PrivateRoute component={BugProfile} />}
        />
        <Route
          path="transaction"
          element={<PrivateRoute component={BugAboutUs} />}
        />
        <Route
          path="leaderboard"
          element={<PrivateRoute component={BugLeaderBoard} />}
        />
        <Route
          path="activeBounties"
          element={<PrivateRoute component={BugActiveBounties} />}
        />
        <Route
          path="bounty/:id"
          element={<PrivateRoute component={BugBounty} />}
        />
        <Route
          path="createBounty"
          element={<PrivateRoute display={"client"} component={BugCreate} />}
        />
        <Route path="*" element={<Bug404 />} />
      </Routes>
    </>
  );
}

export default App;
