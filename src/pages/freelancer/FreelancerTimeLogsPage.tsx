const FreelancerTimeLogsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Time Logs</h1>
      <p className="text-gray-500 mb-8">This page is for viewing historical time entries.</p>
      <div className="bg-white rounded-lg shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-4">Project</th>
              <th className="p-4">Date</th>
              <th className="p-4">Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">Project Epsilon</td>
              <td className="p-4">2025-10-25</td>
              <td className="p-4">8</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Project Epsilon</td>
              <td className="p-4">2025-10-24</td>
              <td className="p-4">6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FreelancerTimeLogsPage;
