import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import GymBranch from "../pages/GymBranch";
import Layout from "../pages/Layout";
import Pricing from "../pages/Pricing";
import Promotion from "../pages/Promotion";
import Contact from "../pages/Contact";
import Workout from "../pages/Workout";
import Info from "../pages/info";
import Coupon from "../pages/Coupon";

export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

export const webRoutes = {
  home: "/",
  pricing: "/pricing",
  branch: "/gymbranch",
  promotion: "/promotion",
  contact: "/contact",
  workout: "/workout",
  info: "/info",
  coupon: "/coupon",
  // discover: "/discover",
};

const errorElement = (
  <div className="flex items-center justify-center h-screen">
    Sorry, something went wrong
  </div>
);

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: webRoutes.home, element: <ProfilePage /> },
      { path: webRoutes.pricing, element: <Pricing /> },
      { path: webRoutes.promotion, element: <Promotion /> },
      { path: webRoutes.contact, element: <Contact /> },
      { path: webRoutes.branch, element: <GymBranch /> },
      { path: webRoutes.workout, element: <Workout /> },
      { path: webRoutes.info, element: <Info /> },
      { path: webRoutes.coupon, element: <Coupon /> },

      // { path: webRoutes.discover, element: <DiscoverPage /> },
    ],
  },
  // {
  //   path: "/gymbranch",
  //   element: <Layout />,
  //   children: [
  //     { path: webRoutes.branch, element: <GymBranch /> },
  //     // { path: webRoutes.discover, element: <DiscoverPage /> },
  //   ],
  // },
  {
    path: "*",
    element: <div>NotFoundPage</div>,
    errorElement: errorElement,
  },
];

const router = createBrowserRouter(appRoutes);

export default router;