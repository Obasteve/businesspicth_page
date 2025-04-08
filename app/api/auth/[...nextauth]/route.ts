import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

console.log("GITHUB_ID:", process.env.GITHUB_ID); // Debug
console.log("GITHUB_SECRET:", process.env.GITHUB_SECRET); // Debug

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  debug: true, // Enable debug logs
});

export { handlers as GET, handlers as POST };
