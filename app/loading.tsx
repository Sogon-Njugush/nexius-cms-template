import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex h-screen w-full bg-muted/40">
      {/* 1. Fake Sidebar */}
      <div className="hidden border-r bg-background md:block w-64 p-4 space-y-4">
        <div className="flex items-center gap-2 px-2">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <div className="space-y-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
        <div className="space-y-2 mt-8">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Fake Header */}
        <header className="h-14 border-b bg-background flex items-center px-6 gap-4">
          <Skeleton className="h-8 w-64" /> {/* Breadcrumb fake */}
          <div className="ml-auto flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </header>

        {/* Fake Page Content */}
        <main className="flex-1 overflow-auto p-6 space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-8 w-[200px]" />
            <Skeleton className="h-4 w-[300px]" />
          </div>

          {/* Fake Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
          </div>

          {/* Fake Table/Big Area */}
          <Skeleton className="h-[400px] w-full rounded-xl" />
        </main>
      </div>
    </div>
  );
}
