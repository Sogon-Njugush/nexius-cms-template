"use client";

import * as React from "react";
import { Layers } from "lucide-react";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

export function OTPForm({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  const [timeLeft, setTimeLeft] = React.useState(57);

  // Simple countdown timer
  React.useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {/* Nexius Branding Header */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF5722] text-white shadow-lg">
          <Layers className="h-7 w-7" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-white uppercase">
          NEXIUS
        </span>
      </div>

      <Card className="border-none bg-[#121214] shadow-2xl" {...props}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">
            Enter verification code
          </CardTitle>
          <CardDescription className="text-zinc-400">
            We sent a 6-digit code to your email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <FieldGroup className="gap-8">
              <Field className="flex flex-col items-center">
                <FieldLabel
                  htmlFor="otp"
                  className="text-zinc-300 self-start mb-2"
                >
                  Verification code
                </FieldLabel>

                {/* Responsive Gap: gap-1.5 for mobile, gap-2 for desktop */}
                <InputOTP maxLength={6} id="otp" required autoFocus>
                  <InputOTPGroup className="gap-1.5 sm:gap-2">
                    {[...Array(6)].map((_, i) => (
                      <InputOTPSlot
                        key={i}
                        index={i}
                        // Size adjustments to ensure it fits max-w-xs
                        className="size-10 sm:size-12 rounded-lg border-zinc-800 bg-zinc-900 text-white font-bold text-lg focus:ring-2 focus:ring-[#FF5722] focus:border-[#FF5722]"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>

                <FieldDescription className="text-center mt-4">
                  Enter the 6-digit code sent to your email.
                </FieldDescription>
              </Field>

              <FieldGroup className="gap-4">
                <Link href={"/dashboard"}>
                  <Button
                    type="submit"
                    className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white h-12 font-bold rounded-xl transition-all active:scale-[0.98]"
                  >
                    Verify Account
                  </Button>
                </Link>
                <FieldDescription className="text-center text-sm font-medium">
                  Didn&apos;t receive the code?{" "}
                  <span className="text-zinc-500">
                    Resend in 0:{timeLeft.toString().padStart(2, "0")}
                  </span>
                </FieldDescription>
              </FieldGroup>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
