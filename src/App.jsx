import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./views/Home";
import Checkout from "./views/Checkout";

function App() {
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
