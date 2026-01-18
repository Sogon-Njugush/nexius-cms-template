"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
  Briefcase,
  FileText,
  MoreHorizontal,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function JobList() {
  const applicants = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Senior Frontend Dev",
      email: "alex@gmail.com",
      status: "Interviewing",
      date: "2 days ago",
      resume: "alex_cv.pdf",
    },
    {
      id: 2,
      name: "Sam Rivera",
      role: "Product Designer",
      email: "sam.r@design.co",
      status: "New",
      date: "4 hours ago",
      resume: "portfolio.pdf",
    },
    {
      id: 3,
      name: "Jordan Lee",
      role: "Backend Engineer",
      email: "jordan@dev.io",
      status: "Rejected",
      date: "1 week ago",
      resume: "jordan_lee.pdf",
    },
    {
      id: 4,
      name: "Casey Smith",
      role: "Senior Frontend Dev",
      email: "casey@web.net",
      status: "New",
      date: "Yesterday",
      resume: "casey_v2.pdf",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New":
        return (
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-700 hover:bg-blue-100"
          >
            <Clock className="w-3 h-3 mr-1" /> New
          </Badge>
        );
      case "Interviewing":
        return (
          <Badge
            variant="default"
            className="bg-orange-500 hover:bg-orange-600"
          >
            <CheckCircle2 className="w-3 h-3 mr-1" /> Interview
          </Badge>
        );
      case "Rejected":
        return (
          <Badge variant="outline" className="text-muted-foreground">
            <XCircle className="w-3 h-3 mr-1" /> Rejected
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
          <h1 className="text-2xl font-bold tracking-tight">
            Job Applications
          </h1>
          <p className="text-muted-foreground">
            Manage candidates and hiring pipeline.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">View Job Posts</Button>
          <Button>Export CSV</Button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search candidates or roles..." className="pl-9" />
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
                <TableHead>Candidate</TableHead>
                <TableHead>Role Applied For</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Resume</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>
                        {app.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <span className="font-medium text-sm">{app.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {app.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-3 w-3 text-muted-foreground" />{" "}
                      {app.role}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(app.status)}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {app.date}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 gap-1 text-blue-600 hover:text-blue-700"
                    >
                      <FileText className="h-3 w-3" /> View
                    </Button>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Move to Interview</DropdownMenuItem>
                        <DropdownMenuItem>Send Offer</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Reject Candidate
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
