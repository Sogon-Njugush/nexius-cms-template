"use client";

import * as React from "react";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import {
  BookOpen,
  Bot,
  Briefcase,
  FileText,
  Frame,
  Globe,
  Image as ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Settings2,
  Users,
  Layers,
} from "lucide-react";

import { NavMain } from "@/components/layout/nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Keep data static, we will map over it in the component
const data = {
  user: {
    name: "Admin User",
    email: "admin@nexius.com",
    avatar: "/avatars/admin.jpg",
  },
  cmsMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
      items: [
        { title: "Dashboard", url: "/dashboard" },
        { title: "Recent Activity", url: "/activity" },
      ],
    },
    {
      title: "Page Editor",
      url: "#",
      icon: FileText,
      items: [
        { title: "Home Page", url: "/pages/home" },
        { title: "About Us", url: "/pages/about" },
        { title: "Contact Page", url: "/pages/contact" },
        { title: "Landing Pages", url: "/pages/landing" },
      ],
    },
    {
      title: "Global Layout",
      url: "#",
      icon: Globe,
      items: [
        { title: "Main Navigation", url: "/globals/nav" },
        { title: "Footer Columns", url: "/globals/footer" },
        { title: "Brand & Logos", url: "/globals/brand" },
      ],
    },
  ],
  collections: [
    {
      title: "Solutions & Services",
      url: "#",
      icon: Bot,
      items: [
        { title: "All Solutions", url: "/solutions" },
        { title: "Add New Solution", url: "/solutions/new" },
        { title: "Service Categories", url: "/solutions/categories" },
      ],
    },
    {
      title: "Resource Center",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Blog Posts", url: "/blog" },
        { title: "Case Studies", url: "/case-studies" },
        { title: "Whitepapers", url: "/whitepapers" },
      ],
    },
    {
      title: "Events & Webinars",
      url: "#",
      icon: Briefcase,
      items: [
        { title: "Upcoming Events", url: "/events" },
        { title: "Past Recordings", url: "/events/archive" },
      ],
    },
  ],
  system: [
    {
      title: "Media Library",
      url: "/media",
      icon: ImageIcon,
      items: [], // Single item parent
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General & SEO", url: "/settings/seo" },
        { title: "Admin Users", url: "/settings/users" },
        { title: "Integrations", url: "/settings/api" },
      ],
    },
  ],
  inbox: [
    {
      name: "Demo Requests",
      url: "/inbox/contact",
      icon: Frame,
    },
    {
      name: "Job Applicants",
      url: "/inbox/jobs",
      icon: Users,
    },
    {
      name: "Support Tickets",
      url: "/inbox/support",
      icon: MessageSquare,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // 2. Get the current path
  const pathname = usePathname();

  // 3. Helper function to check active state dynamically
  // This ensures the parent is expanded if a child is active
  const setActive = (items: any[]) => {
    return items.map((item) => {
      // Check if any child matches the current path
      const isChildActive = item.items?.some(
        (subItem: any) => subItem.url === pathname,
      );
      // Check if the item itself matches (for single-level items)
      const isSelfActive = item.url === pathname;

      return {
        ...item,
        // Parent is active if itself or a child is active
        isActive: isSelfActive || isChildActive,
        // Pass active state down to children for styling
        items: item.items?.map((subItem: any) => ({
          ...subItem,
          isActive: subItem.url === pathname,
        })),
      };
    });
  };

  // 4. Calculate active states
  const cmsMainActive = setActive(data.cmsMain);
  const collectionsActive = setActive(data.collections);
  const systemActive = setActive(data.system);

  // For Inbox (which uses NavProjects), we just need to mark the individual item
  const inboxActive = data.inbox.map((item) => ({
    ...item,
    isActive: item.url === pathname,
  }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-orange-600 text-sidebar-primary-foreground">
                <Layers className="size-4" />
              </div>
              <Link href="/dashboard">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold">NEXIUS</span>
                  <span className="truncate text-xs">CMS v2.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Pass the dynamically calculated arrays */}
        <NavMain items={cmsMainActive} />

        <SidebarGroup>
          <SidebarGroupLabel>Collections</SidebarGroupLabel>
          <NavMain items={collectionsActive} />
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <NavMain items={systemActive} />
        </SidebarGroup>

        <NavProjects projects={inboxActive} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
