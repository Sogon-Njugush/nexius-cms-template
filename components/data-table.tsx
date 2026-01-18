"use client";

import * as React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  IconAlertTriangle,
  IconBan,
  IconCheck,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconDownload,
  IconFilter,
  IconGlobe,
  IconLayoutColumns,
  IconLock,
  IconRefresh,
  IconServer,
  IconShield,
  IconShieldLock,
  IconUser,
} from "@tabler/icons-react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- 1. DATA TYPES & MOCK DATA ---

type VisitorLog = {
  id: string;
  ip: string;
  location: string;
  path: string;
  status: number;
  latency: number;
  device: "Desktop" | "Mobile";
  time: string;
};

type SecurityEvent = {
  id: string;
  event: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  source: string;
  target: string;
  status: "Blocked" | "Flagged" | "Allowed";
  time: string;
};

const recentVisitors: VisitorLog[] = [
  {
    id: "1",
    ip: "104.22.12.1",
    location: "US, CA",
    path: "/pricing",
    status: 200,
    latency: 45,
    device: "Desktop",
    time: "Just now",
  },
  {
    id: "2",
    ip: "185.11.4.20",
    location: "UK, London",
    path: "/blog/seo-tips",
    status: 200,
    latency: 120,
    device: "Mobile",
    time: "1 min ago",
  },
  {
    id: "3",
    ip: "92.15.66.12",
    location: "DE, Berlin",
    path: "/api/user",
    status: 500,
    latency: 450,
    device: "Desktop",
    time: "2 min ago",
  },
  {
    id: "4",
    ip: "23.44.12.90",
    location: "CA, Toronto",
    path: "/",
    status: 200,
    latency: 32,
    device: "Mobile",
    time: "5 min ago",
  },
  {
    id: "5",
    ip: "13.55.12.11",
    location: "US, NY",
    path: "/login",
    status: 401,
    latency: 85,
    device: "Desktop",
    time: "8 min ago",
  },
  {
    id: "6",
    ip: "203.11.9.1",
    location: "AU, Sydney",
    path: "/dashboard",
    status: 200,
    latency: 190,
    device: "Desktop",
    time: "10 min ago",
  },
  {
    id: "7",
    ip: "88.12.44.1",
    location: "FR, Paris",
    path: "/features",
    status: 200,
    latency: 60,
    device: "Mobile",
    time: "12 min ago",
  },
  {
    id: "8",
    ip: "101.2.3.4",
    location: "JP, Tokyo",
    path: "/api/data",
    status: 200,
    latency: 210,
    device: "Desktop",
    time: "15 min ago",
  },
  {
    id: "9",
    ip: "45.12.1.99",
    location: "BR, Rio",
    path: "/",
    status: 200,
    latency: 150,
    device: "Mobile",
    time: "18 min ago",
  },
  {
    id: "10",
    ip: "192.168.1.1",
    location: "Localhost",
    path: "/admin",
    status: 200,
    latency: 5,
    device: "Desktop",
    time: "20 min ago",
  },
  {
    id: "11",
    ip: "12.34.56.78",
    location: "US, Seattle",
    path: "/docs",
    status: 200,
    latency: 40,
    device: "Desktop",
    time: "22 min ago",
  },
  {
    id: "12",
    ip: "98.76.54.32",
    location: "IN, Mumbai",
    path: "/api/v1/status",
    status: 200,
    latency: 250,
    device: "Mobile",
    time: "25 min ago",
  },
];

const securityEvents: SecurityEvent[] = [
  {
    id: "1",
    event: "SQL Injection Attempt",
    severity: "Critical",
    source: "192.168.1.55",
    target: "/api/login",
    status: "Blocked",
    time: "10 mins ago",
  },
  {
    id: "2",
    event: "Brute Force Login",
    severity: "High",
    source: "45.12.1.99",
    target: "/admin",
    status: "Blocked",
    time: "25 mins ago",
  },
  {
    id: "3",
    event: "Suspicious User Agent",
    severity: "Medium",
    source: "Bot-Net-Alpha",
    target: "/",
    status: "Flagged",
    time: "1 hour ago",
  },
  {
    id: "4",
    event: "Admin Password Reset",
    severity: "Low",
    source: "System",
    target: "User: Admin",
    status: "Allowed",
    time: "2 hours ago",
  },
  {
    id: "5",
    event: "Port Scan Detected",
    severity: "High",
    source: "88.12.44.1",
    target: "Port 22",
    status: "Blocked",
    time: "3 hours ago",
  },
  {
    id: "6",
    event: "New API Key Generated",
    severity: "Low",
    source: "User: Sarah",
    target: "Settings",
    status: "Allowed",
    time: "5 hours ago",
  },
];

