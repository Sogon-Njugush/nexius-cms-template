import { PageHeader } from "@/components/platform/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="p-6">
      <PageHeader
        heading="Dashboard"
        description="Overview of your system performance."
      />

      {/* 1. KEY METRICS */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Total Visitors",
            value: "45,231",
            icon: Users,
            desc: "+20.1% from last month",
          },
          {
            title: "Active Leads",
            value: "+2350",
            icon: Activity,
            desc: "+180 since last hour",
          },
          {
            title: "Blog Posts",
            value: "12,234",
            icon: CreditCard,
            desc: "12 drafts pending",
          },
          {
            title: "System Health",
            value: "98%",
            icon: Activity,
            desc: "All systems operational",
          },
        ].map((item, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 2. RECENT ACTIVITY (Placeholder for Table) */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-8">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Content Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Dummy List Items */}
              {[
                "Homepage Hero updated",
                "New Blog: 'AI Trends' published",
                "Careers page text fixed",
              ].map((activity, i) => (
                <div className="flex items-center" key={i}>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      by Admin User • 2 hours ago
                    </p>
                  </div>
                  <div className="ml-auto font-medium">Edited</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
