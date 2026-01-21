"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
        <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-500" />
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Something went wrong!
      </h1>

      <p className="mt-4 max-w-lg text-muted-foreground">
        We encountered an unexpected error while processing your request. Our
        team has been notified.
      </p>

      {/* Optional: Show technical error message in dev mode only */}
      <div className="mt-6 w-full max-w-md rounded-md bg-slate-100 p-4 dark:bg-slate-900">
        <code className="text-xs font-mono break-all">
          {error.message || "Unknown Application Error"}
        </code>
      </div>

      <div className="mt-8 flex gap-4">
        <Button variant="outline" onClick={() => reset()}>
          <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
        </Button>
        <Button asChild>
          <Link href="/dashboard">
            <Home className="mr-2 h-4 w-4" /> Go to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
