"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, Save, MapPin, Mail, Phone } from "lucide-react";

export default function ContactEditor() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Editing: Contact Page
          </h1>
          <p className="text-muted-foreground">
            Update contact info and form routing.
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

      <div className="grid gap-6 lg:grid-cols-3">
        {/* LEFT: Contact Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* GENERAL INFO */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div className="grid gap-1 flex-1">
                  <Label>Support Email</Label>
                  <Input defaultValue="support@nexius.com" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div className="grid gap-1 flex-1">
                  <Label>Phone Number</Label>
                  <Input defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* LOCATIONS */}
          <Card>
            <CardHeader>
              <CardTitle>Office Locations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border p-4 rounded-md space-y-3">
                <div className="flex items-center gap-2 font-semibold">
                  <MapPin className="h-4 w-4 text-orange-600" /> Headquarters
                  (NY)
                </div>
                <div className="grid gap-2 pl-6">
                  <Label>Address Line 1</Label>
                  <Input defaultValue="123 Tech Blvd, Suite 400" />
                  <Label>Map Embed URL</Label>
                  <Input
                    defaultValue="https://maps.google.com/..."
                    className="font-mono text-xs"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT: Form Settings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Form Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>Send Submissions To</Label>
                <Input defaultValue="leads@nexius.com" />
              </div>
              <div className="grid gap-2">
                <Label>Success Message</Label>
                <Input defaultValue="Thanks! We'll be in touch." />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
