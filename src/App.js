import React, { useState, useEffect } from 'react';
import {
  Home, Users, Briefcase, TrendingUp, Map, Menu, X, ChevronDown, Calendar, CheckCircle2,
  Book, Handshake, Target, Hourglass, UserX, Building, FileText, ClipboardCheck, Building2, Zap, Award, UserPlus
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashboardCard = ({ title, children, className = '' }) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3 border-gray-200">{title}</h3>
    {children}
  </div>
);

// Overall Page Components
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


const App = () => {
  const [currentPage, setCurrentPage] = useState('overall');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('Cumulative');
  const [currentDate, setCurrentDate] = useState(''); // New state for the current date

  // Highlighting data for the carousel
  const highlights = [
    { text: 'CSR: Target: 1000 | ID: 720 | Left: 280 | Pipe: 30' },
    { text: 'Gov: Target: 2500 | ID: 180 | Left: 2320 | Pipe: 1800' },
    { text: 'Training Partners: Target: 4500 | ID: 3240 | Left: 660 | Pipe: 600' },
  ];
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

  useEffect(() => {
    // Function to get and format the current date
    const getCurrentDate = () => {
      const today = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return today.toLocaleDateString('en-US', options);
    };
    setCurrentDate(getCurrentDate()); 

   
    const interval = setInterval(() => {
      setCurrentHighlightIndex(prevIndex =>
        (prevIndex + 1) % highlights.length
      );
    }, 5000); // Changes will in highlight every 5 seconds

  
    return () => clearInterval(interval);
  }, []);

  const renderPageContent = () => {
    switch (currentPage) {
      case 'overall':
        return <Overall onNavigate={setCurrentPage} />;
      case 'training':
        return <Training />;
      case 'partnership':
        return <PartnershipAlliance />;
      default:
        return <Overall onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-inter">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}>
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img src="https://placehold.co/40x40/ffffff/000000?text=D" alt="DSM Logo" className="rounded-full mr-3" />
            <span className="text-2xl font-bold">DSM</span>
          </div>
          <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <nav>
          <ul>
            <li className="mb-3">
              <button
                className={`flex items-center w-full p-3 rounded-lg text-md ${currentPage === 'overall' ? 'bg-indigo-700' : 'hover:bg-gray-700'}`}
                onClick={() => setCurrentPage('overall')}
              >
                <Home size={22} className="mr-4" />
                Overall
              </button>
            </li>
            <li className="mb-3">
              <button
                className={`flex items-center w-full p-3 rounded-lg text-md ${currentPage === 'training' ? 'bg-indigo-700' : 'hover:bg-gray-700'}`}
                onClick={() => setCurrentPage('training')}
              >
                <Book size={22} className="mr-4" />
                Training
              </button>
            </li>
            <li className="mb-3">
              <button
                className={`flex items-center w-full p-3 rounded-lg text-md ${currentPage === 'partnership' ? 'bg-indigo-700' : 'hover:bg-gray-700'}`}
                onClick={() => setCurrentPage('partnership')}
              >
                <Handshake size={22} className="mr-4" />
                Partnership & Alliance
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      
      <div className="flex-1 flex flex-col overflow-hidden">
       
        <header className="bg-white shadow-md p-4 flex items-center justify-between z-40">
          <div className="flex items-center">
            <button className="md:hidden text-gray-600 mr-4" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={28} />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Review</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center bg-indigo-700 text-white px-5 py-2 rounded-full text-base font-medium shadow-md">
              <span className="mr-3">Highlights</span>
              <span className="bg-indigo-800 px-3 py-1 rounded-full text-sm">
                {highlights[currentHighlightIndex].text}
              </span>
            </div>
            <div className="flex items-center text-gray-600 text-base">
              <Calendar size={20} className="mr-2 text-indigo-500" />
              <span>{currentDate}</span>
            </div>
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
                value={selectedView}
                onChange={(e) => setSelectedView(e.target.value)}
              >
                <option value="Cumulative">Cumulative View</option>
                <option value="Weekly">Weekly View</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={16} />
              </div>
            </div>

            <img src="https://placehold.co/36x36/cccccc/333333?text=A" alt="User Avatar" className="rounded-full border-2 border-indigo-500" />
          </div>
        </header>

  
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {renderPageContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
