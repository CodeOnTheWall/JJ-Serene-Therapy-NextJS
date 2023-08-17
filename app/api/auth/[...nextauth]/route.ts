import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

// call NextAuth as a func and provide the options object
// The handler function is a serverless function, which means that it
// is only called when it is needed. This is a good thing because it means
// that the NextAuth server does not have to be constantly connected to the
// database.
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const allowedUsers = [
          { id: "1", username: "jasontest", password: "jasontest" },
          { id: "2", username: "bralen", password: "14Brealpomd!" },
          // Add more allowed users here...
        ];

        const user = allowedUsers.find(
          (allowedUser) =>
            allowedUser.username === credentials.username &&
            allowedUser.password === credentials.password
        );

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});

// this handler func can be called as both GET and POST
// GET here is for the session, and POST here is for the login
// more info here: https://next-auth.js.org/configuration/initialization#route-handlers-app
export { handler as GET, handler as POST };
