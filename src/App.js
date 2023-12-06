import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Dashboard } from "./components/Dashboard";
import { StudentList } from "./components/StundetList";
import { StudentRegistrationForm } from "./components/StudentRegistrationForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import { StudentEditForm } from "./components/StudentEditForm";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/students-list" element={<StudentList/>}></Route>
        <Route path="/student-registration" element={<StudentRegistrationForm/>}></Route>
        <Route path="/edit/roll" element={<StudentEditForm/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
