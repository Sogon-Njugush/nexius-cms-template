import { redirect } from "next/navigation";

export default function HomePage() {
  throw new Error("Error 424");
  redirect("/login");
}
