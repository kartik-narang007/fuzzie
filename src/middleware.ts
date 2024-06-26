import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isPublicRoutes = createRouteMatcher([
  "/dashboard"
]);

export default clerkMiddleware((auth, request) => {
   if(isPublicRoutes(request)){
      auth().protect();
   }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
