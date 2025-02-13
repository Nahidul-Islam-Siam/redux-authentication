import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useNavigate, useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";


import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


// ✅ Profile Header Component (Shows User Info)
const ProfileHeader = ({ name }) => (
  <div className="bg-pink-500 p-6 rounded-lg text-white text-center">
    <img
      src="https://via.placeholder.com/80"
      alt="Profile"
      className="w-20 h-20 rounded-full mx-auto border-4 border-white"
    />
    <h2 className="text-xl font-semibold mt-2">{name}</h2>
    <p>Admin</p>
  </div>
);
ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

// ✅ Edit Profile Tab Content
const EditProfile = ({ name, setName, contact, setContact }) => (
  <div>
    <h3 className="text-lg font-semibold text-center">Edit Your Profile</h3>
    <div className="p-4">
      <label className="block text-gray-700">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mt-1"
        placeholder="Enter your name"
      />
      <label className="block text-gray-700 mt-4">Contact No</label>
      <input
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="w-full p-2 border rounded mt-1"
        placeholder="Enter contact number"
      />
      <button className="w-full bg-pink-500 text-white p-2 rounded mt-4">
        Save & Change
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

// ✅ Change Password Tab Content
const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-center mb-4">Change Password</h3>

      {/* Current Password */}
      <div className="mb-4 relative">
        <label className="block text-gray-700 mb-1">Current Password</label>
        <div className="relative">
          <input
            type={showPassword.current ? "password" : "text"}
            className="w-full p-3 border rounded-lg pr-10"
            placeholder="Enter current password"
          />
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500"
            onClick={() => togglePasswordVisibility("current")}
          >
            {showPassword.current ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="mb-4 relative">
        <label className="block text-gray-700 mb-1">New Password</label>
        <div className="relative">
          <input
            type={showPassword.new ? "password" : "text"}
            className="w-full p-3 border rounded-lg pr-10"
            placeholder="Enter new password"
          />
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500"
            onClick={() => togglePasswordVisibility("new")}
          >
           {showPassword.current ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="mb-4 relative">
        <label className="block text-gray-700 mb-1">Confirm Password</label>
        <div className="relative">
          <input
            type={showPassword.confirm ? "password" : "text"}
            className="w-full p-3 border rounded-lg pr-10"
            placeholder="Confirm new password"
          />
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500"
            onClick={() => togglePasswordVisibility("confirm")}
          >
              {showPassword.current ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </button>
        </div>
      </div>

      {/* Update Button */}
      <button className="w-full bg-pink-500 text-white p-3 rounded-lg mt-2 hover:bg-pink-600 transition">
        Update Password
      </button>
    </div>
  );
};

// ✅ User List Tab Content
const UserList = () => (
  <div>
    <h3 className="text-lg font-semibold text-center">User List</h3>
    <p className="text-gray-600 text-center p-4">No users available.</p>
  </div>
);

// ✅ Main Profile Settings Component
const ProfileSettings = () => {
  const navigate = useNavigate();
  const { tab } = useParams();

  // List of allowed tab paths
  const tabPaths = ["edit-profile", "change-password", "user-list"];

  // State for profile inputs
  const [name, setName] = useState("John Doe");
  const [contact, setContact] = useState("123-456-7890");

  // Redirect to default tab if invalid or missing tab
  useEffect(() => {
    if (!tab || !tabPaths.includes(tab)) {
      navigate("/setting/edit-profile", { replace: true });
    }
  }, [tab, navigate]);

  // Find the active tab index
  const tabIndex = tabPaths.indexOf(tab);
  const [selectedIndex, setSelectedIndex] = useState(tabIndex !== -1 ? tabIndex : 0);

  // Update URL when switching tabs
  const handleTabChange = (index) => {
    setSelectedIndex(index);
    navigate(`/setting/${tabPaths[index]}`, { replace: true });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* ✅ Profile Header */}
      <ProfileHeader name={name} />

      {/* ✅ Tab Navigation */}
      <Tabs selectedIndex={selectedIndex} onSelect={handleTabChange}>
        <TabList className="flex justify-center  space-x-4 p-2">
          <Tab className="cursor-pointer p-2" selectedClassName="text-pink-500 border-b-2 border-pink-500 font-semibold">
            Edit Profile
          </Tab>
          <Tab className="cursor-pointer p-2" selectedClassName="text-pink-500 border-b-2 border-pink-500 font-semibold">
            Change Password
          </Tab>
          <Tab className="cursor-pointer p-2" selectedClassName="text-pink-500 border-b-2 border-pink-500 font-semibold">
            User List
          </Tab>
        </TabList>

        {/* ✅ Tab Content */}
        <TabPanel>
          <EditProfile name={name} setName={setName} contact={contact} setContact={setContact} />
        </TabPanel>
        <TabPanel>
          <ChangePassword />
        </TabPanel>
        <TabPanel>
          <UserList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProfileSettings;
