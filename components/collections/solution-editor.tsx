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
import { ArrowLeft, Save, Layers, Cpu, Shield, Globe } from "lucide-react";
import Link from "next/link";

export default function SolutionEditor() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/solutions">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Add New Solution
            </h1>
            <p className="text-muted-foreground">
              Create a new service card for the platform.
            </p>
          </div>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" /> Save Solution
        </Button>
      </div>
      <Separator />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* LEFT: Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>Solution Title</Label>
                <Input placeholder="e.g., Cloud Infrastructure" />
              </div>
              <div className="grid gap-2">
                <Label>Short Description</Label>
                <Textarea
                  placeholder="Appears on the homepage card (max 120 chars)"
                  className="h-24"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Button Text</Label>
                  <Input defaultValue="Learn More" />
                </div>
                <div className="grid gap-2">
                  <Label>Target URL</Label>
                  <Input placeholder="/services/cloud" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT: Visuals */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="core">Core Tech</SelectItem>
                    <SelectItem value="auto">Automation</SelectItem>
                    <SelectItem value="sec">Security</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label>Card Icon</Label>
                <div className="flex gap-4">
                  {[Layers, Cpu, Shield, Globe].map((Icon, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 border rounded-md flex items-center justify-center hover:bg-slate-50 cursor-pointer focus:ring-2 focus:ring-orange-500"
                    >
                      <Icon className="h-5 w-5 text-slate-600" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Theme Color</Label>
                <Select defaultValue="orange">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="orange">Orange (Core)</SelectItem>
                    <SelectItem value="blue">Blue (Tech)</SelectItem>
                    <SelectItem value="teal">Teal (Security)</SelectItem>
                    <SelectItem value="purple">Purple (Dev)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
