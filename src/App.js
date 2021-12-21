import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  // continued ..... user?
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/write" element={<Write />} />
        <Route  path="/settings" element={<Settings />} />
        <Route  path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
