"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  GripVertical,
  Plus,
  Trash2,
  Save,
  Link as LinkIcon,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function NavEditor() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Main Navigation</h1>
          <p className="text-muted-foreground">
            Manage the top menu links and dropdowns.
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" /> Save Menu
        </Button>
      </div>
      <Separator />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* LEFT: MENU ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {/* Example Link 1 */}
          <Card>
            <CardContent className="p-4 flex items-start gap-4">
              <GripVertical className="h-5 w-5 text-muted-foreground mt-2 cursor-grab" />
              <div className="grid gap-4 flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Label</Label>
                    <Input defaultValue="Platform" />
                  </div>
                  <div className="space-y-2">
                    <Label>URL Path</Label>
                    <Input defaultValue="/platform" />
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-red-500 mt-1">
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Example Link 2 (Dropdown) */}
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-sm text-orange-600">
                Dropdown Menu
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex items-start gap-4">
              <GripVertical className="h-5 w-5 text-muted-foreground mt-2 cursor-grab" />
              <div className="grid gap-4 flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Label</Label>
                    <Input defaultValue="Solutions" />
                  </div>
                  <div className="space-y-2">
                    <Label>Sub-items</Label>
                    <div className="text-xs text-muted-foreground py-2 border rounded px-3 bg-muted">
                      Contains 3 items: Enterprise, FinTech, Logistics
                    </div>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground mt-1"
              >
                <LinkIcon className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Button variant="outline" className="w-full border-dashed">
            <Plus className="mr-2 h-4 w-4" /> Add Menu Item
          </Button>
        </div>

        {/* RIGHT: SETTINGS */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Menu Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Sticky Navbar</Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label>Show Search Bar</Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label>Show "Get Started"</Label>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
