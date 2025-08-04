import React from 'react';
import { Target, CheckCircle2, Hourglass, UserX } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Helper component for common card structure
const DashboardCard = ({ title, children, className = '' }) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3 border-gray-200">{title}</h3>
    {children}
  </div>
);

// Target Allocation Page Component (Overall)
const Overall = ({ onNavigate }) => {
  const overallData = {
    totalTarget: 8000,
    identified: 4170,
    inPipeline: 2980,
    toBeIdentified: 850,
  };

  const calculatePercentage = (value, total) => (total > 0 ? ((value / total) * 100).toFixed(1) : 0);

  const identifiedPct = calculatePercentage(overallData.identified, overallData.totalTarget);
  const inPipelinePct = calculatePercentage(overallData.inPipeline, overallData.totalTarget);
  const toBeIdentifiedPct = calculatePercentage(overallData.toBeIdentified, overallData.totalTarget);

  const chartData = [
    { name: 'Identified', value: overallData.identified, percentage: identifiedPct, color: '#2DD4BF' },
    { name: 'In Pipeline', value: overallData.inPipeline, percentage: inPipelinePct, color: '#FDBA74' },
    { name: 'To be Identified', value: overallData.toBeIdentified, percentage: toBeIdentifiedPct, color: '#FB7185' },
  ];

  const categoryData = [
    {
      title: 'Government Convergence',
      totalTarget: 2500,
      identified: 180,
      inPipeline: 2380,
      toBeIdentified: 0,
    },
    {
      title: 'CSR',
      totalTarget: 1000,
      identified: 750,
      inPipeline: 0,
      toBeIdentified: 250,
    },
    {
      title: 'Training Service Partners',
      totalTarget: 4500,
      identified: 3240,
      inPipeline: 600,
      toBeIdentified: 660,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 flex items-center">
        <Target className="mr-4 text-indigo-700" size={32} /> Overall Target Allocation
      </h2>

      <DashboardCard title="Overall Target Allocation">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <span className="text-sm text-gray-600">Total Target</span>
            <span className="text-3xl font-bold text-blue-700 mt-1">{overallData.totalTarget}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-teal-50 rounded-lg border border-teal-200">
            <span className="text-sm text-gray-600">Identified</span>
            <span className="text-3xl font-bold text-teal-700 mt-1">{overallData.identified}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-orange-50 rounded-lg border border-orange-200">
            <span className="text-sm text-gray-600">In Pipeline</span>
            <span className="text-3xl font-bold text-orange-700 mt-1">{overallData.inPipeline}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-rose-50 rounded-lg border border-rose-200">
            <span className="text-sm text-gray-600">To be Identified</span>
            <span className="text-3xl font-bold text-rose-700 mt-1">{overallData.toBeIdentified}</span>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={120} axisLine={false} tickLine={false} />
              <Tooltip formatter={(value, name, props) => [`${value} (${props.payload.percentage}%)`, name]} />
              <Legend />
              <Bar dataKey="value" barSize={30}>
                {
                  chartData.map((entry, index) => (
                    <Bar key={`bar-${index}`} fill={entry.color} />
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <button
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium shadow-md hover:shadow-lg"
          onClick={() => onNavigate('training')}
        >
          View Breakup
        </button>
      </DashboardCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {categoryData.map((category, index) => {
          const catIdentifiedPct = calculatePercentage(category.identified, category.totalTarget);
          const catInPipelinePct = calculatePercentage(category.inPipeline, category.totalTarget);
          const catToBeIdentifiedPct = calculatePercentage(category.toBeIdentified, category.totalTarget);

          return (
            <DashboardCard key={index} title={category.title}>
              <ul className="space-y-2 text-gray-700 text-base mb-4">
                <li className="flex items-center"><Target size={18} className="text-gray-500 mr-2" /> Total Target: <span className="font-semibold ml-1">{category.totalTarget}</span></li>
                <li className="flex items-center"><CheckCircle2 size={18} className="text-teal-500 mr-2" /> Target Identified: <span className="font-semibold ml-1">{category.identified}</span></li>
                <li className="flex items-center"><Hourglass size={18} className="text-orange-400 mr-2" /> In Pipeline: <span className="font-semibold ml-1">{category.inPipeline}</span></li>
                <li className="flex items-center"><UserX size={18} className="text-rose-500 mr-2" /> To be Identified: <span className="font-semibold ml-1">{category.toBeIdentified}</span></li>
              </ul>
              <div className="relative w-full h-4 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-teal-500"
                  style={{ width: `${catIdentifiedPct}%` }}
                ></div>
                <div
                  className="absolute top-0 h-full bg-orange-400"
                  style={{ left: `${catIdentifiedPct}%`, width: `${catInPipelinePct}%` }}
                ></div>
                <div
                  className="absolute top-0 h-full bg-rose-500"
                  style={{ left: `${parseFloat(catIdentifiedPct) + parseFloat(catInPipelinePct)}%`, width: `${catToBeIdentifiedPct}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>Identified ({catIdentifiedPct}%)</span>
                <span>In Pipeline ({catInPipelinePct}%)</span>
                <span>To be identified ({catToBeIdentifiedPct}%)</span>
              </div>
            </DashboardCard>
          );
        })}
      </div>
    </div>
  );
};

export default Overall;
