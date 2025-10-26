import ThemeCustomizer from '../../components/theme/ThemeCustomizer';

const FreelancerSettingsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Settings</h1>
      <p className="text-gray-500 mb-8">This page is for managing the freelancer's settings.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text mb-4">Theme Appearance</h2>
          <ThemeCustomizer />
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text">Profile</h2>
          <p className="text-gray-500">Update your personal information.</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text">Notifications</h2>
          <p className="text-gray-500">Manage your notification preferences.</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text">Security</h2>
          <p className="text-gray-500">Change your password and manage two-factor authentication.</p>
        </div>
      </div>
    </div>
  );
};

export default FreelancerSettingsPage;
