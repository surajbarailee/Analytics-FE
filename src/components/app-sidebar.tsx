import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { GitBranch, Home, Folder , Users, Settings} from "lucide-react"

export function AppSidebar() {
  const mainNavItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "Engineers",
      url: "/engineers",
      icon: Users,
      items: [
        { title: "All Engineers", url: "/engineers/all" },
        { title: "Create Engineer", url: "/engineers/create" },
      ],
    },
    {
      title: "Repositories",
      url: "/repositories",
      icon: GitBranch,
      items: [
        { title: "All Repos", url: "/repositories/all" },
        { title: "Favorites", url: "/repositories/favorites" },
      ],
    },
    {
      title: "Team",
      url: "/team",
      icon: Users,
      items: [
        { title: "Members", url: "/team/members" },
        { title: "Activity", url: "/team/activity" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ]

  const projects = [
    {
      name: "Git Analytics",
      url: "/projects/git-analytics",
      icon: Folder,
    },
    {
      name: "Dashboard UI",
      url: "/projects/dashboard-ui",
      icon: Folder,
    },
  ]

  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/john.jpg",
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <GitBranch className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold">Git Analytics</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainNavItems} />
        <NavProjects projects={projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}