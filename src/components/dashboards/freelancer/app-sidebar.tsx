import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../../../components/theme/ThemeToggle";
import { ChevronDown, ChevronRight } from "lucide-react";

const FreelancerAppSidebar = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Freelancer Panel</h2>
        <ThemeToggle />
      </div>
      <nav>
        <ul>
          <li className="mb-2"><Link to="/freelancer/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
          <li className="mb-2"><Link to="/freelancer/timer/active" className="hover:text-gray-300">Timer</Link></li>
          <li className="mb-2"><Link to="/freelancer/timer/logs" className="hover:text-gray-300">Time Logs</Link></li>
          <li className="mb-2"><Link to="/freelancer/timer/manual" className="hover:text-gray-300">Manual Entry</Link></li>
          <li className="mb-2">
            <button 
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="flex items-center justify-between w-full hover:text-gray-300"
            >
              <span>Projects</span>
              {projectsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            {projectsOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li><Link to="/freelancer/projects/assigned" className="text-sm hover:text-gray-300">Assigned Projects</Link></li>
                <li><Link to="/freelancer/projects/available" className="text-sm hover:text-gray-300">Available Projects</Link></li>
              </ul>
            )}
          </li>
          <li className="mb-2"><Link to="/freelancer/earnings/overview" className="hover:text-gray-300">Earnings</Link></li>
          <li className="mb-2"><Link to="/freelancer/earnings/reports" className="hover:text-gray-300">Reports</Link></li>
          <li className="mb-2"><Link to="/freelancer/earnings/invoices" className="hover:text-gray-300">Invoices</Link></li>
          <li className="mb-2"><Link to="/freelancer/settings" className="hover:text-gray-300">Settings</Link></li>
          <li className="mb-2"><Link to="/freelancer/notifications" className="hover:text-gray-300">Notifications</Link></li>
          <li className="mb-2"><Link to="/freelancer/profile" className="hover:text-gray-300">Profile</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default FreelancerAppSidebar;