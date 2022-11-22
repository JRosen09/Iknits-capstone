import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main_Content from "./components/main_content/Main_Content";
import NavBar from "./components/navbar/NavBar";
import Auth from "./components/auth/Auth";
import Patterns from "./components/patterns/Patterns";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" index element={<Main_Content />} />
        <Route path="auth" element={<Auth />} />
        <Route path="patterns" element={<Patterns />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
