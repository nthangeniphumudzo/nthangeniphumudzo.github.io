import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("features", "routes/features.tsx"),
  route("curriculum", "routes/curriculum.tsx"),
  route("child-safety", "routes/child-safety.tsx"),
  route("faq", "routes/faq.tsx"),
  route("support", "routes/support.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("terms", "routes/terms.tsx"),
  route("community-guidelines", "routes/community-guidelines.tsx"),
  route("account-deletion", "routes/account-deletion.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
