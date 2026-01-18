import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
        <FileQuestion className="h-10 w-10 text-muted-foreground" />
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Page not found
      </h1>

      <p className="mt-4 max-w-lg text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been removed, renamed, or doesn&apos;t exist.
      </p>

      <div className="mt-8 flex gap-4">
        <Button variant="outline" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard">Return to Dashboard</Link>
        </Button>
      </div>

      <div className="mt-12 text-sm text-muted-foreground">
        <p>Error Code: 404</p>
      </div>
    </div>
  );
}
