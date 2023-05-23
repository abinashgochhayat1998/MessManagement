import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/component/home'
import Login from '../src/component/student/login'
import Frm from '../src/component/form';
// import { FiSettings } from 'react-icons/fi';
// import Get from '../src/try/pages/home/Home';
import Sidebar from './component/student/Sidebar';
import Adm from './component/student/Adminform';
import Frms from './component/student/Formsall';
import Messcutrequest from './component/student/Messcutrequest';
import Suggestions from './component/student/Suggestions';
import Messcard from './component/student/Messcard';
import Messenroll from './component/student/Messenroll';
import SDashboard from './component/student/SDashboard';
import Messbill from './component/student/Messbill';
import Suggestionsshow from './component/manager/Suggestionsshow';
import Sidebarmanager from './component/manager/Sidebarmanager';
import Messimages from './component/manager/Messimages';
import Studentlist from './component/manager/Studentlist';
import Profile from './component/student/Profile';
import Adminsidebar from './component/admin/Adminsidebar';
import StudentDetails from './component/admin/StudentDetails';
import MessDetails from './component/admin/MessDetails';

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/form" element={<Frm />}></Route>
        <Route path="/adminform" element={<Adm />}></Route>
        <Route path='/allforms' element={<Frms />}></Route>
        <Route path="/messcutrequest" element={<Messcutrequest />}></Route>
        <Route path="/suggestion" element={<Suggestions />}></Route>
        <Route path="/messcard" element={<Messcard />}></Route>
        <Route path="/enrollmess" element={<Messenroll />}></Route>
        <Route path="/dashboard" element={<SDashboard />}></Route>
        <Route path="/messbill" element={[<Sidebar />, <Messbill />]}></Route>
        <Route path="/showsuggestions" element={<Suggestionsshow />}></Route>
        <Route path="/Sidebarmanager" element={<Sidebarmanager />}></Route>
        <Route path="/messimages" element={<Messimages />}></Route>
        <Route path="/studentlist" element={<Studentlist />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/adminsidebar" element={<Adminsidebar />}></Route>
        <Route path="/studentdetails" element={<StudentDetails />}></Route>
        <Route path="/messdetails" element={<MessDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
