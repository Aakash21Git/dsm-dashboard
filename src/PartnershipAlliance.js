import React from 'react';
import {
  Handshake, FileText, ClipboardCheck, CheckCircle2, Building2, Briefcase, Book,
  Users, Calendar, UserPlus, Award
} from 'lucide-react';

// Helper component for common card structure
const DashboardCard = ({ title, children, className = '' }) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3 border-gray-200">{title}</h3>
    {children}
  </div>
);

// Partnership & Alliance Page Component
const PartnershipAlliance = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 flex items-center">
        <Handshake className="mr-4 text-indigo-700" size={32} /> Partnership & Alliance
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="MOUs">
          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-center"><FileText size={18} className="text-blue-600 mr-2" /> Total MOUs to be signed: <span className="font-semibold ml-1">50</span></li>
            <li className="flex items-center"><ClipboardCheck size={18} className="text-teal-600 mr-2" /> Process Initiation: <span className="font-semibold ml-1">54</span></li>
            <li className="flex items-center"><CheckCircle2 size={18} className="text-orange-500 mr-2" /> Background Verification: <span className="font-semibold ml-1">8</span></li>
            <li className="flex items-center"><Building2 size={18} className="text-purple-600 mr-2" /> Approved by NMDPL: <span className="font-semibold ml-1">12</span></li>
            <li className="flex items-center"><Briefcase size={18} className="text-amber-600 mr-2" /> Approved by Employer: <span className="font-semibold ml-1">13</span></li>
            <li className="flex items-center"><Book size={18} className="text-rose-600 mr-2" /> BOR Received: <span className="font-semibold ml-1">11</span></li>
            <li className="flex items-center"><CheckCircle2 size={18} className="text-cyan-600 mr-2" /> Final Vetting NMDPL: <span className="font-semibold ml-1">9</span></li>
            <li className="flex items-center"><Handshake size={18} className="text-indigo-600 mr-2" /> Signed by NMDPL: <span className="font-semibold ml-1">9</span></li>
          </ul>
        </DashboardCard>

        <DashboardCard title="Job Drive">
          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-center"><Users size={18} className="text-blue-600 mr-2" /> Job Drives Conducted in July: <span className="font-semibold ml-1">2</span></li>
            <li className="flex items-center"><Calendar size={18} className="text-orange-500 mr-2" /> Upcoming Job Drives in July: <span className="font-semibold ml-1">3</span></li>
            <li className="flex items-center"><UserPlus size={18} className="text-teal-600 mr-2" /> Total Registered for Job Drives: <span className="font-semibold ml-1">305</span></li>
            <li className="flex items-center"><Briefcase size={18} className="text-purple-600 mr-2" /> Total Interviewed: <span className="font-semibold ml-1">206</span></li>
            <li className="flex items-center"><CheckCircle2 size={18} className="text-amber-600 mr-2" /> Total Shortlisted: <span className="font-semibold ml-1">124</span></li>
            <li className="flex items-center"><Award size={18} className="text-rose-600 mr-2" /> Job Offers Made: <span className="font-semibold ml-1">48 (July: 20)</span></li>
            <li className="flex items-center"><Handshake size={18} className="text-cyan-600 mr-2" /> Candidates Joined: <span className="font-semibold ml-1">27 (July: 12)</span></li>
          </ul>
        </DashboardCard>

        <DashboardCard title="Job Fair">
          <ul className="space-y-3 text-gray-700 text-base mb-5">
            <li className="flex items-center"><Users size={18} className="text-blue-600 mr-2" /> Total Job Fairs: <span className="font-semibold ml-1">3</span></li>
            <li className="flex items-center"><CheckCircle2 size={18} className="text-teal-600 mr-2" /> Conducted: <span className="font-semibold ml-1">1</span></li>
            <li className="flex items-center"><ClipboardCheck size={18} className="text-orange-500 mr-2" /> Plan for July: <span className="font-semibold ml-1">1</span></li>
          </ul>
          <div className="relative w-full h-4 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full bg-indigo-500" style={{ width: '25%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>Conducted (25%)</span>
            <span>Planned</span>
          </div>
        </DashboardCard>

        <DashboardCard title="TSP Identify & Empanel" className="lg:col-span-3">
          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-center"><UserPlus size={18} className="text-blue-600 mr-2" /> To Identify & Empanel: <span className="font-semibold ml-1">10</span></li>
            <li className="flex items-center"><CheckCircle2 size={18} className="text-teal-600 mr-2" /> Identified: <span className="font-semibold ml-1">15</span></li>
            <li className="flex items-center"><ClipboardCheck size={18} className="text-orange-500 mr-2" /> Empaneled: <span className="font-semibold ml-1">8</span></li>
            <li className="flex items-center"><Calendar size={18} className="text-amber-600 mr-2" /> To be Empaneled in July: <span className="font-semibold ml-1">3</span></li>
          </ul>
        </DashboardCard>
      </div>
    </div>
  );
};

export default PartnershipAlliance;
