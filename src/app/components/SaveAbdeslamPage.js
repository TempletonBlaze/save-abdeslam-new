"use client"

import React, { useState } from 'react';
import { Heart, Youtube, Clock, MapPin, Share2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const SaveAbdeslamPage = () => {
 const [activeTab, setActiveTab] = useState('updates');

 const updates = [
  {
    date: 'January 2025',
    content: 'Current condition update: "I am still fighting the disease even though it has taken over me. I have lost a lot of weight and I have a swelling in the heart muscle. I am now living thanks to the medication waiting for a miracle. It is very difficult to collect the amount for the operation even though some friends are trying to help me find a way."',
    type: 'medical'
  },
  {
    date: 'June 2024',
    content: 'Medical diagnosis: Confirmed heart failure requiring LVAD (Left Ventricular Assist Device) surgery. "I can no longer do what I used to do. The only solution I have is to perform a surgical operation called: Left ventricular assist device (LVAD). This operation is very expensive, everything is expensive regarding the heart, tests, medicine, radiology."',
    type: 'medical'
  }
];

 return (
   <div className="max-w-4xl mx-auto p-4 space-y-6">
     {/* Emergency Banner */}
     <div className="bg-red-50 border border-red-200 rounded-lg p-4">
       <h2 className="text-red-700 text-lg font-bold">URGENT MEDICAL APPEAL</h2>
       <p className="text-red-600">
         Abdeslam needs immediate heart surgery to survive. Direct PayPal support helps cover urgent medical needs.
       </p>
     </div>

{/* Social Share Buttons */}
<div className="flex justify-center space-x-4">
    <div className="relative group">
        <a 
            href="https://www.facebook.com"
            onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(`🚨 URGENT ANIMAL RESCUE APPEAL 🚨

Meet Abdeslam, Morocco's guardian angel for stray animals. For a decade, he has:
- Fed thousands of strays daily
- Provided emergency medical care
- Found homes for countless animals
- Changed his entire community's approach to animal welfare

Now he needs urgent heart surgery to survive. Without a Left Ventricular Assist Device (LVAD), he won't be able to continue his life-saving work.

The surgery costs $200,000. Direct PayPal support: paypal.me/petsareangels1

Medical Documentation: https://www.youtube.com/channel/UC1pluf_CNNxluAHlggChSgA/community?lb=UgkxmYcDB6B68dhFhBpTzDDfE7_prQj5G5m0

YouTube Channel: https://www.youtube.com/@Pets_are_angels`);
                window.open('https://www.facebook.com', '_blank');
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
            <Facebook className="w-5 h-5" />
            <span>Share</span>
        </a>
        <div className="absolute hidden group-hover:block -top-10 left-1/2 transform -translate
-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
            Copies formatted text and opens Facebook
        </div>
    </div>

    <div className="relative group">
    <a 
        href="https://www.linkedin.com"
        onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText(`URGENT: Help Save Morocco's Guardian Angel of Stray Animals

Abdeslam needs life-saving heart surgery ($200,000) to continue his decade-long mission. He has:
- Saved thousands of stray animals
- Created sustainable welfare programs
- Transformed local veterinary practices
- Built a community of 230K+ supporters

Support via PayPal: paypal.me/petsareangels1

Learn more: youtube.com/@Pets_are_angels

#SaveAbdeslam #AnimalWelfare #Morocco`);
            window.open('https://www.linkedin.com', '_blank');
        }}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
    >
        <Linkedin className="w-5 h-5" />
        <span>Share</span>
    </a>
    <div className="absolute hidden group-hover:block -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
        Copies formatted text and opens LinkedIn
    </div>
</div>
    <a 
        href="https://twitter.com/intent/tweet?text=Urgent: Abdeslam, who has saved thousands of Morocco's stray animals, needs life-saving heart surgery. Please help! Donate via PayPal: paypal.me/petsareangels1 Details: https://www.youtube.com/@Pets_are_angels"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
    >
        <Twitter className="w-5 h-5" />
        <span>Tweet</span>
    </a>

    <a 
        href="https://www.youtube.com/@Pets_are_angels/featured"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
    >
        <Youtube className="w-5 h-5" />
        <span>Visit Channel</span>
    </a>
</div>

     {/* Main Content */}
     <div className="border rounded-lg shadow-lg overflow-hidden">
       <div className="bg-blue-50 p-4 rounded-t-lg">
         <h1 className="text-2xl text-center text-blue-800">Save Morocco's Guardian Angel of Stray Animals</h1>
       </div>
       
       <div className="p-6 space-y-6">
         {/* Quick Info and Donation Box */}
         <div className="grid md:grid-cols-2 gap-6">
           {/* Left Column - Quick Info */}
           <div className="space-y-4">
             <div className="flex items-start space-x-3">
               <Heart className="w-6 h-6 text-red-500 mt-1" />
               <div>
                 <h3 className="font-semibold text-gray-900">Urgent Need</h3>
                 <p className="text-gray-600">LVAD Heart Surgery Required</p>
                 <p className="text-gray-600">Cost: $200,000</p>
               </div>
             </div>
             
             <div className="flex items-start space-x-3">
               <Youtube className="w-6 h-6 text-red-500 mt-1" />
               <div>
                 <h3 className="font-semibold text-gray-900">Verified Impact</h3>
                 <p className="text-gray-600">29M+ Views</p>
                 <p className="text-gray-600">230K+ Subscribers</p>
               </div>
             </div>

             <div className="flex items-start space-x-3">
               <Clock className="w-6 h-6 text-red-500 mt-1" />
               <div>
                 <h3 className="font-semibold text-gray-900">Time Critical</h3>
                 <p className="text-gray-600">Condition deteriorating</p>
                 <p className="text-gray-600">Immediate support needed</p>
               </div>
             </div>
           </div>

           {/* Right Column - Donation Box */}
           <div className="bg-blue-50 p-6 rounded-lg">
             <h3 className="text-xl font-bold text-blue-800 mb-4">Support Abdeslam's Medical Care</h3>
             <div className="space-y-4">
               <p className="text-gray-700">Direct PayPal Support:</p>
               <div className="bg-white p-4 rounded-lg border border-blue-200">
    <a 
        href="https://paypal.me/petsareangels1?country.x=MA&locale.x=en_US" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-mono text-blue-800 hover:underline"
    >
        paypal.me/petsareangels1
    </a>
</div>
               <p className="text-sm text-gray-600">Your support helps cover:</p>
               <ul className="list-disc list-inside text-sm text-gray-600">
                 <li>Daily heart medications</li>
                 <li>Medical tests</li>
                 <li>Hospital visits</li>
                 <li>Transportation to medical facilities</li>
               </ul>
             </div>
           </div>
         </div>

         {/* Tabs Navigation */}
         <div className="border-b border-gray-200">
           <nav className="flex space-x-4">
             <button
               onClick={() => setActiveTab('updates')}
               className={`px-4 py-2 ${activeTab === 'updates' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
             >
               Updates
             </button>
             <button
               onClick={() => setActiveTab('medical')}
               className={`px-4 py-2 ${activeTab === 'medical' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
             >
               Medical Details
             </button>
             <button
               onClick={() => setActiveTab('impact')}
               className={`px-4 py-2 ${activeTab === 'impact' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
             >
               Impact
             </button>
           </nav>
         </div>

         {/* Tab Content */}
         <div className="mt-6">
           {activeTab === 'updates' && (
             <div className="space-y-4">
               <h3 className="text-xl font-bold text-gray-900">Latest Updates</h3>
               {updates.map((update, index) => (
                 <div key={index} className="p-4 border rounded-lg shadow">
                   <p className="text-sm text-gray-500">{update.date}</p>
                   <p className="text-gray-700 mt-2">{update.content}</p>
                 </div>
               ))}
             </div>
           )}

           {activeTab === 'medical' && (
             <div className="space-y-4">
               <h3 className="text-xl font-bold text-gray-900">Medical Information</h3>
               <div className="p-4 border rounded-lg shadow">
    <h4 className="font-semibold text-gray-800">Current Condition</h4>
    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
        <li>Diagnosed with heart failure</li>
        <li>Experiencing severe weight loss</li>
        <li>Swelling in heart muscle</li>
        <li>Dependent on medication for survival</li>
        <li>Unable to continue normal activities</li>
        <li>Requires immediate LVAD surgery</li>
    </ul>
</div>
               <div className="p-4 border rounded-lg shadow">
                 <h4 className="font-semibold text-gray-800">Treatment Plan</h4>
                 <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                   <li>LVAD Surgery - $200,000</li>
                   <li>Ongoing medication and care</li>
                   <li>Regular medical monitoring</li>
                   <li>Post-operative rehabilitation</li>
                 </ul>
               </div>
               <div className="p-4 border rounded-lg shadow mt-4">
    <h4 className="font-semibold text-gray-800">Medical Documentation</h4>
    <p className="text-gray-600 mt-2">
        Recent medical updates and documentation:
    </p>
    <div className="space-y-4 mt-4">
        <a 
            href="https://www.youtube.com/channel/UC1pluf_CNNxluAHlggChSgA/community?lb=UgkxmYcDB6B68dhFhBpTzDDfE7_prQj5G5m0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block"
        >
            ➤ Latest Health Update (January 2025) - Current Condition
        </a>
        <a 
            href="https://www.youtube.com/channel/UC1pluf_CNNxluAHlggChSgA/community?lb=UgkxjEyIOmULTZ4Pw_sLa9tSTaplppzzaHjT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block"
        >
            ➤ Medical Documentation - Radiography Scans and Heart Failure Diagnosis
        </a>
    </div>
</div>
             </div>
           )}

           {activeTab === 'impact' && (
             <div className="space-y-4">
               <h3 className="text-xl font-bold text-gray-900">A Decade of Impact</h3>
               <div className="grid md:grid-cols-3 gap-4">
                 <div className="p-4 border rounded-lg shadow">
                   <h4 className="font-semibold text-gray-800">Animal Rescue</h4>
                   <ul className="list-disc list-inside mt-2 text-gray-600">
                     <li>Thousands of animals saved</li>
                     <li>Daily feeding programs</li>
                     <li>Emergency medical care</li>
                   </ul>
                 </div>
                 <div className="p-4 border rounded-lg shadow">
                   <h4 className="font-semibold text-gray-800">Community Change</h4>
                   <ul className="list-disc list-inside mt-2 text-gray-600">
                     <li>Local vet practices improved</li>
                     <li>Business involvement</li>
                     <li>Educational impact</li>
                   </ul>
                 </div>
                 <div className="p-4 border rounded-lg shadow">
                   <h4 className="font-semibold text-gray-800">Sustainable Solutions</h4>
                   <ul className="list-disc list-inside mt-2 text-gray-600">
                     <li>Farm placement program</li>
                     <li>Community support network</li>
                     <li>Long-term care systems</li>
                   </ul>
                 </div>
               </div>
             </div>
           )}
         </div>

         {/* Verification Links */}
         <div className="border-t pt-6">
           <h3 className="text-lg font-semibold text-gray-900 mb-3">Verify Abdeslam's Work</h3>
           <div className="space-y-2">
             <div className="space-y-2">
    <a 
        href="https://www.youtube.com/@Pets_are_angels/featured" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline block"
    >
        Pets are Angels YouTube Channel
    </a>
    <a 
        href="https://www.youtube.com/@Kittens_puppies" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline block"
    >
        Kittens and Puppies are a Life YouTube Channel
    </a>
</div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default SaveAbdeslamPage;