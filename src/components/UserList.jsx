import React, { useState } from 'react';
import action from '../assets/action.png';

const UserTable = () => {
    const [users, setUsers] = useState([
        {
          id: '#1239',
          name: 'Mr. Mahmud',
          email: 'm101@gmail.ru',
          contact: '(+33) 70 05 56 27',
          location: 'Corona, Michigan',
          image: 'https://via.placeholder.com/32',
        },
        {
          id: '#1238',
          name: 'Lily',
          email: 'xterris@gmail.com',
          contact: '(+33) 70 05 58 27',
          location: 'Great Falls, Maryland',
          image: 'https://via.placeholder.com/32',
        },
        {
          id: '#1237',
          name: 'Kathry',
          email: 'imabela@gmail.com',
          contact: '(+33) 70 05 55 27',
          location: 'Syracuse, Connecticut',
          image: 'https://via.placeholder.com/32',
        },
        {
          id: '#1236',
          name: 'Priscilia',
          email: 'codence@gmail.com',
          contact: '(+33) 70 05 56 27',
          location: 'Lafayette, California',
          image: 'https://via.placeholder.com/32',
        },
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://via.placeholder.com/32',
          },
          {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://via.placeholder.com/32',
          },
          {
            id: '#1237',
            name: 'Kathry',
            email: 'imabela@gmail.com',
            contact: '(+33) 70 05 55 27',
            location: 'Syracuse, Connecticut',
            image: 'https://via.placeholder.com/32',
          },
          {
            id: '#1236',
            name: 'Priscilia',
            email: 'codence@gmail.com',
            contact: '(+33) 70 05 56 27',
            location: 'Lafayette, California',
            image: 'https://via.placeholder.com/32',
          },
          {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://via.placeholder.com/32',
          },
          {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://via.placeholder.com/32',
          },
          {
            id: '#1237',
            name: 'Kathry',
            email: 'imabela@gmail.com',
            contact: '(+33) 70 05 55 27',
            location: 'Syracuse, Connecticut',
            image: 'https://via.placeholder.com/32',
          },
          {
            id: '#1236',
            name: 'Priscilia',
            email: 'codence@gmail.com',
            contact: '(+33) 70 05 56 27',
            location: 'Lafayette, California',
            image: 'https://via.placeholder.com/32',
          },
    ]);


    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    const filteredUsers = users.filter((user) =>
        Object.values(user).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="mx-auto p-4 border-t-4 border-pink-400 bg-white rounded-md shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">All user details</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>
            <table className="w-full border-collapse text-sm">
                <thead>
                    <tr className="bg-[#FEF1E6] text-left">
                        <th className="px-4 py-2">S.no</th>
                        <th className="px-4 py-2">User</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Contact</th>
                        <th className="px-4 py-2">Location</th>
                        <th className="px-4 py-2 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="px-4 py-2">{user.id}</td>
                            <td className="px-4 py-2 flex items-center">
                                <img src={user.image} alt="Avatar" className="rounded-full h-8 w-8 object-cover mr-2" />
                                {user.name}
                            </td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">{user.contact}</td>
                            <td className="px-4 py-2">{user.location}</td>
                            <td className="px-4 text-center">
                                <img src={action} alt="action" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        {/* Pagination with the specified design */}
        <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                    Showing {indexOfFirstUser + 1}-{Math.min(indexOfLastUser, filteredUsers.length)} out of {filteredUsers.length}
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 text-gray-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-3 py-1 rounded-md ${
                                currentPage === i + 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 text-gray-700"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* End of Pagination */}
        </div>
    );
};

export default UserTable;