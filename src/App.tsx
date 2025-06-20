import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/layouts/layout"
import Dashboard from './pages/dashboard'
import CreateEngineerPage from './components/engineers/create-engineer'

// Placeholder components for other routes
const EngineersPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Engineers</h1>
    <p className="text-muted-foreground">Manage your engineering team</p>
  </div>
)

const AllEngineersPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">All Engineers</h1>
    <p className="text-muted-foreground">View all engineers in your team</p>
  </div>
)

const RepositoriesPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Repositories</h1>
    <p className="text-muted-foreground">Manage your Git repositories</p>
  </div>
)

const AllReposPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">All Repositories</h1>
    <p className="text-muted-foreground">View all your repositories</p>
  </div>
)

const FavoritesPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Favorite Repositories</h1>
    <p className="text-muted-foreground">Your starred repositories</p>
  </div>
)

const TeamPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Team</h1>
    <p className="text-muted-foreground">Manage your team</p>
  </div>
)

const TeamMembersPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Team Members</h1>
    <p className="text-muted-foreground">View and manage team members</p>
  </div>
)

const TeamActivityPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Team Activity</h1>
    <p className="text-muted-foreground">Recent team activity</p>
  </div>
)

const SettingsPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Settings</h1>
    <p className="text-muted-foreground">Configure your application settings</p>
  </div>
)

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Engineers routes */}
        <Route path="/engineers" element={<EngineersPage />} />
        <Route path="/engineers/all" element={<AllEngineersPage />} />
        <Route path="/engineers/create" element={<CreateEngineerPage />} />
        
        {/* Repositories routes */}
        <Route path="/repositories" element={<RepositoriesPage />} />
        <Route path="/repositories/all" element={<AllReposPage />} />
        <Route path="/repositories/favorites" element={<FavoritesPage />} />
        
        {/* Team routes */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/members" element={<TeamMembersPage />} />
        <Route path="/team/activity" element={<TeamActivityPage />} />
        
        {/* Settings route */}
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
