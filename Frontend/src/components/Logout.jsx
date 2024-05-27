import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
      try {
        setAuthUser({
          ...authUser,
          user: null,
        });
        localStorage.removeItem("Users");
        toast.success("Logout successfully");
        setTimeout(() => {
          window.location.reload();
        }, 300);
      } catch (error) {
        toast.error("Error: " + error);
        setTimeout(() => {}, 2000);
      }
    };
  return (
    <button className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-800 duration-300 cursor-pointer"
    onClick={handleLogout}
    >logout</button>
  )
}

export default logout