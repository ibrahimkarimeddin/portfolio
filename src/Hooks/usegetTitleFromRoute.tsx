import { PROJECT_NAME } from "../config/AppKey";
import { AppRoutes } from "../config/Routes";


export const usegetTitleFromRoute = (path:any) => {
    if (AppRoutes[path]) {
      return `${PROJECT_NAME} | ${AppRoutes[path]}`;
    }
}