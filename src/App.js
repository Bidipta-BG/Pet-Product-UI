import Home from "./Pages/Home";
// import Test from "./Components/Test";
import Info from "./Pages/Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
