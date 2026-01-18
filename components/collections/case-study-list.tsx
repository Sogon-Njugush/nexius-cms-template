"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, MoreHorizontal, Building2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CaseStudyList() {
  const studies = [
    {
      id: 1,
      title: "Scaling for Black Friday",
      client: "Global Retail Co",
      sector: "Retail",
      status: "Published",
    },
    {
      id: 2,
      title: "Automating Compliance",
      client: "FinBank Ltd",
      sector: "Finance",
      status: "Draft",
    },
    {
      id: 3,
      title: "Supply Chain Twins",
      client: "Logistics Pro",
      sector: "Logistics",
      status: "Published",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Case Studies</h1>
          <p className="text-muted-foreground">
            Success stories and client testimonials.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Case Study
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Study Title</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studies.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />{" "}
                    {item.client}
                  </TableCell>
                  <TableCell>{item.sector}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "Published" ? "default" : "secondary"
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
                        <DropdownMenuItem>Edit</DropdownMenuItem>
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
