"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Layers } from "lucide-react"; // Match the sidebar logo
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Nexius Logo & Title Section */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-white shadow-lg">
          <Layers className="h-6 w-6" />
        </div>
        <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          NEXIUS
        </span>
      </div>

      <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            Login to your account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="focus-visible:ring-orange-600"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm font-medium text-orange-600 hover:text-orange-700 underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="focus-visible:ring-orange-600"
                  required
                />
              </Field>
              <Field className="pt-2">
                {/* Theme Color Button */}
                <Link href="/otp">
                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-md transition-all active:scale-[0.98]"
                  >
                    Login
                  </Button>
                </Link>
                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button variant="outline" type="button" className="w-full">
                  Login with Google
                </Button>
                {/* <FieldDescription className="text-center pt-4">
                  Don&apos;t have an account?{" "}
                  <a
                    href="#"
                    className="font-semibold text-orange-600 hover:underline"
                  >
                    Sign up
                  </a>
                </FieldDescription> */}
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
