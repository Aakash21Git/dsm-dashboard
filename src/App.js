import React, { useState, useEffect } from 'react';
import Overall from './Overall';
import Training from './Training';
import PartnershipAlliance from './PartnershipAlliance';
import {
  Home, Users, Briefcase, TrendingUp, Map, Menu, X, ChevronDown, Calendar, CheckCircle2,
  Book, Handshake, Search, Bell, Settings, MessageSquare, CircleCheck
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('overall'); // Default page
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedView, setSelectedView] = useState('Cumulative'); // For the "Select View" dropdown

  // Placeholder for page content - we'll build these later
const renderPageContent = () => {
  switch (currentPage) {
    case 'overall':
      return <Overall onNavigate={setCurrentPage}/>;
    case 'training':
      return <Training />;
    case 'partnership':
      return <PartnershipAlliance />;
    default:
      return <Overall />;
  }
};

  useEffect(() => {
    // This useEffect is a placeholder for potential Firebase initialization.
    // For this assignment, it's not strictly necessary for the UI,
    // but kept as per general instructions for React apps.
    const initializeFirebase = async () => {
      // Dummy Firebase init for demonstration
      // In a real app, you'd initialize Firebase here.
    };
    initializeFirebase();
  }, []);

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
                <Home size={20} className="mr-4" />
                Overall
              </button>
            </li>
            <li className="mb-3">
              <button
                className={`flex items-center w-full p-3 rounded-lg text-md ${currentPage === 'training' ? 'bg-indigo-700' : 'hover:bg-gray-700'}`}
                onClick={() => setCurrentPage('training')}
              >
                <Book size={20} className="mr-4" />
                Training
              </button>
            </li>
            <li className="mb-3">
              <button
                className={`flex items-center w-full p-3 rounded-lg text-md ${currentPage === 'partnership' ? 'bg-indigo-700' : 'hover:bg-gray-700'}`}
                onClick={() => setCurrentPage('partnership')}
              >
                <Handshake size={20} className="mr-4" />
                Partnership & Alliance
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
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
              <span className="bg-indigo-800 px-3 py-1 rounded-full text-sm">CSR: Target: 1000 | ID: 720 | Left: 280 | Pipe: 30</span>
            </div>
            <div className="flex items-center text-gray-600 text-base">
              <Calendar size={20} className="mr-2 text-indigo-500" />
              <span>July 31, 2025</span>
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
            <button className="text-gray-600 hover:text-indigo-500 transition-colors">
              <Search size={22} />
            </button>
            <button className="text-gray-600 hover:text-indigo-500 transition-colors">
              <Bell size={22} />
            </button>
            <button className="text-gray-600 hover:text-indigo-500 transition-colors">
              <Settings size={22} />
            </button>
            <button className="text-gray-600 hover:text-indigo-500 transition-colors">
              <MessageSquare size={22} />
            </button>
            <img src="https://placehold.co/36x36/cccccc/333333?text=A" alt="User Avatar" className="rounded-full border-2 border-indigo-500" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {renderPageContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
