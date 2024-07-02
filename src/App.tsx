import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import SchoolPage from "./pages/School";
import { ApolloProvider } from "@apollo/client";
import ApolloClientInstance from "./services/graphqlClient";

function App() {
  return (
    <ApolloProvider client={ApolloClientInstance}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/school" element={<SchoolPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
