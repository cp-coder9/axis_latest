import { Link } from "react-router-dom";
import ThemeToggle from "../../../components/theme/ThemeToggle";

const ClientAppSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Client Panel</h2>
        <ThemeToggle />
      </div>
      <nav>
        <ul>
          <li className="mb-2"><Link to="/client/dashboard">Dashboard</Link></li>
          <li className="mb-2"><Link to="/client/dashboard/activity">Recent Activity</Link></li>
          <li className="mb-2"><Link to="/client/projects/active">Active Projects</Link></li>
          <li className="mb-2"><Link to="/client/projects/completed">Completed Projects</Link></li>
          <li className="mb-2"><Link to="/client/projects/timeline">Project Timeline</Link></li>
          <li className="mb-2"><Link to="/client/messages/contacts">Team Contacts</Link></li>
          <li className="mb-2"><Link to="/client/files/downloads">Downloads</Link></li>
          <li className="mb-2"><Link to="/client/files/shared">Shared Documents</Link></li>
          <li className="mb-2"><Link to="/client/calendar">Calendar</Link></li>
          <li className="mb-2"><Link to="/client/calendar/milestones">Project Milestones</Link></li>
          <li className="mb-2"><Link to="/client/calendar/meetings">Meetings</Link></li>
          <li className="mb-2"><Link to="/client/notifications">Notifications</Link></li>
          <li className="mb-2"><Link to="/client/settings">Settings</Link></li>
          <li className="mb-2"><Link to="/client/support">Help & Support</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default ClientAppSidebar;