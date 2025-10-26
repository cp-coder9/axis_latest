import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../../../components/theme/ThemeToggle";
import { ChevronDown, ChevronRight } from "lucide-react";

const ClientAppSidebar = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Client Panel</h2>
        <ThemeToggle />
      </div>
      <nav>
        <ul>
          <li className="mb-2"><Link to="/client/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
          <li className="mb-2"><Link to="/client/dashboard/activity" className="hover:text-gray-300">Recent Activity</Link></li>
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
                <li><Link to="/client/projects/active" className="text-sm hover:text-gray-300">Active Projects</Link></li>
                <li><Link to="/client/projects/completed" className="text-sm hover:text-gray-300">Completed Projects</Link></li>
                <li><Link to="/client/projects/timeline" className="text-sm hover:text-gray-300">Project Timeline</Link></li>
              </ul>
            )}
          </li>
          <li className="mb-2"><Link to="/client/messages/contacts" className="hover:text-gray-300">Team Contacts</Link></li>
          <li className="mb-2"><Link to="/client/files/downloads" className="hover:text-gray-300">Downloads</Link></li>
          <li className="mb-2"><Link to="/client/files/shared" className="hover:text-gray-300">Shared Documents</Link></li>
          <li className="mb-2"><Link to="/client/calendar" className="hover:text-gray-300">Calendar</Link></li>
          <li className="mb-2"><Link to="/client/calendar/milestones" className="hover:text-gray-300">Project Milestones</Link></li>
          <li className="mb-2"><Link to="/client/calendar/meetings" className="hover:text-gray-300">Meetings</Link></li>
          <li className="mb-2"><Link to="/client/notifications" className="hover:text-gray-300">Notifications</Link></li>
          <li className="mb-2"><Link to="/client/settings" className="hover:text-gray-300">Settings</Link></li>
          <li className="mb-2"><Link to="/client/support" className="hover:text-gray-300">Help & Support</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default ClientAppSidebar;