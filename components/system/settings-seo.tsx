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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Save, Globe, Lock } from "lucide-react";

export default function SettingsSEO() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">General & SEO</h1>
          <p className="text-muted-foreground">
            Configure site identity and indexing settings.
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>
      <Separator />

      <div className="grid gap-6 max-w-4xl">
        {/* SITE IDENTITY */}
        <Card>
          <CardHeader>
            <CardTitle>Site Identity</CardTitle>
            <CardDescription>
              Basic information displayed in search results.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label>Site Title</Label>
              <Input defaultValue="NEXIUS | Intelligent Digital Experiences" />
            </div>
            <div className="grid gap-2">
              <Label>Site Description (Default)</Label>
              <Textarea
                className="h-20"
                defaultValue="Nexius provides enterprise-grade cloud infrastructure for AI agents and digital automation."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Separator Character</Label>
                <Input defaultValue="|" className="font-mono" />
              </div>
              <div className="grid gap-2">
                <Label>Primary Language</Label>
                <Input defaultValue="en-US" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* INDEXING & SITEMAP */}
        <Card>
          <CardHeader>
            <CardTitle>Crawling & Indexing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between border p-4 rounded-md">
              <div className="space-y-0.5">
                <Label className="text-base">Discourage search engines</Label>
                <p className="text-sm text-muted-foreground">
                  Adds 'noindex' to all pages. Useful for staging.
                </p>
              </div>
              <Switch />
            </div>

            <div className="grid gap-2">
              <Label>Robots.txt Content</Label>
              <Textarea
                className="font-mono text-xs h-24"
                defaultValue={`User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: https://nexius.com/sitemap.xml`}
              />
            </div>
          </CardContent>
        </Card>

        {/* MAINTENANCE MODE */}
        <Card className="border-red-200 dark:border-red-900">
          <CardHeader>
            <CardTitle className="text-red-600 flex items-center gap-2">
              <Lock className="h-5 w-5" /> Maintenance Mode
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Enable Maintenance Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Show a "Coming Soon" page to all visitors.
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
