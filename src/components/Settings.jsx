import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useNavigate, useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";





const ProfileHeader = ({ name }) => (
  <div className="bg-pink-500 w-full flex flex-col items-center p-6 rounded-lg text-white mb-6">
    <div className="flex items-center gap-4">
      <img
        src="https://via.placeholder.com/80"
        alt="Profile"
        className="w-16 h-16 rounded-full border-4 border-white"
      />
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <span className="text-sm">Admin</span>
      </div>
    </div>
  </div>
);

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
};



const EditProfile = ({ name, setName, contact, setContact }) => (
  <div className="max-w-md mx-auto">
    <h3 className="text-lg font-semibold mb-4">Edit Your Profile</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Contact No</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter contact number"
        />
      </div>
      <button className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">
        Save Changes
      </button>
    </div>
  </div>
);
EditProfile.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  contact: PropTypes.string.isRequired,
  setContact: PropTypes.func.isRequired,
};


const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (passwords.newPassword.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);
    try {
     
      setSuccess('Password updated successfully');
   
      setPasswords({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">Change Password</h3>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}
      <div className="space-y-4">
   
        <div>
          <label className="block text-gray-700 mb-1">Current Password</label>
          <div className="relative">
            <input
              type={showPassword.current ? "text" : "password"}
              className="w-full p-2 border rounded pr-10"
              placeholder="Enter current password"
              value={passwords.currentPassword}
              onChange={(e) => setPasswords(prev => ({...prev, currentPassword: e.target.value}))}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => togglePasswordVisibility("current")}
            >
              {showPassword.current ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
          </div>
        </div>

   
        <div>
          <label className="block text-gray-700 mb-1">New Password</label>
          <div className="relative">
            <input
              type={showPassword.new ? "text" : "password"}
              className="w-full p-2 border rounded pr-10"
              placeholder="Enter new password"
              value={passwords.newPassword}
              onChange={(e) => setPasswords(prev => ({...prev, newPassword: e.target.value}))}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => togglePasswordVisibility("new")}
            >
              {showPassword.new ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
          </div>
        </div>

  
        <div>
          <label className="block text-gray-700 mb-1">Confirm Password</label>
          <div className="relative">
            <input
              type={showPassword.confirm ? "text" : "password"}
              className="w-full p-2 border rounded pr-10"
              placeholder="Confirm new password"
              value={passwords.confirmPassword}
              onChange={(e) => setPasswords(prev => ({...prev, confirmPassword: e.target.value}))}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => togglePasswordVisibility("confirm")}
            >
              {showPassword.confirm ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Password'}
        </button>
      </div>
    </form>
  );
};


const UserList = () => (
  <div className="max-w-md mx-auto">
    <h3 className="text-lg font-semibold mb-4">User List</h3>
    <div className="text-center">
      <p className="text-gray-600 mb-4">No users available.</p>
     
    </div>
  </div>
);



const ProfileSettings = () => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    if (tab === 'edit-profile') {
      setSelectedTab(1);
    }
  }, [tab]);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
    navigate(index === 1 ? '/setting/edit-profile' : '/setting');
  };

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
        <div className="p-6">
          <ProfileHeader name="John Doe" />
          
          <Tabs 
            selectedIndex={selectedTab} 
            onSelect={handleTabSelect}
            className="min-h-[400px]"
          >
            <TabList className="flex text-center mb-6 justify-center">
              <Tab 
                className="px-4 py-2 cursor-pointer focus:outline-none"
                selectedClassName="text-pink-500 border-b-2 border-pink-500 font-semibold"
              >
                Edit Profile
              </Tab>
              <Tab 
                className="px-4 py-2 cursor-pointer focus:outline-none"
                selectedClassName="text-pink-500 border-b-2 border-pink-500 font-semibold"
              >
                Change Password
              </Tab>
              <Tab 
                className="px-4 py-2 cursor-pointer focus:outline-none"
                selectedClassName="text-pink-500 border-b-2 border-pink-500 font-semibold"
              >
              <a 
        href="/user-details" 
        className=""
      >
      User List
      </a>
              </Tab>
            </TabList>

            <div className="p-4">
              <TabPanel>
                <EditProfile 
                  name="John Doe" 
                  setName={() => {}} 
                  contact="123-456-7890" 
                  setContact={() => {}} 
                />
              </TabPanel>
              <TabPanel>
                <ChangePassword />
              </TabPanel>
              <TabPanel>
                <UserList />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
