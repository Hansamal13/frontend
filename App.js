import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Add 'Route' here
import Home from './Components/Home/Home';
import AddUser from './Components/AddUser/AddUser';
import Users from './Components/Users/Users';
import Workshop from './Components/Workshop/Workshop';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import Catalog1 from './Components/Catalog1/Catalog1';
import PDF from './Components/PDF/PDF';
import WorkshopForm from './Components/WorkshopForm/WorkshopForm';
import WorkshopList from './Components/WorkshopList/WorkshopList';
import WorkshopDetails from './Components/WorkshopDetails/WorkshopDetails';

function App() {
  
  return (
    
    <Router> {/* ✅ Wrap everything inside <Router> */}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UpdateUser />} />
        <Route path="/catalog1" element={<Catalog1 />} />
        <Route path="/pdf" element={<PDF />} />
        <Route path="/workshopform" element={<WorkshopForm />} />
        <Route path="/workshoplist" element={<WorkshopList />} />
        <Route path="/workshopform/:id" element={<WorkshopForm />} />
        <Route path="/workshopdetails" element={<WorkshopDetails />} />
  
      </Routes>
  
    </Router>
  );
}

export default App;
