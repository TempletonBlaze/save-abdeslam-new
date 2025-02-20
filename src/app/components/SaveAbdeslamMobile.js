import React, { useState } from 'react';
import { Heart, Youtube, Clock } from 'lucide-react';

const SaveAbdeslamMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      {/* Emergency Banner */}
      <div className="bg-red-50 border-red-200 p-4 rounded-lg">
        <h2 className="text-red-700 text-lg font-bold">URGENT MEDICAL APPEAL</h2>
        <p className="text-red-600">
          Abdeslam needs immediate heart surgery to survive
        </p>
      </div>

      {/* Quick Donate Button */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold">
        Donate Now
      </button>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          <h3 className="font-bold text-lg">$200,000</h3>
          <p className="text-sm text-gray-600">Needed</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <h3 className="font-bold text-lg">29M+</h3>
          <p className="text-sm text-gray-600">Views</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="border-none shadow-lg rounded-lg">
        <div className="p-4 space-y-4">
          {/* Quick Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <p className="text-sm">LVAD Surgery Required</p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-red-500" />
              <p className="text-sm">Time Critical</p>
            </div>
          </div>

          {/* Updates Section */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-bold mb-2">Latest Updates</h3>
            <div className="space-y-2">
              <p className="text-sm">Currently relocated near hospital</p>
              <p className="text-sm">Urgent medical care needed</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-2">
            <a href="#" className="text-blue-600 text-sm hover:underline">YouTube Channel 1</a>
            <a href="#" className="text-blue-600 text-sm hover:underline">YouTube Channel 2</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveAbdeslamMobile;