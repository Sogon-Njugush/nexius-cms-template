"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Eye, Save, GripVertical, Plus } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function PageEditor() {
  return (
    <div className="flex flex-col gap-6">
      {/* HEADER: Actions & Status */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Editing: Home Page
          </h1>
          <p className="text-muted-foreground">
            Manage page layout and SEO settings.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">
            Last saved: Just now
          </span>
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" /> Preview
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </div>
      </div>

      <Separator />

      {/* MAIN EDITOR AREA */}
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="content">Page Content</TabsTrigger>
          <TabsTrigger value="seo">SEO & Metadata</TabsTrigger>
        </TabsList>

        {/* TAB 1: CONTENT MODULES */}
        <TabsContent value="content" className="space-y-6 mt-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column: Module List (Sortable) */}
            <div className="lg:col-span-2 space-y-6">
              {/* HERO SECTION MODULE */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 py-4">
                  <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                  <div className="grid gap-1">
                    <CardTitle className="text-base">Hero Section</CardTitle>
                    <CardDescription>Top of page banner</CardDescription>
                  </div>
                  <Switch defaultChecked className="ml-auto" />
                </CardHeader>
                <CardContent className="grid gap-4 border-t pt-6">
                  <div className="grid gap-2">
                    <Label>Headline Start</Label>
                    <Input defaultValue="Create Awesome" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Headline Gradient (End)</Label>
                    <Input
                      defaultValue="Intelligent Digital Experiences"
                      className="text-orange-600 font-semibold"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Subheading</Label>
                    <Textarea
                      className="min-h-[100px]"
                      defaultValue="Digital experiences delivered as apps, agents, and automations require powerful cloud-native infrastructure."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Primary Button</Label>
                      <Input defaultValue="Get Started" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Secondary Button</Label>
                      <Input defaultValue="Explore Tech" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* STATS MODULE */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 py-4">
                  <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                  <div className="grid gap-1">
                    <CardTitle className="text-base">Statistics Bar</CardTitle>
                    <CardDescription>Key performance metrics</CardDescription>
                  </div>
                  <Switch defaultChecked className="ml-auto" />
                </CardHeader>
                <CardContent className="border-t pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Stat 1 Value</Label>
                      <Input defaultValue="700+" />
                    </div>
                    <div className="space-y-2">
                      <Label>Stat 1 Label</Label>
                      <Input defaultValue="Enterprise Customers" />
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 w-full border-dashed border"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Metric
                  </Button>
                </CardContent>
              </Card>

              {/* Add New Module Area */}
              <Button
                variant="outline"
                className="w-full h-24 border-dashed text-muted-foreground hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                <Plus className="mr-2 h-6 w-6" /> Add Content Section
              </Button>
            </div>

            {/* Right Column: Page Settings */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Page Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label>Visibility</Label>
                    <Select defaultValue="published">
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>URL Slug</Label>
                    <Input defaultValue="home" disabled />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* TAB 2: SEO SETTINGS */}
        <TabsContent value="seo" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Search Engine Optimization</CardTitle>
              <CardDescription>
                Control how this page looks in Google and social media.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>Meta Title</Label>
                <Input defaultValue="NEXIUS | Intelligent Digital Experiences" />
                <p className="text-xs text-muted-foreground">
                  Recommended length: 50-60 characters.
                </p>
              </div>
              <div className="grid gap-2">
                <Label>Meta Description</Label>
                <Textarea
                  className="h-20"
                  defaultValue="Nexius provides enterprise-grade cloud infrastructure for AI agents and digital automation."
                />
                <p className="text-xs text-muted-foreground">
                  Recommended length: 150-160 characters.
                </p>
              </div>
              <div className="grid gap-2">
                <Label>Social Share Image (OG Image)</Label>
                <div className="aspect-video w-full max-w-sm rounded-md border border-dashed bg-slate-50 flex items-center justify-center text-muted-foreground">
                  No image selected
                </div>
                <Button variant="secondary" size="sm" className="w-max">
                  Upload Image
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
