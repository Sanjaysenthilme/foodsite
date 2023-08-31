import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./MainPage/Mainpage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
