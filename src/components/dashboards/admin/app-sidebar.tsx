import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../../../components/theme/ThemeToggle";
import { ChevronDown, ChevronRight } from "lucide-react";

const AdminAppSidebar = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <ThemeToggle />
      </div>
      <nav>
        <ul>
          <li className="mb-2"><Link to="/admin/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
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
                <li><Link to="/admin/projects" className="text-sm hover:text-gray-300">All Projects</Link></li>
                <li><Link to="/admin/lifecycle" className="text-sm hover:text-gray-300">Lifecycle</Link></li>
              </ul>
            )}
          </li>
          <li className="mb-2"><Link to="/admin/analytics" className="hover:text-gray-300">Analytics</Link></li>
          <li className="mb-2"><Link to="/admin/team" className="hover:text-gray-300">Team</Link></li>
          <li className="mb-2"><Link to="/admin/data-library" className="hover:text-gray-300">Data Library</Link></li>
          <li className="mb-2"><Link to="/admin/reports" className="hover:text-gray-300">Reports</Link></li>
          <li className="mb-2"><Link to="/admin/word-assistant" className="hover:text-gray-300">Word Assistant</Link></li>
          <li className="mb-2"><Link to="/admin/settings" className="hover:text-gray-300">Settings</Link></li>
          <li className="mb-2"><Link to="/admin/help" className="hover:text-gray-300">Get Help</Link></li>
          <li className="mb-2"><Link to="/admin/search" className="hover:text-gray-300">Search</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminAppSidebar;