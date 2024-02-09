import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePats: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.NOT_FOUND]: '*',
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
  {
    path: RoutePats.not_found,
    element: <NotFoundPage />,
  },
];
