import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// Pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
// Components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
