import React from 'react';
import SignUp from './Component/SignUp/SignUp';
import { Routes, Route } from 'react-router-dom';
import Customersign from './Component/Customersign/csign';
import User from "./Component/UserDetails/User";
import UpdateUser from './Component/UpdateUser/UpdateUser'; // Import the correct component
import Alllogin from './Component/Alllogin/Alllogin';
import UserDetails from './Component/UserDetails/User';
import UserProfile from './Component/Profile/UserProfile';
import ProfilePage from './Component/Profile/ProfilePage';

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          {/*<Route path="/" element={<SignUp/>} />*/}
          <Route path="/" element={<SignUp/>} />
          <Route path="/signupPage" element={<SignUp/>} />
          <Route path="/adduser" element={<Customersign />} />
          <Route path="/userdetails" element={<User />} />
          <Route path="/UpdateUser/:id" element={<UpdateUser />} />  {/* Corrected to use UpdateUser */}
          <Route path="/Alllogin" element={<Alllogin />} />
          <Route path="/login" element={<UserDetails />} />
          <Route path="/Component/Profile/:id" element={<UserProfile />} />
          <Route path="/profile" element={<ProfilePage />} />
          
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
