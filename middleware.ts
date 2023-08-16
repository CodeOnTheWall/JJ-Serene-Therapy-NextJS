import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/background",
    "/booknow",
    "/contact",
    "/treatments",
    "/api/:path",
    "/sign-up",
    "/sign-in",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next|admin).*)", "/", "/(api|trpc)(.*)"],
};
