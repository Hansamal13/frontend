import React from 'react';
import SignUp from './Component/SignUp/SignUp';
import { Routes, Route } from 'react-router-dom';
import Customersign from './Component/Customersign/csign';
import User from "./Component/UserDetails/User";
import UpdateUser from "./Component/UpdateUser/UpdateUser";
import Alllogin from './Component/Alllogin/Alllogin';
import UserDetails from './Component/UserDetails/User';
import UserProfile from './Component/Profile/UserProfile';



function App() {
  return (
    <div>
      
      <React.Fragment>
        <Routes>
          {/*<Route path="/" element={<SignUp/>} />*/}

          <Route path="/" element={<SignUp/>} />
          <Route path="/signupPage" element={<SignUp/>} />
          <Route path="/adduser" element={<Customersign />} />
                                                {/*Component name*/}
          <Route path="/userdetails" element={<User />} />
          <Route path="/UpdateUser/:id" element={<UpdateUser/>} />
          <Route path="/Alllogin" element={<Alllogin/>} />
          <Route path="/login" element={<UserDetails/>} />
          <Route path="/Component/Profile/:id" element={<UserProfile user={userData} />} />


          
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;