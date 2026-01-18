"use client";

import * as React from "react";
import {
  Archive,
  BookOpen,
  Bot,
  Briefcase,
  FileText,
  Frame,
  Globe,
  Image as ImageIcon,
  LayoutDashboard,
  Map,
  MessageSquare,
  PieChart,
  Settings2,
  Users,
  Layers,
  Inbox,
  PenTool,
} from "lucide-react";

import { NavMain } from "@/components/layout/nav-main";
import { NavProjects } from "./nav-projects"; // We will treat this as "Inbox"
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

// This data mimics a real CMS structure
const data = {
  user: {
    name: "Admin User",
    email: "admin@nexius.com",
    avatar: "/avatars/admin.jpg",
  },
  // CORE MANAGEMENT (Pages & Globals)
  cmsMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        { title: "Dashboard", url: "/dashboard" },
        { title: "Recent Activity", url: "/activity" },
      ],
    },
    {
      title: "Page Editor", // "Single Types" - Unique pages
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
      title: "Global Layout", // Things that appear on every page
      url: "#",
      icon: Globe,
      items: [
        { title: "Main Navigation", url: "/globals/nav" },
        { title: "Footer Columns", url: "/globals/footer" },
        { title: "Brand & Logos", url: "/globals/brand" },
      ],
    },
  ],
  // DYNAMIC COLLECTIONS (Blogs, Services, etc.)
  collections: [
    {
      title: "Solutions & Services",
      url: "#",
      icon: Bot,
      items: [
        { title: "All Solutions", url: "/solutions" }, // List View
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
  // SYSTEM & MEDIA
  system: [
    {
      title: "Media Library",
      url: "/media",
      icon: ImageIcon,
      items: [{ title: "Media", url: "/media" }],
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
  // INCOMING DATA (Forms)
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
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* HEADER: BRANDING */}
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
        {/* SECTION 1: CORE PAGES */}
        <NavMain items={data.cmsMain} />

        {/* SECTION 2: DYNAMIC CONTENT (Grouped for clarity) */}
        <SidebarGroup>
          <SidebarGroupLabel>Collections</SidebarGroupLabel>
          <NavMain items={data.collections} />
        </SidebarGroup>

        {/* SECTION 3: SYSTEM */}
        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <NavMain items={data.system} />
        </SidebarGroup>

        {/* SECTION 4: INBOX (Reusing NavProjects for list items) */}
        <NavProjects projects={data.inbox} />
      </SidebarContent>

      {/* FOOTER: USER PROFILE */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
