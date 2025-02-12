import { FaUser, FaStore, FaDollarSign } from "react-icons/fa";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Navbar = () => {
  return (
    <div className="bg-pink-600 p-4 flex justify-between items-center text-white rounded-lg mb-6">
      <h1 className="text-2xl font-bold">STA Task</h1>
      <div className="flex items-center">
        <span className="mr-2">Admin Marie</span>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img src="/path/to/your/image.jpg" alt="Admin" className="w-8 h-8 rounded-full" />
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
            <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-pink-600 text-white' : 'text-gray-900'
                      } block px-4 py-2 text-sm`}
                    >
                      Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-pink-600 text-white' : 'text-gray-900'
                      } block px-4 py-2 text-sm`}
                    >
                      <a href="/setting">Settings</a>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-pink-600 text-white' : 'text-gray-900'
                      } block px-4 py-2 text-sm`}
                    >
                      Logout
                    </button>
                  )}
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
