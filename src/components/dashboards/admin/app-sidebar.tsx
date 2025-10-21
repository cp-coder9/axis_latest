import { Link } from "react-router-dom";
import ThemeToggle from "../../../components/theme/ThemeToggle";

const AdminAppSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <ThemeToggle />
      </div>
      <nav>
        <ul>
          <li className="mb-2"><Link to="/admin/dashboard">Dashboard</Link></li>
          <li className="mb-2"><Link to="/admin/lifecycle">Lifecycle</Link></li>
          <li className="mb-2"><Link to="/admin/analytics">Analytics</Link></li>
          <li className="mb-2"><Link to="/admin/projects">Projects</Link></li>
          <li className="mb-2"><Link to="/admin/team">Team</Link></li>
          <li className="mb-2"><Link to="/admin/data-library">Data Library</Link></li>
          <li className="mb-2"><Link to="/admin/reports">Reports</Link></li>
          <li className="mb-2"><Link to="/admin/word-assistant">Word Assistant</Link></li>
          <li className="mb-2"><Link to="/admin/settings">Settings</Link></li>
          <li className="mb-2"><Link to="/admin/help">Get Help</Link></li>
          <li className="mb-2"><Link to="/admin/search">Search</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminAppSidebar;