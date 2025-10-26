import { Route, Routes } from "react-router-dom";
import AdminAppLayout from "./components/dashboards/admin/AdminAppLayout";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import LifecyclePage from "./pages/admin/LifecyclePage";
import AnalyticsPage from "./pages/admin/AnalyticsPage";
import ProjectWorkflow from "./pages/admin/ProjectWorkflow";
import TeamPage from "./pages/admin/TeamPage";
import DataLibraryPage from "./pages/admin/DataLibraryPage";
import ReportsPage from "./pages/admin/ReportsPage";
import WordAssistantPage from "./pages/admin/WordAssistantPage";
import SettingsPage from "./pages/admin/SettingsPage";
import HelpPage from "./pages/admin/HelpPage";
import SearchPage from "./pages/admin/SearchPage";

// Freelancer components
import FreelancerAppLayout from "./components/dashboards/freelancer/FreelancerAppLayout";
import FreelancerDashboardPage from "./pages/freelancer/FreelancerDashboardPage";
import FreelancerTimerActivePage from "./pages/freelancer/FreelancerTimerActivePage";
import FreelancerTimeLogsPage from "./pages/freelancer/FreelancerTimeLogsPage";
import FreelancerManualEntryPage from "./pages/freelancer/FreelancerManualEntryPage";
import FreelancerAssignedProjectsPage from "./pages/freelancer/FreelancerAssignedProjectsPage";
import FreelancerAvailableProjectsPage from "./pages/freelancer/FreelancerAvailableProjectsPage";
import FreelancerEarningsOverviewPage from "./pages/freelancer/FreelancerEarningsOverviewPage";
import FreelancerEarningsReportsPage from "./pages/freelancer/FreelancerEarningsReportsPage";
import FreelancerInvoicesPage from "./pages/freelancer/FreelancerInvoicesPage";
import FreelancerSettingsPage from "./pages/freelancer/FreelancerSettingsPage";
import FreelancerNotificationsPage from "./pages/freelancer/FreelancerNotificationsPage";
import FreelancerProfilePage from "./pages/freelancer/FreelancerProfilePage";

// Client components
import ClientAppLayout from "./components/dashboards/client/ClientAppLayout";
import ClientDashboardPage from "./pages/client/ClientDashboardPage";
import ClientActivityPage from "./pages/client/ClientActivityPage";
import ClientActiveProjectsPage from "./pages/client/ClientActiveProjectsPage";
import ClientCompletedProjectsPage from "./pages/client/ClientCompletedProjectsPage";
import ClientProjectTimelinePage from "./pages/client/ClientProjectTimelinePage";
import ClientTeamContactsPage from "./pages/client/ClientTeamContactsPage";
import ClientDownloadsPage from "./pages/client/ClientDownloadsPage";
import ClientSharedDocumentsPage from "./pages/client/ClientSharedDocumentsPage";
import ClientCalendarPage from "./pages/client/ClientCalendarPage";
import ClientProjectMilestonesPage from "./pages/client/ClientProjectMilestonesPage";
import ClientMeetingsPage from "./pages/client/ClientMeetingsPage";
import ClientNotificationsPage from "./pages/client/ClientNotificationsPage";
import ClientSettingsPage from "./pages/client/ClientSettingsPage";
import ClientSupportPage from "./pages/client/ClientSupportPage";

// Login component
import LoginPage from "./pages/LoginPage";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<AdminAppLayout />}>
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="lifecycle" element={<LifecyclePage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="projects" element={<ProjectWorkflow />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="data-library" element={<DataLibraryPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="word-assistant" element={<WordAssistantPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>

      <Route path="/freelancer" element={<FreelancerAppLayout />}>
        <Route path="dashboard" element={<FreelancerDashboardPage />} />
        <Route path="timer/active" element={<FreelancerTimerActivePage />} />
        <Route path="timer/logs" element={<FreelancerTimeLogsPage />} />
        <Route path="timer/manual" element={<FreelancerManualEntryPage />} />
        <Route path="projects/assigned" element={<FreelancerAssignedProjectsPage />} />
        <Route path="projects/available" element={<FreelancerAvailableProjectsPage />} />
        <Route path="earnings/overview" element={<FreelancerEarningsOverviewPage />} />
        <Route path="earnings/reports" element={<FreelancerEarningsReportsPage />} />
        <Route path="earnings/invoices" element={<FreelancerInvoicesPage />} />
        <Route path="settings" element={<FreelancerSettingsPage />} />
        <Route path="notifications" element={<FreelancerNotificationsPage />} />
        <Route path="profile" element={<FreelancerProfilePage />} />
      </Route>

      <Route path="/client" element={<ClientAppLayout />}>
        <Route path="dashboard" element={<ClientDashboardPage />} />
        <Route path="dashboard/activity" element={<ClientActivityPage />} />
        <Route path="projects/active" element={<ClientActiveProjectsPage />} />
        <Route path="projects/completed" element={<ClientCompletedProjectsPage />} />
        <Route path="projects/timeline" element={<ClientProjectTimelinePage />} />
        <Route path="messages/contacts" element={<ClientTeamContactsPage />} />
        <Route path="files/downloads" element={<ClientDownloadsPage />} />
        <Route path="files/shared" element={<ClientSharedDocumentsPage />} />
        <Route path="calendar" element={<ClientCalendarPage />} />
        <Route path="calendar/milestones" element={<ClientProjectMilestonesPage />} />
        <Route path="calendar/meetings" element={<ClientMeetingsPage />} />
        <Route path="notifications" element={<ClientNotificationsPage />} />
        <Route path="settings" element={<ClientSettingsPage />} />
        <Route path="support" element={<ClientSupportPage />} />
      </Route>
    </Routes>
  );
};

export default Router;