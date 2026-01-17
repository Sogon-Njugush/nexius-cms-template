import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    // Responsive padding and dark background
    <div className="flex min-h-svh w-full items-center justify-center bg-[#09090b] p-6 md:p-10">
      {/* max-w-sm (384px) ensures the card looks great on all screens */}
      <div className="w-full max-w-sm">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
