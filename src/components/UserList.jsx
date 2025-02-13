import { useState } from 'react';
import action from '../assets/action.png';
import { Dialog } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';

const UserTable = () => {
    const [users, setUsers] = useState([
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://via.placeholder.com/32', // Replace with actual image URLs
            dob: '17/02/1994', // Example Date of Birth
            gender: 'Male', // Example Gender
        },
        {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://via.placeholder.com/32', // Replace with actual image URLs
            dob: '22/08/1988',
            gender: 'Female',
        },
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://via.placeholder.com/32', // Replace with actual image URLs
            dob: '17/02/1994', // Example Date of Birth
            gender: 'Male', // Example Gender
        },
        {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://via.placeholder.com/32', // Replace with actual image URLs
            dob: '22/08/1988',
            gender: 'Female',
        },
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://via.placeholder.com/32', // Replace with actual image URLs
            dob: '17/02/1994', // Example Date of Birth
            gender: 'Male', // Example Gender
        },
        {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://via.placeholder.com/32', // Replace with actual image URLs
            dob: '22/08/1988',
            gender: 'Female',
        },
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://via.placeholder.com/32', // Replace with actual image URLs
            dob: '17/02/1994', // Example Date of Birth
            gender: 'Male', // Example Gender
        },
        {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://via.placeholder.com/32', // Replace with actual image URLs
            dob: '22/08/1988',
            gender: 'Female',
        },
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://via.placeholder.com/32', // Replace with actual image URLs
            dob: '17/02/1994', // Example Date of Birth
            gender: 'Male', // Example Gender
        },
        {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://via.placeholder.com/32', // Replace with actual image URLs
            dob: '22/08/1988',
            gender: 'Female',
        },
        // ... more users
    ]);

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

    // Define the fields you want to display dynamically
    const userFields = [
        { label: 'Name', value: selectedUser?.name },
        { label: 'Email', value: selectedUser?.email },
        { label: 'Address', value: selectedUser?.location },
        { label: 'Contact No', value: selectedUser?.contact },
        { label: 'Date of Birth', value: selectedUser?.dob || 'N/A' },
        { label: 'Gender', value: selectedUser?.gender || 'N/A' }
    ];

    return (
        <div className="mx-auto p-4 border-t-4 border-pink-400 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">All user details</h2>
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
                    {users.map((user, index) => (
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
                                <img src={action} alt="action" onClick={() => openModal(user)} className="cursor-pointer" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal Dialog */}
            <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-md shadow-lg relative w-96">
        <AiOutlineClose className="absolute top-2 right-2 text-gray-600 cursor-pointer" size={24} onClick={closeModal} />
        {selectedUser && (
            <div className="flex flex-col">
                {/* Profile Section - Centering Avatar and Name */}
                <div className="flex flex-col items-center mb-4 text-center">
                    <img src={selectedUser.image} alt="Avatar" className="rounded-full h-16 w-16" />
                    <div>
                        <h2 className="text-xl font-bold">{selectedUser.name}</h2>
                    </div>
                </div>

                {/* Loop through the fields dynamically */}
                <div className="grid gap-4">
                    {userFields.map((field, index) => (
                        <div key={index}>
                            <p className="font-medium">{field.label}</p>
                            <p className="text-xs">{field.value}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4">
                    <a href="#" className="text-pink-500 hover:underline">More</a>
                </div>
            </div>
        )}
    </div>
</Dialog>

        </div>
    );
};

export default UserTable;