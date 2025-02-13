import { FaUser, FaStore, FaDollarSign } from "react-icons/fa";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { userProfile, currentUser } = useSelector((state) => state.user);
  const userName = userProfile?.name || currentUser?.name || "User";

  return (
    <div className="bg-pink-600 p-4 flex justify-between items-center text-white rounded-lg mb-6">
      <h1 className="text-2xl font-bold">STA Task</h1>
      <div className="flex items-center">
        <span className="mr-2">{userName}</span>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img 
                src={userProfile?.avatar || "https://via.placeholder.com/40"} 
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
                <Menu.Item>
                  <Link to="/setting" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <button 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => {/* Add logout handler */}}
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
