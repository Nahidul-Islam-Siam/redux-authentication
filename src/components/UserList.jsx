import { useState } from 'react';
import action from '../assets/action.png';
import { Dialog } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { getAvatarUrl } from '../utils/avatarUtils';

const UserTable = () => {
    const [users, setUsers] = useState([
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://ui-avatars.com/api/?name=Mr+Mahmud&background=random',
            dob: '17/02/1994',
            gender: 'Male',
        },
        {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://ui-avatars.com/api/?name=Lily&background=random',
            dob: '22/08/1988',
            gender: 'Female',
        },
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://ui-avatars.com/api/?name=Mr+Mahmud&background=random',
            dob: '17/02/1994',
            gender: 'Male',
        },
        {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://ui-avatars.com/api/?name=Lily&background=random',
            dob: '22/08/1988',
            gender: 'Female',
        },
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://ui-avatars.com/api/?name=Mr+Mahmud&background=random',
            dob: '17/02/1994',
            gender: 'Male',
        },
        {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://ui-avatars.com/api/?name=Lily&background=random',
            dob: '22/08/1988',
            gender: 'Female',
        },
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://ui-avatars.com/api/?name=Mr+Mahmud&background=random',
            dob: '17/02/1994',
            gender: 'Male',
        },
        {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://ui-avatars.com/api/?name=Lily&background=random',
            dob: '22/08/1988',
            gender: 'Female',
        },
        {
            id: '#1239',
            name: 'Mr. Mahmud',
            email: 'm101@gmail.ru',
            contact: '(+33) 70 05 56 27',
            location: 'Corona, Michigan',
            image: 'https://ui-avatars.com/api/?name=Mr+Mahmud&background=random',
            dob: '17/02/1994',
            gender: 'Male',
        },
        {
            id: '#1238',
            name: 'Lily',
            email: 'xterris@gmail.com',
            contact: '(+33) 70 05 58 27',
            location: 'Great Falls, Maryland',
            image: 'https://ui-avatars.com/api/?name=Lily&background=random',
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

    const tableVariants = {
        initial: { opacity: 0 },
        animate: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const rowVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { 
            opacity: 1, 
            x: 0,
            transition: { type: "spring", stiffness: 70 }
        },
        hover: {
            backgroundColor: "#f3f4f6",
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={tableVariants}
            className="mx-auto p-4 border-t-4 border-pink-400 bg-white rounded-md shadow-md"
        >
            <h2 className="text-xl font-bold mb-4">All user details</h2>
            <table className="min-w-full divide-y divide-gray-200">
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
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, index) => (
                        <motion.tr
                            key={user.id}
                            variants={rowVariants}
                            whileHover="hover"
                            className={index % 2 === 0 ? 'bg-gray-50' : ''}
                        >
                            <td className="px-4 py-2">{user.id}</td>
                            <td className="px-4 py-2 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                                        <img 
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                                            alt={`${user.name}'s avatar`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">
                                        {user.name}
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">{user.contact}</td>
                            <td className="px-4 py-2">{user.location}</td>
                            <td className="px-4 text-center">
                                <img src={action} alt="action" onClick={() => openModal(user)} className="cursor-pointer" />
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>

            {/* Modal Dialog */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    >
                        <div className="bg-white p-6 rounded-md shadow-lg relative w-96">
                            <AiOutlineClose className="absolute top-2 right-2 text-gray-600 cursor-pointer" size={24} onClick={closeModal} />
                            {selectedUser && (
                                <div className="flex flex-col">
                                    {/* Profile Section - Centering Avatar and Name */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-24 h-24 rounded-full overflow-hidden">
                                            <img 
                                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedUser.name}`}
                                                alt="User Avatar"
                                                className="w-full h-full object-cover"
                                            />
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
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default UserTable;