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
import { Plus, MoreHorizontal, FileText, Download } from "lucide-react";

export default function WhitepaperList() {
  const papers = [
    {
      id: 1,
      title: "State of AI 2026",
      downloads: 1250,
      type: "PDF",
      status: "Published",
    },
    {
      id: 2,
      title: "Enterprise Security Guide",
      downloads: 890,
      type: "PDF",
      status: "Published",
    },
    {
      id: 3,
      title: "API First Strategies",
      downloads: 0,
      type: "PDF",
      status: "Draft",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Whitepapers</h1>
          <p className="text-muted-foreground">
            Manage gated content and research reports.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Upload New
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {papers.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium flex items-center gap-3">
                    <div className="h-8 w-8 bg-red-100 text-red-600 rounded flex items-center justify-center">
                      <FileText className="h-4 w-4" />
                    </div>
                    {item.title}
                  </TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell className="flex items-center gap-1 text-muted-foreground">
                    <Download className="h-3 w-3" /> {item.downloads}
                  </TableCell>
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
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
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
