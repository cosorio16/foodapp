import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./views/Home";
import Checkout from "./views/Checkout";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
