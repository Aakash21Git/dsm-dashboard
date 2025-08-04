import React from 'react';
import { Users, Briefcase, TrendingUp, Book, Target, Zap, Award, Building, CheckCircle2, Calendar } from 'lucide-react';

// Helper component for common card structure
const DashboardCard = ({ title, children, className = '' }) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3 border-gray-200">{title}</h3>
    {children}
  </div>
);

// Training Page Component
const Training = () => {
  const monthlyData = [
    { month: 'Before March', enrolled: 240, wage: 165, self: 75, completed: 196, employed: 121, selfEmployed: 75 },
    { month: 'Apr-25', enrolled: 267, wage: 217, self: 50, completed: 0, employed: 0, selfEmployed: 0 },
    { month: 'May-25', enrolled: 177, wage: 127, self: 50, completed: 30, employed: 30, selfEmployed: 0 },
    { month: 'Jun-25', enrolled: 131, wage: 81, self: 50, completed: 62, employed: 18, selfEmployed: 44 },
    { month: 'Jul-25', enrolled: 207, wage: 93, self: 114, completed: 57, employed: 57, selfEmployed: 0 },
  ];

  const totalSummary = {
    enrolled: monthlyData.reduce((acc, curr) => acc + curr.enrolled, 0),
    wage: monthlyData.reduce((acc, curr) => acc + curr.wage, 0),
    self: monthlyData.reduce((acc, curr) => acc + curr.self, 0),
    completed: monthlyData.reduce((acc, curr) => acc + curr.completed, 0),
    employed: monthlyData.reduce((acc, curr) => acc + curr.employed, 0),
    selfEmployed: monthlyData.reduce((acc, curr) => acc + curr.selfEmployed, 0),
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 flex items-center">
        <Book className="mr-4 text-indigo-700" size={32} /> Training
      </h2>

      <DashboardCard title="Enrollment & Training">
        <ul className="space-y-3 text-gray-700 text-lg">
          <li className="flex items-center"><Users size={20} className="text-blue-600 mr-3" /> Total Enrolled: <span className="font-bold ml-2">{totalSummary.enrolled}</span></li>
          <li className="flex items-center"><TrendingUp size={20} className="text-orange-500 mr-3" /> Training in Progress: <span className="font-bold ml-2">507</span></li>
          <li className="flex items-center"><CheckCircle2 size={20} className="text-teal-600 mr-3" /> Total Completed: <span className="font-bold ml-2">{totalSummary.completed}</span></li>
          <li className="flex items-center"><Briefcase size={20} className="text-purple-600 mr-3" /> Total Employed: <span className="font-bold ml-2">{totalSummary.employed}</span></li>
        </ul>
      </DashboardCard>

      <DashboardCard title="Monthly Breakdown" className="mt-8">
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex-none w-56 bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-800 text-lg mb-3">{data.month}</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Enrolled: <span className="font-medium">{data.enrolled}</span></li>
                  <li>Wage: <span className="font-medium">{data.wage}</span> | Self: <span className="font-medium">{data.self}</span></li>
                  <li>Completed: <span className="font-medium">{data.completed}</span></li>
                  <li>Employed: <span className="font-medium">{data.employed}</span> | Self: <span className="font-medium">{data.selfEmployed}</span></li>
                </ul>
              </div>
            ))}
            {/* Total Column */}
            <div className="flex-none w-56 bg-teal-50 p-5 rounded-lg shadow-md border border-teal-300">
              <h4 className="font-bold text-teal-800 text-lg mb-3">Total</h4>
              <ul className="text-sm text-teal-800 space-y-2">
                <li>Enrolled: <span className="font-bold">{totalSummary.enrolled}</span></li>
                <li>Wage: <span className="font-bold">{totalSummary.wage}</span> | Self: <span className="font-bold">{totalSummary.self}</span></li>
                <li>Completed: <span className="font-bold">{totalSummary.completed}</span></li>
                <li>Employed: <span className="font-bold">{totalSummary.employed}</span> | Self: <span className="font-bold">{totalSummary.selfEmployed}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </DashboardCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <DashboardCard title="Employment Summary">
          <p className="text-gray-600 mb-5 text-base">Based on 345 trainees who completed training</p>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-center"><Briefcase size={20} className="text-purple-600 mr-3" /> Employed: <span className="font-bold ml-2">196 (57%)</span></li>
            <li className="flex items-center"><Users size={20} className="text-blue-600 mr-3" /> Wage Employment: <span className="font-bold ml-2">121 (34%)</span></li>
            <li className="flex items-center"><Building size={20} className="text-teal-600 mr-3" /> Self Employment: <span className="font-bold ml-2">119</span></li>
          </ul>
        </DashboardCard>

        <DashboardCard title="Batch Planning (July)">
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-center"><Target size={20} className="text-rose-600 mr-3" /> Target for July: <span className="font-bold ml-2">510</span></li>
            <li className="flex items-center"><TrendingUp size={20} className="text-orange-500 mr-3" /> Training Started: <span className="font-bold ml-2">207</span></li>
            <li className="flex items-center"><CheckCircle2 size={20} className="text-teal-600 mr-3" /> Training Completed in July: <span className="font-bold ml-2">58</span></li>
            <li className="flex items-center"><Zap size={20} className="text-indigo-600 mr-3" /> Batches to be Start: <span className="font-bold ml-2">19</span></li>
            <li className="flex items-center"><Award size={20} className="text-amber-600 mr-3" /> Batches Started: <span className="font-bold ml-2">14</span></li>
          </ul>
        </DashboardCard>
      </div>
    </div>
  );
};

export default Training;
