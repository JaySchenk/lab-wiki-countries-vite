import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <h1>LAB | React WikiCountries</h1>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/CountryDetailsPage/:countryId"
          element={<CountryDetailsPage />}
        />

        <Route path="*" element={<h1>404 Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
