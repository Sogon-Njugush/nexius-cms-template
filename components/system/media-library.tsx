"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  Search,
  Filter,
  MoreVertical,
  Image as ImageIcon,
  FileText,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MediaLibrary() {
  // Dummy media items
  const mediaItems = [
    {
      id: 1,
      name: "hero-banner-v2.jpg",
      type: "image",
      size: "1.2 MB",
      url: "/placeholder/hero.jpg",
    },
    {
      id: 2,
      name: "annual-report-2025.pdf",
      type: "document",
      size: "4.5 MB",
      url: "",
    },
    {
      id: 3,
      name: "team-photo.png",
      type: "image",
      size: "2.8 MB",
      url: "/placeholder/team.png",
    },
    {
      id: 4,
      name: "logo-dark.svg",
      type: "image",
      size: "12 KB",
      url: "/placeholder/logo.svg",
    },
    { id: 5, name: "product-demo.mp4", type: "video", size: "45 MB", url: "" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Media Library</h1>
          <p className="text-muted-foreground">
            Manage images, documents, and videos.
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" /> Upload Files
        </Button>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search files..." className="pl-9" />
        </div>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="docs">Documents</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button variant="outline" size="icon" className="ml-auto">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* MEDIA GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Upload Placeholder */}
        <div className="border-2 border-dashed rounded-lg aspect-square flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition text-muted-foreground">
          <Upload className="h-8 w-8 mb-2 opacity-50" />
          <span className="text-sm font-medium">Drop files here</span>
        </div>

        {mediaItems.map((item) => (
          <Card
            key={item.id}
            className="group relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 transition-all"
          >
            <CardContent className="p-0 aspect-square flex items-center justify-center bg-slate-100 dark:bg-slate-800">
              {item.type === "image" ? (
                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                  {/* In real app, use <Image src={item.url} ... /> */}
                  <ImageIcon className="h-10 w-10" />
                </div>
              ) : (
                <FileText className="h-12 w-12 text-slate-400" />
              )}
            </CardContent>

            {/* Overlay Details */}
            <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="text-xs font-medium truncate">{item.name}</p>
              <p className="text-[10px] opacity-80">{item.size}</p>
            </div>

            {/* Actions Menu */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="h-6 w-6">
                    <MoreVertical className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Copy URL</DropdownMenuItem>
                  <DropdownMenuItem>Rename</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="mr-2 h-3 w-3" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
