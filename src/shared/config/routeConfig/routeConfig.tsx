import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRouters {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePats: Record<AppRouters, string> = {
  [AppRouters.MAIN]: "/",
  [AppRouters.ABOUT]: "/about",
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePats.main,
    element: <MainPage />,
  },
  {
    path: RoutePats.about,
    element: <AboutPage />,
  },
];
