import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsManagement from "./pages/EventsManagement";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EventsManagement />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
