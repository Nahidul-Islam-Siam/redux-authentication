import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser, FaStore, FaDollarSign } from 'react-icons/fa';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useGetUserProfileQuery } from '../../redux/api/user/userApi';
import { setUserProfile } from '../../redux/features/user/userSlice';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

const DashboardStats = ({ icon: Icon, title, value, className }) => (
    <div className="p-4 text-center bg-white shadow rounded-lg">
        <Icon className={`text-3xl mx-auto mb-2 ${className}`} />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className={`text-2xl font-bold ${className}`}>{value}</p>
    </div>
);

DashboardStats.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};

const Dashboard = () => {
    const dispatch = useDispatch();
    const { currentUser, userProfile } = useSelector((state) => state.user);
    const { data: profileData, isLoading } = useGetUserProfileQuery();

    useEffect(() => {
        if (profileData) {
            dispatch(setUserProfile(profileData.data));
        }
    }, [profileData, dispatch]);

    const userData = [
        { name: 'Jan', appUser: 400, active: 240 },
        { name: 'Feb', appUser: 300, active: 139 },
        { name: 'Mar', appUser: 200, active: 980 },
        { name: 'Apr', appUser: 278, active: 390 },
        { name: 'May', appUser: 189, active: 480 },
    ];

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    return (
        <div className="p-6">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome back, {userProfile?.name || currentUser?.name || "User"}!
                </h1>
                <p className="text-gray-600 mt-2">Here&apos;s what&apos;s happening with your account today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <DashboardStats 
                    icon={FaUser} 
                    title="Total Users" 
                    value="20.1K" 
                    className="text-pink-600" 
                />
                <DashboardStats 
                    icon={FaStore} 
                    title="Total Outlets" 
                    value="920" 
                    className="text-pink-600" 
                />
                <DashboardStats 
                    icon={FaDollarSign} 
                    title="Total Earnings" 
                    value="$150.1K" 
                    className="text-pink-600" 
                />
            </div>

            {/* Charts Section */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">User Statistics</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={userData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="appUser" fill="#ff6384" name="App Users" />
                        <Bar dataKey="active" fill="#4caf50" name="Active Users" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard; 