"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, MoreHorizontal, ExternalLink } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LandingList() {
  const pages = [
    {
      id: 1,
      name: "Q4 Webinar Signup",
      slug: "/webinar-q4",
      views: 1205,
      status: "Published",
    },
    {
      id: 2,
      name: "E-Book Download",
      slug: "/resources/ebook-ai",
      views: 450,
      status: "Draft",
    },
    {
      id: 3,
      name: "Partner Program",
      slug: "/partners",
      views: 8900,
      status: "Published",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Landing Pages</h1>
          <p className="text-muted-foreground">
            Create and track marketing campaigns.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create New Page
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page Name</TableHead>
                <TableHead>URL Slug</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page) => (
                <TableRow key={page.id}>
                  <TableCell className="font-medium">{page.name}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {page.slug}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        page.status === "Published" ? "default" : "secondary"
                      }
                    >
                      {page.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{page.views}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Design</DropdownMenuItem>
                        <DropdownMenuItem>SEO Settings</DropdownMenuItem>
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
