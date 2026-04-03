import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import StudentForm from "./StudentForm";


function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{""}
        <Link to="/StudentForm">StudentForm</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/StudentForm" element={<StudentForm/>}></Route>
      </Routes>
     </div>
  )
}

export default App;
