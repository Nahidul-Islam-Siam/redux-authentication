import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { FaUser, FaStore, FaDollarSign, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Navbar from './Navbar';
import { AiOutlineClose } from 'react-icons/ai';
import a2 from "../assets/a2.png" 
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
    { id: "#1239", user: "Abdul", image: "https://via.placeholder.com/64", provider: "Mr. Jone", review: 4.5, comment: "Great service and friendly provider!" },
    { id: "#1238", user: "Basar", image: "https://via.placeholder.com/64", provider: "Mr. Dibala", review: 5, comment: "Excellent experience!" },
    { id: "#1237", user: "Habiba", image: "https://via.placeholder.com/64", provider: "Paris Hairs", review: 4.8, comment: "Loved the hair treatment." },
    { id: "#1236", user: "Basar", image: "https://via.placeholder.com/64", provider: "Alex Selun", review: 4.7, comment: "Very professional and courteous." },
    { id: "#1234", user: "Habiba", image: "https://via.placeholder.com/64", provider: "Yolanda", review: 4.2, comment: "Good service but room for improvement." },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
   

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

      
        <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="font-semibold mb-4">Feedbacks</h3>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">S.ID</th>
            <th className="p-2">User</th>
            <th className="p-2">Provider</th>
            <th className="p-2">Review</th>
            <th className="p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="p-2 text-center">{feedback.id}</td>
              <td className="p-2 flex items-center gap-2">
                <img src={feedback.image} alt={feedback.user} className="w-8 h-8 rounded-full object-cover" />
                {feedback.user}
              </td>
              <td className="p-2 text-center">{feedback.provider}</td>
              <td className="p-2 flex items-center justify-center gap-1">
                <FaStar className="text-red-500" /> {feedback.review}/5
              </td>
              <td className="p-2 text-center">
                <button onClick={() => openModal(feedback)} className="text-blue-500">

                  <img src={a2} alt="" srcset="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-md shadow-lg relative max-w-lg w-full">
          <AiOutlineClose className="absolute top-2 right-2 text-gray-600 cursor-pointer" size={24} onClick={closeModal} />
          {selectedUser && (
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-pink-600">Feedback Details</h2>
              <div className="flex justify-between items-center mt-4 border-b pb-4">
                <div className="flex items-center gap-3">
                  <img src={selectedUser.image} alt={selectedUser.user} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-pink-600">{selectedUser.user}</p>
                    <p className="text-xs text-gray-600">{selectedUser.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={selectedUser.image} alt={selectedUser.provider} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-pink-600">{selectedUser.provider}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-medium text-gray-700">Rating: <span className="text-pink-600 font-bold">⭐ {selectedUser.review}/5</span></p>
                <p className="mt-2"><span className="font-bold">Comment:</span> {selectedUser.comment}</p>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </div>

      </div>
    </div>
  );
};

export default Dashboard;
