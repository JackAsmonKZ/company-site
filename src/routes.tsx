import { RouteObject } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage/HomePage';

export type ExtendedRouteObject = RouteObject & {
	title: string;
	titleLang?: string;
	path: string;
};

export const ROUTES = {
	home: {
		path: '/',
		title: 'Home',
		element: <HomePage />,
	} as ExtendedRouteObject,
};

export type RouteKeys = keyof typeof ROUTES;

// Create an array of routes for use with useRoutes
export const routes: ExtendedRouteObject[] = Object.values(ROUTES);

export const getPathFromRoute = (route: ExtendedRouteObject): string => {
	return route.path || '';
};
