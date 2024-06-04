import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import SchoolPage from "./pages/School";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/school" element={<SchoolPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
