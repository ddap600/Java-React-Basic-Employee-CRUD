import "./App.css";
import "./HelloWorld.jsx";
import ListEmployee from "./components/ListEmployee.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Employee from "./components/Employee.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employee" element={<ListEmployee />} />
          <Route path="/add-employee" element={<Employee />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