const performanceData = [
  { time: "10:00", requests: 120, latency: 40 },
  { time: "10:05", requests: 180, latency: 45 },
  { time: "10:10", requests: 150, latency: 38 },
  { time: "10:15", requests: 250, latency: 55 },
  { time: "10:20", requests: 300, latency: 120 },
  { time: "10:25", requests: 220, latency: 60 },
  { time: "10:30", requests: 190, latency: 42 },
  { time: "10:35", requests: 210, latency: 45 },
  { time: "10:40", requests: 180, latency: 39 },
  { time: "10:45", requests: 240, latency: 50 },
  { time: "10:50", requests: 350, latency: 150 }, // Spike
  { time: "10:55", requests: 280, latency: 80 },
];

// --- 2. SUB-COMPONENTS ---

function StatusBadge({ code }: { code: number }) {
  if (code >= 200 && code < 300) {
    return (
      <Badge
        variant="outline"
        className="border-green-200 bg-green-50 text-green-700 gap-1 font-mono"
      >
        <IconCheck className="size-3" /> {code}
      </Badge>
    );
  }
  if (code >= 400 && code < 500) {
    return (
      <Badge
        variant="outline"
        className="border-orange-200 bg-orange-50 text-orange-700 gap-1 font-mono"
      >
        <IconAlertTriangle className="size-3" /> {code}
      </Badge>
    );
  }
  return (
    <Badge variant="destructive" className="gap-1 font-mono">
      <IconServer className="size-3" /> {code}
    </Badge>
  );
}

function SecurityBadge({ severity }: { severity: string }) {
  switch (severity) {
    case "Critical":
      return (
        <Badge variant="destructive" className="bg-red-600">
          Critical
        </Badge>
      );
    case "High":
      return (
        <Badge variant="default" className="bg-orange-600 hover:bg-orange-700">
          High
        </Badge>
      );
    case "Medium":
      return (
        <Badge
          variant="secondary"
          className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
        >
          Medium
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className="text-slate-500">
          Low
        </Badge>
      );
  }
}

// --- 3. MAIN COMPONENT ---

