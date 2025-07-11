import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';

const Profile: React.FC = () => {
  return (
    <PageContainer withNavbar className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <img
          src="https://avatars.githubusercontent.com/u/0000000?v=4"
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold text-gray-800">Muhammad Iqbal Ferdiansyah</h1>
        <p className="text-gray-500 mb-4">Web Developer · Bandung, Indonesia</p>
        <div className="text-left text-sm text-gray-600 space-y-2">
          <p><span className="font-medium">Email:</span> miqbalferdiansyah.s@gmail.com</p>
          <p><span className="font-medium">GitHub:</span> github.com/iqbaltech07</p>
          <p><span className="font-medium">LinkedIn:</span> linkedin.com/in/muhammdiqbalfs</p>
        </div>
        <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </PageContainer>
  );
};

export default Profile;
