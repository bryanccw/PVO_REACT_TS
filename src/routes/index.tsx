import { Routes, Route } from 'react-router-dom';
// Components
import { Home } from '../pages/Home/Home';
// Auth & Profile
import { Login, ForgotPassword } from '../ui/app-components';
import { Profile } from '../pages/User';
import { AdminHome } from '../pages/Admin/Admin';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/auth/login" element={<Login />} />
    <Route path="/auth/forgetPassword" element={<ForgotPassword />} />
    <Route path="/user/profile" element={<Profile />} />
    <Route path="/admin/*" element={<AdminHome />} />
  </Routes>
);

export default AppRoutes;
