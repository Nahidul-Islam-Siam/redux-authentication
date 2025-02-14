import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import avatar from "../assets/a1.png"

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Access the data property from the response structure
      const userInfo = parsedUser.data || parsedUser;
      
      setUserData({
        fullName: userInfo.fullName,
        email: userInfo.email,
        phone: userInfo.phone,
        userId: userInfo.userId,
        role: userInfo.role
      });
    }
  }, []);

  console.log('userData:', userData);
  console.log('localStorage user:', localStorage.getItem('user'));

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Clear cookies
    Cookies.remove('auth_token');
    
    // Clear user data state
    setUserData(null);
    
    // Redirect to login
    navigate('/login');
  };

  return (
    <div className="bg-pink-600 p-4 flex justify-between items-center text-white rounded-lg mb-6">
      <h1 className="text-2xl font-bold"> <a href="/dashboard">STA Task</a> </h1>
      <div className="flex items-center">
        <span className="mr-2">Welcome, {userData?.fullName || 'Admin Maria'}</span>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img 
                src={avatar}
                alt="Profile" 
                className="w-8 h-8 rounded-full"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg">
              <div className="py-1">
                {userData?.email && (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-500">
                      {userData.email}
                    </div>
                    <div className="px-4 py-2 text-sm text-gray-500">
                      {userData.phone}
                    </div>
                    <div className="px-4 py-2 text-sm text-gray-500">
                      Role: {userData.role}
                    </div>
                  </>
                )}
                <Menu.Item>
                  <Link to="/setting" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <button 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
