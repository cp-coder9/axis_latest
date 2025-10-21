import { Link } from "react-router-dom";
import ThemeToggle from "../../../components/theme/ThemeToggle";

const FreelancerAppSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Freelancer Panel</h2>
        <ThemeToggle />
      </div>
      <nav>
        <ul>
          <li className="mb-2"><Link to="/freelancer/dashboard">Dashboard</Link></li>
          <li className="mb-2"><Link to="/freelancer/timer/active">Timer</Link></li>
          <li className="mb-2"><Link to="/freelancer/timer/logs">Time Logs</Link></li>
          <li className="mb-2"><Link to="/freelancer/timer/manual">Manual Entry</Link></li>
          <li className="mb-2"><Link to="/freelancer/projects/assigned">Assigned Projects</Link></li>
          <li className="mb-2"><Link to="/freelancer/projects/available">Available Projects</Link></li>
          <li className="mb-2"><Link to="/freelancer/earnings/overview">Earnings</Link></li>
          <li className="mb-2"><Link to="/freelancer/earnings/reports">Reports</Link></li>
          <li className="mb-2"><Link to="/freelancer/earnings/invoices">Invoices</Link></li>
          <li className="mb-2"><Link to="/freelancer/settings">Settings</Link></li>
          <li className="mb-2"><Link to="/freelancer/notifications">Notifications</Link></li>
          <li className="mb-2"><Link to="/freelancer/profile">Profile</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default FreelancerAppSidebar;