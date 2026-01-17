import { OTPForm } from "@/components/auth/otp-form";

export default function OTPPage() {
  return (
    // Set dark background to match your screenshot
    <div className="flex min-h-svh w-full items-center justify-center bg-[#09090b] p-6 md:p-10">
      {/* Increased max-w from xs to sm (384px) to prevent slot overflow */}
      <div className="w-full max-w-sm">
        <OTPForm />
      </div>
    </div>
  );
}
