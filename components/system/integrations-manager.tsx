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
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BarChart3, CreditCard, Mail, Key } from "lucide-react";

export default function IntegrationsManager() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Integrations</h1>
          <p className="text-muted-foreground">
            Manage API keys and third-party services.
          </p>
        </div>
      </div>
      <Separator />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* GOOGLE ANALYTICS */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-md text-orange-600">
                <BarChart3 className="h-5 w-5" />
              </div>
              <CardTitle className="text-base">Google Analytics</CardTitle>
            </div>
            <Badge
              variant="default"
              className="bg-green-600 hover:bg-green-600"
            >
              Connected
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <p className="text-sm text-muted-foreground">
              Tracking site traffic and user behavior.
            </p>
            <div className="grid gap-2">
              <Label className="text-xs">Measurement ID</Label>
              <Input
                defaultValue="G-XXXXXXXXXX"
                disabled
                className="font-mono bg-muted"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Configure
            </Button>
          </CardFooter>
        </Card>

        {/* STRIPE PAYMENT */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-md text-purple-600">
                <CreditCard className="h-5 w-5" />
              </div>
              <CardTitle className="text-base">Stripe</CardTitle>
            </div>
            <Badge variant="outline">Disconnected</Badge>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <p className="text-sm text-muted-foreground">
              Accept payments and manage subscriptions.
            </p>
            <div className="grid gap-2">
              <Label className="text-xs">Publishable Key</Label>
              <Input placeholder="pk_test_..." className="font-mono" />
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" className="w-full">
              Connect
            </Button>
          </CardFooter>
        </Card>

        {/* SENDGRID EMAIL */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-md text-blue-600">
                <Mail className="h-5 w-5" />
              </div>
              <CardTitle className="text-base">SendGrid</CardTitle>
            </div>
            <Badge variant="secondary">Setup Required</Badge>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <p className="text-sm text-muted-foreground">
              Transactional emails for forms and alerts.
            </p>
            <div className="grid gap-2">
              <Label className="text-xs">API Key</Label>
              {/* 👇 CHANGED: 'value' to 'defaultValue' */}
              <Input
                type="password"
                defaultValue="SG.xxxxxxxx"
                className="font-mono"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" className="w-full">
              Save Key
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Separator className="my-4" />

      {/* DEVELOPER KEYS SECTION */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Key className="h-4 w-4" /> Developer API Keys
        </h3>
        <Card>
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4 border-b last:border-0">
              <div>
                <p className="font-medium text-sm">Production Key</p>
                <p className="text-xs text-muted-foreground font-mono">
                  sk_live_51Mz...
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">
                  Last used: 2 days ago
                </span>
                <Button variant="destructive" size="sm">
                  Revoke
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
