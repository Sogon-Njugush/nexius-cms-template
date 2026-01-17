"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Layers, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Nexius Brand Header */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF5722] text-white shadow-lg">
          <Layers className="h-7 w-7" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-white uppercase">
          NEXIUS
        </span>
      </div>

      <Card className="border-none bg-[#121214] shadow-2xl">
        <CardHeader className="text-center px-6 pt-8 pb-2">
          <CardTitle className="text-2xl font-bold text-white tracking-tight">
            Forgot password?
          </CardTitle>
          <CardDescription className="text-zinc-400 mt-2">
            Enter your email and we'll send you instructions to reset your
            password.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-8 pt-6">
          <form onSubmit={(e) => e.preventDefault()}>
            <FieldGroup className="gap-6">
              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="text-zinc-300 font-medium ml-1"
                >
                  Email address
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="h-12 bg-zinc-900 border-zinc-800 text-white focus-visible:ring-[#FF5722] focus-visible:border-[#FF5722]"
                />
              </Field>

              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white h-12 font-bold rounded-xl transition-all active:scale-[0.98]"
                >
                  Send Reset Link
                </Button>

                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to login
                </Link>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
