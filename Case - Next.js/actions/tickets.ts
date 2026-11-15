"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addTicket } from "@/lib/storage";

export async function createTicket(formData: FormData) {
  const title = String(formData.get("title"));
  const description = String(formData.get("description"));

  await addTicket({ title, description });

  revalidatePath("/");
  redirect("/");
}
