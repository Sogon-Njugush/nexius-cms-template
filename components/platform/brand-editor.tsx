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
import { Save, Upload, Facebook, Linkedin, Twitter } from "lucide-react";

export default function BrandEditor() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Brand & Identity
          </h1>
          <p className="text-muted-foreground">
            Update logos, icons, and social links.
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>
      <Separator />

      <div className="grid gap-6 md:grid-cols-2">
        {/* LOGO UPLOAD */}
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Site Logos</CardTitle>
            <CardDescription>Images used in header and footer.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label>Light Mode Logo (SVG/PNG)</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition cursor-pointer">
                <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                  <Upload className="h-6 w-6 text-slate-500" />
                </div>
                <p className="text-sm font-medium">Click to upload</p>
                <p className="text-xs text-muted-foreground">Max 2MB</p>
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Dark Mode Logo</Label>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center bg-slate-900 hover:bg-slate-800 transition cursor-pointer border-slate-700">
                <div className="h-12 w-12 bg-slate-800 rounded-full flex items-center justify-center mb-2">
                  <Upload className="h-6 w-6 text-slate-400" />
                </div>
                <p className="text-sm font-medium text-slate-200">
                  Click to upload
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SOCIAL LINKS */}
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
            <CardDescription>Links displayed in the footer.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-blue-600" />
              <div className="grid gap-1 flex-1">
                <Label>LinkedIn URL</Label>
                <Input placeholder="https://linkedin.com/company/..." />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Twitter className="h-5 w-5 text-sky-500" />
              <div className="grid gap-1 flex-1">
                <Label>X (Twitter) URL</Label>
                <Input placeholder="https://x.com/..." />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Facebook className="h-5 w-5 text-blue-700" />
              <div className="grid gap-1 flex-1">
                <Label>Facebook URL</Label>
                <Input placeholder="https://facebook.com/..." />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
