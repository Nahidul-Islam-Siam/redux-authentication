import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { FaUser, FaStore, FaDollarSign } from "react-icons/fa";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  const userData = [
    { name: 'Jan', appUser: 2000, active: 1500 },
    { name: 'Feb', appUser: 3000, active: 2200 },
    { name: 'Mar', appUser: 2500, active: 1800 },
    { name: 'Apr', appUser: 4000, active: 3500 },
    { name: 'May', appUser: 5000, active: 4500 },
    { name: 'Jun', appUser: 3500, active: 3000 },
    { name: 'Jul', appUser: 2800, active: 2300 },
    { name: 'Aug', appUser: 4200, active: 3900 },
    { name: 'Sep', appUser: 3900, active: 3700 },
    { name: 'Oct', appUser: 4100, active: 4000 },
    { name: 'Nov', appUser: 4300, active: 4200 },
    { name: 'Dec', appUser: 6000, active: 5500 }
  ];

  const earningsData = [
    { name: 'Jan', earnings: 10000 },
    { name: 'Feb', earnings: 20000 },
    { name: 'Mar', earnings: 30000 },
    { name: 'Apr', earnings: 50000 },
    { name: 'May', earnings: 40000 },
    { name: 'Jun', earnings: 35000 },
    { name: 'Jul', earnings: 45000 },
    { name: 'Aug', earnings: 50000 },
    { name: 'Sep', earnings: 55000 },
    { name: 'Oct', earnings: 60000 },
    { name: 'Nov', earnings: 65000 },
    { name: 'Dec', earnings: 80000 }
  ];

  const feedbackData = [
    { id: "#1239", user: "Abdul", provider: "Mr. Jone", review: "⭐️⭐️⭐️⭐️⭐️" },
    { id: "#1238", user: "Basar", provider: "Mr. Dibala", review: "⭐️⭐️⭐️⭐️⭐️" },
    { id: "#1237", user: "Habiba", provider: "Paris Hairs", review: "⭐️⭐️⭐️⭐️⭐️" },
    { id: "#1236", user: "Basar", provider: "Alex Selun", review: "⭐️⭐️⭐️⭐️⭐️" },
    { id: "#1234", user: "Habiba", provider: "Yolanda", review: "⭐️⭐️⭐️⭐️⭐️" }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* <div className="bg-pink-600 p-4 flex justify-between items-center text-white rounded-lg mb-6">
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
                      <a href="/Setting">Settings</a>
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
      </div> */}
      {/* <Navbar/> */}

      {/* Stats Cards - Responsive Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 text-center bg-white shadow rounded-lg">
          <FaUser className="text-3xl mx-auto mb-2 text-pink-600" />
          <h2 className="text-xl font-semibold">Total User</h2>
          <p className="text-2xl font-bold text-pink-600">20.10K</p>
        </div>
        <div className="p-4 text-center bg-white shadow rounded-lg">
          <FaStore className="text-3xl mx-auto mb-2 text-pink-600" />
          <h2 className="text-xl font-semibold">Total Outlet</h2>
          <p className="text-2xl font-bold text-pink-600">920</p>
        </div>
        <div className="p-4 text-center bg-white shadow rounded-lg">
          <FaDollarSign className="text-3xl mx-auto mb-2 text-pink-600" />
          <h2 className="text-xl font-semibold">Total Earning</h2>
          <p className="text-2xl font-bold text-pink-600">150.10K</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-4">Total Users Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="appUser" fill="#ff6384" />
              <Bar dataKey="active" fill="#4caf50" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-4">Total Earning Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="earnings" stroke="#ff6384" fill="#ffb3c6" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Charts and Feedback */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Total Outlet Statistics */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-4">Total Outlet Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="active" stroke="#4caf50" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Feedback Table */}
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold mb-4">Feedbacks</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">S.ID</th>
                <th className="p-2">User</th>
                <th className="p-2">Provider</th>
                <th className="p-2">Review</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((feedback, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 text-center">{feedback.id}</td>
                  <td className="p-2 text-center">{feedback.user}</td>
                  <td className="p-2 text-center">{feedback.provider}</td>
                  <td className="p-2 text-center">{feedback.review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
