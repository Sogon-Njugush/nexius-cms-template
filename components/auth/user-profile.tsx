"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Camera,
  Mail,
  MapPin,
  Calendar,
  Shield,
  Key,
  Smartphone,
  LogOut,
  Save,
  Bell,
} from "lucide-react";

export default function UserProfile() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
      </div>
      <Separator />

      <div className="grid gap-6 lg:grid-cols-12">
        {/* LEFT COLUMN: IDENTITY CARD */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="overflow-hidden">
            <div className="h-32 bg-slate-900 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-20" />
            </div>
            <CardContent className="pt-0 relative">
              <div className="flex flex-col items-center -mt-12 mb-4">
                <div className="relative">
                  <Avatar className="h-24 w-24 border-4 border-white dark:border-slate-950 shadow-lg">
                    <AvatarImage src="/avatars/shadcn.jpg" />
                    <AvatarFallback>NX</AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow-md"
                  >
                    <Camera className="h-4 w-4 text-slate-600" />
                  </Button>
                </div>
                <h2 className="text-xl font-bold mt-4">Alex Nexus</h2>
                <Badge variant="secondary" className="mt-1">
                  Super Admin
                </Badge>
              </div>

              <div className="space-y-4 text-sm mt-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" /> alex@nexius.com
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> San Francisco, CA
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-4 w-4" /> Joined Jan 2024
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50 dark:bg-slate-900/50 p-4 border-t flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 border-red-200 dark:border-red-900"
              >
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            </CardFooter>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                System Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Storage Used</span>
                <span className="font-bold">2.4 GB / 5 GB</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[45%]" />
              </div>
              <div className="flex justify-between text-sm pt-2">
                <span className="text-muted-foreground">API Calls</span>
                <span className="font-bold">12,500 / mo</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN: TABS */}
        <div className="lg:col-span-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            {/* TAB: GENERAL */}
            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your public profile details.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input defaultValue="Alex" />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input defaultValue="Nexus" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input defaultValue="alex@nexius.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea
                      defaultValue="Leading the digital transformation initiatives at Nexius."
                      className="h-24"
                    />
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* TAB: SECURITY */}
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password to keep your account secure.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Current Password</Label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label>New Password</Label>
                    <Input type="password" />
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button variant="secondary">Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-medium">Authenticator App</h4>
                      <p className="text-sm text-muted-foreground">
                        Use an app like Google Authenticator.
                      </p>
                    </div>
                  </div>
                  <Switch />
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB: NOTIFICATIONS */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                  <CardDescription>
                    Choose what you want to be notified about.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Product Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive news about new features.
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Security Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about suspicious logins.
                      </p>
                    </div>
                    <Switch defaultChecked disabled />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">System Downtime</Label>
                      <p className="text-sm text-muted-foreground">
                        Alerts when API services are down.
                      </p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
