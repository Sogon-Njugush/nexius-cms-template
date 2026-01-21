import { redirect } from "next/navigation";

export default function HomePage() {
  throw new Error("Broken library usage");
  redirect("/login");
}
