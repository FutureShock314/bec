import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/contact", "./routes/contact.tsx"),
  route("/quote", "./routes/quote.tsx")
] satisfies RouteConfig;
