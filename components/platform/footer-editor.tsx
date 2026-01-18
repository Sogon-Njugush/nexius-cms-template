"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { GripVertical, Plus, Save, Trash2, Copyright } from "lucide-react";

export default function FooterEditor() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Footer Layout</h1>
          <p className="text-muted-foreground">
            Edit the links and columns at the bottom of your site.
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" /> Save Footer
        </Button>
      </div>
      <Separator />

      <Tabs defaultValue="col1" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="col1">Column 1</TabsTrigger>
          <TabsTrigger value="col2">Column 2</TabsTrigger>
          <TabsTrigger value="col3">Column 3</TabsTrigger>
          <TabsTrigger value="bottom">Legal Bar</TabsTrigger>
        </TabsList>

        {/* ================= COLUMN 1 (Platform) ================= */}
        <TabsContent value="col1" className="mt-6 space-y-6 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Column Header</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Label>Title</Label>
                <Input defaultValue="Platform" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input
                  defaultValue="Automation"
                  className="flex-1"
                  placeholder="Link Text"
                />
                <Input
                  defaultValue="/automation"
                  className="flex-1 font-mono text-xs"
                  placeholder="URL"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input
                  defaultValue="Data Network"
                  className="flex-1"
                  placeholder="Link Text"
                />
                <Input
                  defaultValue="/data"
                  className="flex-1 font-mono text-xs"
                  placeholder="URL"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input
                  defaultValue="Intelligence"
                  className="flex-1"
                  placeholder="Link Text"
                />
                <Input
                  defaultValue="/intelligence"
                  className="flex-1 font-mono text-xs"
                  placeholder="URL"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="border-dashed w-full"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Link
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ================= COLUMN 2 (Solutions) ================= */}
        <TabsContent value="col2" className="mt-6 space-y-6 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Column Header</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Label>Title</Label>
                <Input defaultValue="Solutions" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input
                  defaultValue="Enterprise"
                  className="flex-1"
                  placeholder="Link Text"
                />
                <Input
                  defaultValue="/solutions/enterprise"
                  className="flex-1 font-mono text-xs"
                  placeholder="URL"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input
                  defaultValue="FinTech"
                  className="flex-1"
                  placeholder="Link Text"
                />
                <Input
                  defaultValue="/solutions/fintech"
                  className="flex-1 font-mono text-xs"
                  placeholder="URL"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input
                  defaultValue="Logistics"
                  className="flex-1"
                  placeholder="Link Text"
                />
                <Input
                  defaultValue="/solutions/logistics"
                  className="flex-1 font-mono text-xs"
                  placeholder="URL"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="border-dashed w-full"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Link
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ================= COLUMN 3 (Company) ================= */}
        <TabsContent value="col3" className="mt-6 space-y-6 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Column Header</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Label>Title</Label>
                <Input defaultValue="Company" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input
                  defaultValue="About Us"
                  className="flex-1"
                  placeholder="Link Text"
                />
                <Input
                  defaultValue="/about"
                  className="flex-1 font-mono text-xs"
                  placeholder="URL"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input
                  defaultValue="Careers"
                  className="flex-1"
                  placeholder="Link Text"
                />
                <Input
                  defaultValue="/careers"
                  className="flex-1 font-mono text-xs"
                  placeholder="URL"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input
                  defaultValue="Contact Support"
                  className="flex-1"
                  placeholder="Link Text"
                />
                <Input
                  defaultValue="/contact"
                  className="flex-1 font-mono text-xs"
                  placeholder="URL"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="border-dashed w-full"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Link
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ================= LEGAL BAR (Bottom) ================= */}
        <TabsContent value="bottom" className="mt-6 space-y-6 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Copyright Settings</CardTitle>
              <CardDescription>
                Text displayed at the very bottom left.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Label>Copyright Text</Label>
                <div className="flex items-center gap-2">
                  <Copyright className="h-4 w-4 text-muted-foreground" />
                  <Input defaultValue="2026 Nexius Inc. All rights reserved." />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Legal Links</CardTitle>
              <CardDescription>
                Horizontal links for legal compliance (e.g., Privacy, Terms).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input defaultValue="Privacy Policy" className="flex-1" />
                <Input
                  defaultValue="/legal/privacy"
                  className="flex-1 font-mono text-xs"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input defaultValue="Terms of Service" className="flex-1" />
                <Input
                  defaultValue="/legal/terms"
                  className="flex-1 font-mono text-xs"
                />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab" />
                <Input defaultValue="Cookie Settings" className="flex-1" />
                <Input defaultValue="#" className="flex-1 font-mono text-xs" />
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="border-dashed w-full"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Legal Link
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
