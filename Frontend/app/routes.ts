import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("routes/auth.tsx", [
    route("login", "auth/login.tsx"),
    route("register", "auth/register.tsx"),
    route("forget-password", "auth/forget-password.tsx"),
  ]),
] satisfies RouteConfig;