export function MonitoringDashboard() {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns: ColumnDef<VisitorLog>[] = [
    {
      accessorKey: "ip",
      header: "Visitor",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
            {row.original.device === "Desktop" ? (
              <IconDeviceDesktop className="size-4 text-slate-500" />
            ) : (
              <IconDeviceMobile className="size-4 text-slate-500" />
            )}
          </div>
          <div className="grid gap-0.5">
            <span className="font-medium text-sm text-foreground font-mono">
              {row.original.ip}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <IconGlobe className="size-3" /> {row.original.location}
            </span>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "path",
      header: "Path",
      cell: ({ row }) => (
        <code className="text-xs bg-muted px-1.5 py-0.5 rounded border font-mono text-muted-foreground">
          {row.original.path}
        </code>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <StatusBadge code={row.original.status} />,
    },
    {
      accessorKey: "latency",
      header: "Latency",
      cell: ({ row }) => {
        const lat = row.original.latency;
        const color =
          lat > 200
            ? "text-red-500"
            : lat > 100
              ? "text-orange-500"
              : "text-green-500";
        return (
          <span className={`font-mono text-xs font-bold ${color}`}>
            {lat}ms
          </span>
        );
      },
    },
    {
      accessorKey: "time",
      header: "Timestamp",
      cell: ({ row }) => (
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {row.original.time}
        </span>
      ),
    },
  ];

  const table = useReactTable({
    data: recentVisitors,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 w-full max-w-[1600px] mx-auto">
      {/* 2. MAIN TABS SECTION (Default: visitors) */}
      <Tabs
        defaultValue="visitors"
        className="w-full flex-col justify-start gap-6"
      >
        {/* TAB CONTROLS */}
        <div className="flex items-center justify-between">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="visitors" className="gap-2">
              Visitor Logs{" "}
              <Badge variant="secondary" className="ml-1 px-1 py-0 text-[10px]">
                Live
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="traffic" className="gap-2">
              Traffic Trends
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              Security Events{" "}
              <Badge
                variant="destructive"
                className="ml-1 px-1 py-0 text-[10px] h-4"
              >
                2
              </Badge>
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden lg:flex">
                  <IconLayoutColumns className="mr-2 size-4" /> View
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem checked>
                  Time
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>
                  Status
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>User Agent</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" className="hidden lg:flex">
              <IconFilter className="mr-2 size-4" /> Filter
            </Button>
            <Button variant="default" size="sm">
              <IconDownload className="mr-2 size-4" /> Export Report
            </Button>
          </div>
        </div>

        {/* CONTENT: VISITOR TABLE */}
        <TabsContent value="visitors" className="mt-4">
          <Card className="overflow-hidden">
            <CardHeader className="px-6 py-4 border-b">
              <CardTitle>Recent Visitor Log</CardTitle>
              <CardDescription>
                Detailed incoming request data from valid sources.
              </CardDescription>
            </CardHeader>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/50">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead
                          key={header.id}
                          className="h-10 text-xs font-semibold"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow key={row.id} className="h-12 hover:bg-muted/50">
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id} className="py-2">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-4 border-t">
              <div className="text-xs text-muted-foreground">
                Showing {table.getPaginationRowModel().rows.length} of{" "}
                {recentVisitors.length} events
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* CONTENT: TRAFFIC CHART (Line Graph) */}
        <TabsContent value="traffic" className="mt-4">
          <Card className="h-[500px]">
            <CardHeader>
              <CardTitle>Traffic Analysis</CardTitle>
              <CardDescription>
                Requests and Latency metrics over the last hour.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={performanceData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="time"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    fontSize={12}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis
                    yAxisId="left"
                    tickLine={false}
                    axisLine={false}
                    fontSize={12}
                    stroke="hsl(var(--muted-foreground))"
                    label={{
                      value: "Requests",
                      angle: -90,
                      position: "insideLeft",
                      fill: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickLine={false}
                    axisLine={false}
                    fontSize={12}
                    stroke="hsl(var(--muted-foreground))"
                    label={{
                      value: "Latency (ms)",
                      angle: 90,
                      position: "insideRight",
                      fill: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid hsl(var(--border))",
                      background: "hsl(var(--background))",
                    }}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="requests"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6 }}
                    name="Requests"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="latency"
                    stroke="#f97316"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6 }}
                    name="Latency (ms)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CONTENT: SECURITY EVENTS */}
        <TabsContent value="security" className="mt-4">
          <Card className="overflow-hidden">
            <CardHeader className="px-6 py-4 border-b flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <IconShieldLock className="size-5 text-red-500" /> Security
                  Event Log
                </CardTitle>
                <CardDescription>
                  Detected potential threats and authentication events.
                </CardDescription>
              </div>
              <Button variant="destructive" size="sm">
                <IconBan className="mr-2 size-4" /> Block Selected IPs
              </Button>
            </CardHeader>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[100px]">Severity</TableHead>
                    <TableHead>Event Type</TableHead>
                    <TableHead>Source IP / User</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {securityEvents.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell>
                        <SecurityBadge severity={event.severity} />
                      </TableCell>
                      <TableCell className="font-medium">
                        {event.event}
                      </TableCell>
                      <TableCell className="font-mono text-xs">
                        {event.source}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {event.target}
                      </TableCell>
                      <TableCell>
                        {event.status === "Blocked" ? (
                          <span className="flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200 w-fit">
                            <IconLock className="size-3" /> Blocked
                          </span>
                        ) : event.status === "Flagged" ? (
                          <span className="flex items-center gap-1 text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200 w-fit">
                            <IconAlertTriangle className="size-3" /> Flagged
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200 w-fit">
                            <IconCheck className="size-3" /> Allowed
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs">
                        {event.time}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
