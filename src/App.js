import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Vids from "./components/video_tutorials/Vids";
import Auth from "./components/auth/Auth";
import Patterns from "./components/patterns/Patterns";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="patterns" element={<Patterns />} />
        <Route path="video_tutorials" element={<Vids />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
