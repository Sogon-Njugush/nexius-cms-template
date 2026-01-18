"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Check,
  CheckCheck,
  Clock,
  Trash2,
  AlertTriangle,
  Info,
  CheckCircle2,
  XCircle,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

// Mock Data
const initialNotifications = [
  {
    id: 1,
    title: "System Update Scheduled",
    message:
      "The platform will undergo maintenance on Saturday at 2:00 AM EST.",
    type: "warning",
    time: "10 min ago",
    read: false,
  },
  {
    id: 2,
    title: "New User Registration",
    message: "Sarah Jenkins (sarah@design.co) has requested admin access.",
    type: "info",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Backup Successful",
    message: "Daily database backup completed successfully (4.2GB).",
    type: "success",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 4,
    title: "API Rate Limit Exceeded",
    message: "The integration 'Stripe Payments' hit 95% of its hourly limit.",
    type: "error",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    title: "Subscription Cancelled",
    message: "Client 'TechFlow' has cancelled their Enterprise plan.",
    type: "error",
    time: "2 days ago",
    read: true,
  },
];

export default function NotificationList() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeTab, setActiveTab] = useState("all");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  // Helper to render icon based on type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "warning":
        return (
          <div className="p-2 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20">
            <AlertTriangle className="h-4 w-4" />
          </div>
        );
      case "error":
        return (
          <div className="p-2 rounded-full bg-red-100 text-red-600 dark:bg-red-900/20">
            <XCircle className="h-4 w-4" />
          </div>
        );
      case "success":
        return (
          <div className="p-2 rounded-full bg-green-100 text-green-600 dark:bg-green-900/20">
            <CheckCircle2 className="h-4 w-4" />
          </div>
        );
      default:
        return (
          <div className="p-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20">
            <Info className="h-4 w-4" />
          </div>
        );
    }
  };

  const filteredNotifications = notifications.filter((n) => {
    if (activeTab === "unread") return !n.read;
    if (activeTab === "archived") return n.read; // Using read as archived for demo
    return true;
  });

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-10rem)]">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with system alerts and activities.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={markAllRead}
            disabled={unreadCount === 0}
          >
            <CheckCheck className="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </div>
      </div>

      <Tabs
        defaultValue="all"
        className="flex-1 flex flex-col"
        onValueChange={setActiveTab}
      >
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread" className="relative">
              Unread
              {unreadCount > 0 && (
                <span className="ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                  {unreadCount}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0 flex-1 relative">
          <ScrollArea className="h-full pr-4">
            {filteredNotifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground border-2 border-dashed rounded-lg">
                <Bell className="h-10 w-10 mb-4 opacity-20" />
                <p>No notifications found in this view.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredNotifications.map((item) => (
                  <div
                    key={item.id}
                    className={`group flex gap-4 p-4 rounded-lg border transition-all hover:bg-slate-50 dark:hover:bg-slate-900 ${!item.read ? "bg-white dark:bg-slate-950 border-l-4 border-l-blue-500 shadow-sm" : "bg-slate-50/50 dark:bg-slate-900/20 border-l-4 border-l-transparent opacity-80"}`}
                  >
                    {/* ICON */}
                    <div className="mt-1">{getTypeIcon(item.type)}</div>

                    {/* CONTENT */}
                    <div className="flex-1 grid gap-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h4
                            className={`text-sm font-semibold ${!item.read ? "text-slate-900 dark:text-white" : "text-muted-foreground"}`}
                          >
                            {item.title}
                          </h4>
                          {!item.read && (
                            <Badge
                              variant="default"
                              className="h-5 px-1.5 text-[10px] bg-blue-600"
                            >
                              New
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.message}
                      </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {!item.read && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-blue-600"
                          title="Mark as read"
                          onClick={() => markRead(item.id)}
                        >
                          <div className="h-2 w-2 rounded-full bg-blue-600" />
                          <span className="sr-only">Read</span>
                        </Button>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => markRead(item.id)}>
                            Mark as read
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => deleteNotification(item.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
