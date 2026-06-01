import './App.css'
import { Routes, Route } from "react-router-dom";
import AppLayout from '@/layout/AppLayout';
import HomeView from "@/features/HomeView";
import CssFrameworks from "@/features/projects/CssFrameworks"
import SemesterProject2 from '@/features/projects/SemesterProject2';
import ProjectExam2 from "@/features/projects/ProjectExam2"

function App() {
  
  return (
   <div>
    <Routes>
      
      <Route path="/" element={<AppLayout/>}>
      <Route index element={<HomeView/>}/>
        <Route path="/projects">
          <Route path="CssFrameworks" element={<CssFrameworks/>}/>
          <Route path="SemesterProject2" element={<SemesterProject2/>}/>
          <Route path="ProjectExam2" element={<ProjectExam2/>}/>
         
        </Route>
      </Route>
      
    </Routes>
    
   </div>
  )
}

export default App