// app/actions.js
"use server"; // Mark this as a server-only file

import { signIn, signOut } from "@/auth";

export async function loginAction() {
  await signIn("github", { redirectTo: "/" });
}

export async function logoutAction() {
  await signOut({ redirectTo: "/" });
}