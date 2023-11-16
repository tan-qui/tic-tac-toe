import React from "react";
import { pathUrl } from "./pathUrl";

const Home = React.lazy(() => import("../component/home"));
const Master = React.lazy(() => import("../component/master"));
const Blank = React.lazy(() => import("../component/blank"));

export const pageRouter = [
  {
    url: pathUrl.HOME,
    component: Home,
  },
  {
    url: pathUrl.MASTER,
    component: Master,
  },
  {
    url: pathUrl.BLANK,
    component: Blank,
  },
];
