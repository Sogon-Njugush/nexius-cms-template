"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Search,
  Download,
  FileEdit,
  Trash2,
  UserPlus,
  Lock,
  CheckCircle2,
  Globe,
  MapPin,
  Monitor,
  Smartphone,
  Laptop,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Expanded Mock Data with Browser/IP/Location
const activities = [
  {
    id: 1,
    user: "Alex Nexus",
    action: "published",
    target: "Home Page",
    type: "content",
    time: "10:42 AM",
    date: "Today",
    ip: "104.22.45.12",
    location: "San Francisco, US",
    device: "Chrome on macOS",
    deviceType: "desktop",
  },
  {
    id: 2,
    user: "Sarah Content",
    action: "deleted",
    target: "Draft: Q3 Strategy",
    type: "delete",
    time: "09:15 AM",
    date: "Today",
    ip: "185.12.1.44",
    location: "London, UK",
    device: "Safari on iPhone 14",
    deviceType: "mobile",
  },
  {
    id: 3,
    user: "System",
    action: "blocked",
    target: "Suspicious Login Attempt",
    type: "security",
    time: "02:30 AM",
    date: "Today",
    ip: "85.23.11.0",
    location: "Moscow, RU",
    device: "Unknown Bot Agent",
    deviceType: "unknown",
  },
  {
    id: 4,
    user: "Alex Nexus",
    action: "updated",
    target: "Global SEO Settings",
    type: "settings",
    time: "4:50 PM",
    date: "Yesterday",
    ip: "104.22.45.12",
    location: "San Francisco, US",
    device: "Chrome on macOS",
    deviceType: "desktop",
  },
  {
    id: 5,
    user: "Mike Admin",
    action: "invited",
    target: "john.doe@agency.com",
    type: "user",
    time: "11:20 AM",
    date: "Yesterday",
    ip: "192.168.1.50",
    location: "Austin, Texas",
    device: "Firefox on Windows 11",
    deviceType: "desktop",
  },
];

export default function ActivityLog() {
  const [filter, setFilter] = useState("all");

  // Helper for Activity Type Icon (Left side)
  const getActionIcon = (type: string) => {
    switch (type) {
      case "content":
        return (
          <div className="h-9 w-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <FileEdit className="h-4 w-4" />
          </div>
        );
      case "delete":
        return (
          <div className="h-9 w-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
            <Trash2 className="h-4 w-4" />
          </div>
        );
      case "security":
        return (
          <div className="h-9 w-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
            <Lock className="h-4 w-4" />
          </div>
        );
      case "settings":
        return (
          <div className="h-9 w-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
            <Globe className="h-4 w-4" />
          </div>
        );
      case "user":
        return (
          <div className="h-9 w-9 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <UserPlus className="h-4 w-4" />
          </div>
        );
      default:
        return (
          <div className="h-9 w-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
            <CheckCircle2 className="h-4 w-4" />
          </div>
        );
    }
  };

  // Helper for Device Icon (Small detail icon)
  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "mobile":
        return <Smartphone className="h-3 w-3" />;
      case "desktop":
        return <Laptop className="h-3 w-3" />;
      default:
        return <Monitor className="h-3 w-3" />;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Recent Activity</h1>
          <p className="text-muted-foreground">
            Audit log of system events including IP and device data.
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Export CSV
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-4 border-b">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <CardTitle>System Log</CardTitle>
              <CardDescription>Real-time tracking of changes.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search IP, user, or action..."
                  className="pl-9"
                />
              </div>
              <Select defaultValue="all" onValueChange={setFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="content">Content Updates</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="users">User Mgmt</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col">
            {/* GROUP: TODAY */}
            <div className="bg-slate-50/50 dark:bg-slate-900/50 px-6 py-2 text-xs font-semibold text-muted-foreground border-b">
              Today
            </div>
            {activities
              .filter((a) => a.date === "Today")
              .map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 border-b last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                >
                  {/* 1. Icon & Main Text */}
                  <div className="flex items-start gap-4 flex-1">
                    {getActionIcon(item.type)}
                    <div className="grid gap-1.5">
                      <p className="text-sm text-slate-900 dark:text-slate-100">
                        <span className="font-semibold">{item.user}</span>
                        <span className="text-muted-foreground mx-1">
                          {item.action}
                        </span>
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          “{item.target}”
                        </span>
                      </p>

                      {/* NEW: Technical Details Sub-row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                          <Globe className="h-3 w-3 text-slate-500" /> {item.ip}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {item.location}
                        </span>
                        <span
                          className="flex items-center gap-1"
                          title={item.device}
                        >
                          {getDeviceIcon(item.deviceType)} {item.device}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 2. Time Badge */}
                  <div className="ml-14 sm:ml-0 text-right">
                    <Badge
                      variant="outline"
                      className="text-xs font-normal text-muted-foreground border-slate-200 group-hover:border-slate-300"
                    >
                      {item.time}
                    </Badge>
                  </div>
                </div>
              ))}

            {/* GROUP: YESTERDAY */}
            <div className="bg-slate-50/50 dark:bg-slate-900/50 px-6 py-2 text-xs font-semibold text-muted-foreground border-y mt-2">
              Yesterday
            </div>
            {activities
              .filter((a) => a.date === "Yesterday")
              .map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 border-b last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {getActionIcon(item.type)}
                    <div className="grid gap-1.5">
                      <p className="text-sm text-slate-900 dark:text-slate-100">
                        <span className="font-semibold">{item.user}</span>
                        <span className="text-muted-foreground mx-1">
                          {item.action}
                        </span>
                        <span className="font-medium text-slate-800 dark:text-slate-200">
                          “{item.target}”
                        </span>
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                          <Globe className="h-3 w-3 text-slate-500" /> {item.ip}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {item.location}
                        </span>
                        <span
                          className="flex items-center gap-1"
                          title={item.device}
                        >
                          {getDeviceIcon(item.deviceType)} {item.device}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-14 sm:ml-0 text-right">
                    <Badge
                      variant="outline"
                      className="text-xs font-normal text-muted-foreground border-slate-200 group-hover:border-slate-300"
                    >
                      {item.time}
                    </Badge>
                  </div>
                </div>
              ))}
          </div>

          <div className="p-4 border-t flex justify-center bg-slate-50 dark:bg-slate-900/20">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Load older activities
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
