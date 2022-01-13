import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM Router is used to define specific routes
    // Routes is used to allow pages to load independently not simultaneously
    // Route is then used to allow for a specific page to be created
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={((<Header />), (<p>BOOOM</p>))} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
