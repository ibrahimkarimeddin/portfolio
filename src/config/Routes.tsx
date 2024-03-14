import { ReactElement, lazy, LazyExoticComponent } from 'react';

const Page404 = lazy(() => import('../Layout/Ui/NotFoundPage'));
const Page = lazy(() => import('../Pages/Home/Page'));


interface Route {
  path: string;
  header: string;
  element: ReactElement | LazyExoticComponent<any>;
  withLayout?: boolean;
}

export const routes: Route[] = [
  { path: "*", header: "Error Page", element: <Page404 /> },
  { path: "/", header: "Home Page", element: <Page />, withLayout: true }
];

export const AppRoutes: Record<string, string> = Object.fromEntries(
  routes.map((route) => [route.path, route.header])
);
