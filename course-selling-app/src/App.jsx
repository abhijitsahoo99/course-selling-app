import './App.css'
import Home from './Home';
import Signin from './Signin'
import Signup from './Signup'
import AddCourse from './AddCourse'
import Courses from './Courses'
import UpdateCourse from './UpdateCourse'
import Appbar from './Appbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="home">
           <Router>
             <Appbar />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/courses"} element={<Courses />} />
                    <Route path={"/addcourse"} element={<AddCourse />} />
                    <Route path={"/course/:courseId"} element={<UpdateCourse />} />
                    <Route path={"/signin"} element={<Signin />} />
                    <Route path={"/signup"} element={<Signup />} />
                </Routes>
            </Router>
     </div>
    
  )
}

export default App;