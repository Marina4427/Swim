import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Main from "./pages/Main";
import "./styles/app.css";
import CoursePage from "./pages/Classes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/course/:id" element= { <CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
