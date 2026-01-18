"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { Plus, MoreHorizontal, Layers, Cpu, Shield } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SolutionList() {
  const solutions = [
    {
      id: 1,
      title: "API Management",
      category: "Core Tech",
      icon: Layers,
      status: "Active",
      color: "Orange",
    },
    {
      id: 2,
      title: "Integration Engine",
      category: "Automation",
      icon: Cpu,
      status: "Active",
      color: "Blue",
    },
    {
      id: 3,
      title: "Identity (IAM)",
      category: "Security",
      icon: Shield,
      status: "Draft",
      color: "Teal",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Solutions</h1>
          <p className="text-muted-foreground">
            Manage the service cards displayed on the homepage.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Solution
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Icon</TableHead>
                <TableHead>Solution Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Theme Color</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {solutions.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="h-8 w-8 bg-slate-100 rounded-md flex items-center justify-center text-slate-500">
                      <item.icon className="h-4 w-4" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full bg-${item.color.toLowerCase()}-500`}
                      />
                      {item.color}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Solution</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
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
