"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Layers, // Added Layers icon
} from "lucide-react";

import { NavMain } from "@/components/layout/nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "@/components/layout/nav-user";
// Removed TeamSwitcher import as it's no longer used
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Nexius",
    email: "m@nexius.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Hero",
          url: "#",
        },
        {
          title: "Services",
          url: "#",
        },
        {
          title: "Footer",
          url: "#",
        },
      ],
    },
    {
      title: "Platform",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Automation",
          url: "#",
        },
        {
          title: "Data Network",
          url: "#",
        },
        {
          title: "Intelligence",
          url: "#",
        },
        {
          title: "Reporting",
          url: "#",
        },
      ],
    },
    {
      title: "Solutions",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Enterprise",
          url: "#",
        },
        {
          title: "FinTech",
          url: "#",
        },
        {
          title: "Logistics",
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Blog",
          url: "#",
        },
        {
          title: "Events & Webinars",
          url: "#",
        },
      ],
    },
    {
      title: "Company",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "About Us",
          url: "#",
        },
        {
          title: "Careers",
          url: "#",
        },
        {
          title: "Contact & Support",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Demo Requests",
      url: "#",
      icon: Frame,
    },
    {
      name: "Job Applications",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Other Contacts",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="hover:bg-transparent focus-visible:ring-0"
            >
              <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-orange-600 text-white shadow-lg transition-transform group-hover:scale-105">
                <Layers className="h-5 w-5" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate text-xl font-extrabold tracking-tight text-slate-900 dark:text-white ml-2">
                  NEXIUS
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
