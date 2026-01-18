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
import { Separator } from "@/components/ui/separator";
import { Eye, Save, GripVertical, Plus, Trash2, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function AboutEditor() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Editing: About Us
          </h1>
          <p className="text-muted-foreground">
            Manage company history, mission, and team.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" /> Preview
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </div>
      </div>
      <Separator />

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="content">Page Content</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6 mt-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* LEFT: Modules */}
            <div className="lg:col-span-2 space-y-6">
              {/* MISSION STATEMENT */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 py-4">
                  <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                  <CardTitle className="text-base">Mission Statement</CardTitle>
                  <Switch defaultChecked className="ml-auto" />
                </CardHeader>
                <CardContent className="grid gap-4 border-t pt-6">
                  <div className="grid gap-2">
                    <Label>Mission Header</Label>
                    <Input defaultValue="Empowering the Digital Future" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Mission Body</Label>
                    <Textarea
                      className="min-h-[100px]"
                      defaultValue="We believe in a future where enterprise technology is accessible, scalable, and secure..."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* TEAM GRID */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 py-4">
                  <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                  <CardTitle className="text-base">Leadership Team</CardTitle>
                  <Switch defaultChecked className="ml-auto" />
                </CardHeader>
                <CardContent className="border-t pt-6 space-y-4">
                  {/* Team Member 1 */}
                  <div className="flex items-start gap-4 p-3 border rounded-md bg-slate-50 dark:bg-slate-900/50">
                    <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-slate-500" />
                    </div>
                    <div className="grid gap-1 flex-1">
                      <Input
                        defaultValue="Sarah Connor"
                        className="h-8"
                        placeholder="Name"
                      />
                      <Input
                        defaultValue="CEO & Founder"
                        className="h-8 text-xs"
                        placeholder="Role"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  {/* Team Member 2 */}
                  <div className="flex items-start gap-4 p-3 border rounded-md bg-slate-50 dark:bg-slate-900/50">
                    <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-slate-500" />
                    </div>
                    <div className="grid gap-1 flex-1">
                      <Input
                        defaultValue="John Smith"
                        className="h-8"
                        placeholder="Name"
                      />
                      <Input
                        defaultValue="CTO"
                        className="h-8 text-xs"
                        placeholder="Role"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-dashed"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Team Member
                  </Button>
                </CardContent>
              </Card>

              <Button
                variant="outline"
                className="w-full h-24 border-dashed text-muted-foreground"
              >
                <Plus className="mr-2 h-6 w-6" /> Add Section
              </Button>
            </div>

            {/* RIGHT: Page Settings (Same as Home) */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Page Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Status: Published
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        {/* SEO Tab content would go here */}
      </Tabs>
    </div>
  );
}
