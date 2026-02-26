import SideBar from './components/SideBar';
import Navbar from './components/navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar />

        {/* Main content area */}
        <div className="flex-1 bg-gray-100 p-5">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;