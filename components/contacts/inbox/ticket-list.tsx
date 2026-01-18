"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LifeBuoy,
  MoreHorizontal,
  Search,
  Filter,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowUpCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TicketList() {
  const tickets = [
    {
      id: "T-1024",
      subject: "API Rate Limit Exceeded",
      user: "dev@fintech.io",
      priority: "High",
      status: "Open",
      agent: "Sarah",
      updated: "10 mins ago",
    },
    {
      id: "T-1023",
      subject: "Unable to update billing address",
      user: "john.doe@company.com",
      priority: "Medium",
      status: "In Progress",
      agent: "Mike",
      updated: "2 hours ago",
    },
    {
      id: "T-1022",
      subject: "Feature request: Dark Mode",
      user: "alice@design.net",
      priority: "Low",
      status: "Resolved",
      agent: "Bot",
      updated: "1 day ago",
    },
    {
      id: "T-1021",
      subject: "SSO Login failing",
      user: "admin@enterprise.org",
      priority: "High",
      status: "In Progress",
      agent: "Sarah",
      updated: "3 hours ago",
    },
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return (
          <Badge variant="destructive" className="flex w-fit gap-1">
            <AlertCircle className="w-3 h-3" /> High
          </Badge>
        );
      case "Medium":
        return (
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-700 hover:bg-orange-100 flex w-fit gap-1"
          >
            <ArrowUpCircle className="w-3 h-3" /> Med
          </Badge>
        );
      case "Low":
        return (
          <Badge variant="outline" className="text-slate-500 flex w-fit gap-1">
            <Clock className="w-3 h-3" /> Low
          </Badge>
        );
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Open":
        return (
          <Badge
            variant="outline"
            className="border-blue-200 text-blue-700 bg-blue-50"
          >
            Open
          </Badge>
        );
      case "In Progress":
        return (
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            In Progress
          </Badge>
        );
      case "Resolved":
        return (
          <Badge variant="default" className="bg-green-600 hover:bg-green-700">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Resolved
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Support Tickets</h1>
          <p className="text-muted-foreground">
            Manage technical issues and customer inquiries.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Knowledge Base</Button>
          <Button>
            <LifeBuoy className="mr-2 h-4 w-4" /> Create Ticket
          </Button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search ticket ID or subject..."
            className="pl-9"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Requester</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-mono font-medium text-xs">
                    {t.id}
                  </TableCell>
                  <TableCell className="font-medium">{t.subject}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {t.user}
                  </TableCell>
                  <TableCell>{getPriorityBadge(t.priority)}</TableCell>
                  <TableCell>{getStatusBadge(t.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-[10px] bg-slate-200">
                          {t.agent[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{t.agent}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-xs">
                    {t.updated}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Assign to me</DropdownMenuItem>
                        <DropdownMenuItem className="text-green-600">
                          Mark Resolved
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
