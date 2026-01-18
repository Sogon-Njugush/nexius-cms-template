"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Video, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EventArchive() {
  const recordings = [
    {
      id: 1,
      title: "Q3 2025 Town Hall",
      date: "Dec 20, 2025",
      duration: "1h 15m",
      platform: "YouTube",
    },
    {
      id: 2,
      title: "AI Integration Workshop",
      date: "Nov 15, 2025",
      duration: "45m",
      platform: "Vimeo",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/events">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Event Archive</h1>
            <p className="text-muted-foreground">
              Manage recordings of past webinars.
            </p>
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Title</TableHead>
                <TableHead>Recorded Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recordings.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium flex items-center gap-2">
                    <Video className="h-4 w-4 text-muted-foreground" />{" "}
                    {item.title}
                  </TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.duration}</TableCell>
                  <TableCell>{item.platform}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View <ExternalLink className="ml-2 h-3 w-3" />
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
