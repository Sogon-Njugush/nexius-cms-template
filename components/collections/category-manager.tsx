"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, Plus, Tag } from "lucide-react";

export default function CategoryManager() {
  const categories = [
    { id: 1, name: "Core Technology", slug: "core-tech", count: 4 },
    { id: 2, name: "Automation", slug: "automation", count: 2 },
    { id: 3, name: "Security & Identity", slug: "security", count: 1 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Service Categories
          </h1>
          <p className="text-muted-foreground">
            Organize your solutions into groups.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* CREATE NEW (Side Panel) */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Add Category</CardTitle>
            <CardDescription>Create a new group for solutions.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Input placeholder="Category Name" />
            <Input placeholder="slug-url" className="font-mono text-xs" />
            <Button className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Create
            </Button>
          </CardContent>
        </Card>

        {/* LIST */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Existing Categories</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead className="text-right">Items</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((cat) => (
                  <TableRow key={cat.id}>
                    <TableCell className="font-medium flex items-center gap-2">
                      <Tag className="h-4 w-4 text-muted-foreground" />{" "}
                      {cat.name}
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {cat.slug}
                    </TableCell>
                    <TableCell className="text-right">{cat.count}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
