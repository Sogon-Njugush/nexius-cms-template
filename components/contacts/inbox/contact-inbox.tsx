"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Search,
  Reply,
  Trash2,
  MoreVertical,
  Mail,
  Star,
  Archive,
} from "lucide-react";

// Mock Data
const messages = [
  {
    id: 1,
    sender: "Alice Freeman",
    email: "alice@company.com",
    subject: "Question about Enterprise Pricing",
    preview:
      "Hi team, I was looking at your enterprise tier and had a question regarding...",
    time: "10:23 AM",
    read: false,
  },
  {
    id: 2,
    sender: "Mark Davis",
    email: "mark.d@startup.io",
    subject: "Integration Help Needed",
    preview:
      "I'm trying to connect the API to our legacy system but getting a 403 error...",
    time: "Yesterday",
    read: true,
  },
  {
    id: 3,
    sender: "Sarah Lee",
    email: "sarah@consulting.net",
    subject: "Partnership Opportunity",
    preview:
      "We would like to discuss a potential partnership for the upcoming Q3...",
    time: "2 days ago",
    read: true,
  },
];

export default function ContactInbox() {
  const [selectedMail, setSelectedMail] = React.useState(messages[0]);

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <h1 className="text-2xl font-bold tracking-tight">Support Inbox</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full border rounded-lg overflow-hidden bg-white dark:bg-slate-950 shadow-sm">
        {/* LEFT SIDEBAR: MESSAGE LIST */}
        <div className="md:col-span-5 lg:col-span-4 border-r flex flex-col bg-slate-50/50 dark:bg-slate-900/50">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                className="pl-9 bg-background"
              />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col">
              {messages.map((mail) => (
                <button
                  key={mail.id}
                  onClick={() => setSelectedMail(mail)}
                  className={`flex flex-col gap-2 p-4 text-left hover:bg-accent transition-colors border-b last:border-0 ${selectedMail.id === mail.id ? "bg-accent" : ""}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-semibold ${!mail.read ? "text-slate-900 dark:text-white" : "text-muted-foreground"}`}
                    >
                      {mail.sender}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {mail.time}
                    </span>
                  </div>
                  <span className="text-sm font-medium truncate w-full">
                    {mail.subject}
                  </span>
                  <span className="text-xs text-muted-foreground line-clamp-2">
                    {mail.preview}
                  </span>
                  {!mail.read && (
                    <Badge
                      variant="default"
                      className="w-fit h-5 px-1.5 text-[10px] bg-blue-600"
                    >
                      New
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* RIGHT MAIN: MESSAGE CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col h-full bg-background">
          {/* Message Header */}
          <div className="flex items-center justify-between p-4 border-b h-16">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Archive className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
              <Separator orientation="vertical" className="mx-1 h-6" />
              <Button variant="ghost" size="icon">
                <Star className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Message Body */}
          <ScrollArea className="flex-1 p-6">
            <div className="flex items-start gap-4 mb-6">
              <Avatar className="h-10 w-10">
                <AvatarFallback>{selectedMail.sender[0]}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{selectedMail.sender}</div>
                <div className="text-xs text-muted-foreground">
                  {selectedMail.email}
                </div>
              </div>
              <div className="ml-auto text-xs text-muted-foreground">
                {selectedMail.time}
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4">{selectedMail.subject}</h2>
            <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-4">
              <p>Hi Nexius Team,</p>
              <p>{selectedMail.preview}</p>
              <p>
                Could you please provide documentation on the API rate limits?
                We are planning to scale up next month.
              </p>
              <p>
                Thanks,
                <br />
                {selectedMail.sender.split(" ")[0]}
              </p>
            </div>
          </ScrollArea>

          {/* Reply Box */}
          <div className="p-4 border-t bg-slate-50/30 dark:bg-slate-900/30">
            <div className="grid gap-4">
              <textarea
                className="w-full min-h-[80px] p-3 rounded-md border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder={`Reply to ${selectedMail.sender}...`}
              />
              <div className="flex justify-end">
                <Button className="gap-2">
                  <Reply className="h-4 w-4" /> Send Reply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
