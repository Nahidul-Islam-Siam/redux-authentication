


const EditProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">


      {/* Profile Card */}
      <div className="bg-pink-600 p-6 mt-6 rounded-lg text-white text-center w-3/4 max-w-md">
        <img
          src="/path/to/profile.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto border-4 border-white"
        />
        <h2 className="text-2xl font-semibold mt-2">Maria</h2>
        <p>Admin</p>
      </div>

      {/* Edit Profile Section */}
      <div className="mt-6 w-3/4 max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Tabs */}
        <div className="flex justify-between border-b pb-2 mb-4">
          <button className="text-pink-600 font-semibold border-b-2 border-pink-600 pb-2">Edit Profile</button>
          <button className="text-gray-500">Change Password</button>
        </div>

        {/* Form */}
        <h3 className="text-lg font-semibold text-center mb-4">Edit Your Profile</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              defaultValue="Maria"
            />
          </div>
          <div>
            <label className="block text-gray-700">Contact No.</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              defaultValue="+923001234567"
            />
          </div>
          <button className="w-full bg-pink-600 text-white p-2 rounded-lg font-semibold">
            Save & Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
