"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Save, Image as ImageIcon, Calendar } from "lucide-react";

export default function BlogEditor() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">New Blog Post</h1>
          <p className="text-muted-foreground">
            Create content for the insights hub.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save Draft</Button>
          <Button>
            <Save className="mr-2 h-4 w-4" /> Publish
          </Button>
        </div>
      </div>
      <Separator />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* LEFT: MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Article Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input placeholder="e.g., The Future of Digital Banking" />
              </div>
              <div className="space-y-2">
                <Label>Summary (Excerpt)</Label>
                <Textarea
                  className="h-24"
                  placeholder="Short description for the card preview..."
                />
              </div>
              <div className="space-y-2">
                <Label>Body Content</Label>
                {/* Placeholder for a Rich Text Editor like TipTap or Quill */}
                <div className="min-h-[400px] border rounded-md bg-slate-50 dark:bg-slate-900/50 p-4 text-muted-foreground">
                  [Rich Text Editor would load here]
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT: METADATA */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Publishing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="company">Company News</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Author</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select author" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Nexius Team</SelectItem>
                    <SelectItem value="ceo">Sarah Connor (CEO)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Publish Date</Label>
                <div className="relative">
                  <Input type="date" />
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-md border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground hover:bg-slate-50 cursor-pointer transition">
                <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
                <span className="text-xs">Upload Cover</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
